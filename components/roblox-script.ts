export const robloxScript = `local plr = game.Players.LocalPlayer
local Character = plr.Character or plr.CharacterAdded:Wait()
local Humanoid = Character:WaitForChild("Humanoid")
local RunService = game:GetService("RunService")
local TweenService = game:GetService("TweenService")
local ContentProvider = game:GetService("ContentProvider")
local Camera = workspace.CurrentCamera or workspace:WaitForChild("Camera")

-- Pre-cargar animaciones
local RunAnim = Humanoid:LoadAnimation(script:WaitForChild("Sprint"))
local JumpAnim = Humanoid:LoadAnimation(script:WaitForChild("Jump"))
RunAnim.Priority = Enum.AnimationPriority.Action
JumpAnim.Priority = Enum.AnimationPriority.Action
ContentProvider:PreloadAsync({RunAnim, JumpAnim})

-- Estado
local Running = false
local isOnGround = true
local Jumped = false
local originalSpeed = Humanoid.WalkSpeed
local db = true
local lastPosition = Character.PrimaryPart.Position

-- Configuración
local newSpeed = 50
local DefaultFieldOfView = 60
local SprintFieldOfView = 90

-- Inicializar FOV
Camera.FieldOfView = DefaultFieldOfView

-- Tween para cambiar velocidad suavemente
local function changeSpeed(speed)
	local tween = TweenService:Create(Humanoid, TweenInfo.new(0.2), {WalkSpeed = speed})
	tween:Play()
end

-- Toggle de sprint
local RunEnabledFlag = script:FindFirstChild("RunEnabled") or Instance.new("BoolValue")
RunEnabledFlag.Name = "RunEnabled"
RunEnabledFlag.Value = true
RunEnabledFlag.Parent = script

-- Limpiar animaciones residuales
local function clearAnimations()
	RunAnim:Stop(0.1)
	JumpAnim:Stop(0.1)
	Humanoid.Animator:ClearAllChildren()
end

-- Iniciar sprint
local function StartRun()
	if not Running and isOnGround and RunEnabledFlag.Value and Humanoid.MoveDirection.Magnitude > 0.1 then
		clearAnimations() -- Limpiar antes de iniciar
		Running = true
		RunAnim:Play(0.1)
		changeSpeed(newSpeed)
		local goal = { FieldOfView = SprintFieldOfView }
		local tween = TweenService:Create(Camera, TweenInfo.new(0.5), goal)
		tween:Play()
	end
end

-- Detener sprint
local function StopRun()
	if Running then
		Running = false
		RunAnim:Stop(0.2)
		changeSpeed(originalSpeed)
		local goal = { FieldOfView = DefaultFieldOfView }
		local tween = TweenService:Create(Camera, TweenInfo.new(1), goal)
		tween:Play()
	end
end

-- Manejo de recarga de personaje
plr.CharacterAdded:Connect(function(newChar)
	Character = newChar
	Humanoid = Character:WaitForChild("Humanoid")
	lastPosition = Character.PrimaryPart.Position
	RunAnim = Humanoid:LoadAnimation(script:WaitForChild("Sprint"))
	JumpAnim = Humanoid:LoadAnimation(script:WaitForChild("Jump"))
	RunAnim.Priority = Enum.AnimationPriority.Action
	JumpAnim.Priority = Enum.AnimationPriority.Action
	ContentProvider:PreloadAsync({RunAnim, JumpAnim})
	clearAnimations()
	Camera.FieldOfView = DefaultFieldOfView
end)

-- Loop principal
RunService.Heartbeat:Connect(function()
	-- Verificar suelo y estado
	isOnGround = Humanoid.FloorMaterial ~= Enum.Material.Air
	local moving = Humanoid.MoveDirection.Magnitude > 0.1
	local state = Humanoid:GetState()

	-- Control de sprint
	if moving and RunEnabledFlag.Value and (isOnGround or state == Enum.HumanoidStateType.Jumping or state == Enum.HumanoidStateType.Freefall) then
		StartRun()
	else
		StopRun()
	end

	-- Manejo de salto
	if Running and state == Enum.HumanoidStateType.Jumping and not Jumped then
		Jumped = true
		RunAnim:Stop(0.1)
		JumpAnim:Play(0.1)
	end

	if Running and Jumped and state == Enum.HumanoidStateType.Landed then
		Jumped = false
		JumpAnim:Stop(0.1)
		RunAnim:Play(0.1)
	end

	-- Efecto de polvo
	if Running and isOnGround and db then
		db = false
		local dust = game.ReplicatedStorage.Fx.Dust:Clone()
		dust.Position = Character.PrimaryPart.Position + Vector3.new(0, -2.5, 0)
		dust.Parent = workspace.Fx
		dust.Attachment.Dust:Emit(1)
		game.Debris:AddItem(dust, 2.5)
		task.wait(0.15)
		db = true
	end

	-- Partículas de rastro
	if Running then
		for i = 1, math.random(1, 2) do
			local rp = Instance.new("Part", workspace.Fx)
			rp.Anchored = true
			rp.CanCollide = false
			rp.Transparency = 0.8
			rp.Size = Vector3.new(0.05, 0.05, math.random(2.5, 3.5))
			rp.Material = Enum.Material.SmoothPlastic
			local choice = math.random(1, 3)
			local color = choice == 1 and Color3.fromRGB(107, 107, 107)
				or choice == 2 and Color3.fromRGB(175, 175, 175)
				or Color3.fromRGB(148, 148, 148)
			rp.Color = color

			local dir = CFrame.new(lastPosition, Character.PrimaryPart.Position)
			rp.CFrame = dir * CFrame.new(math.random(-25, 25) / 10, math.random(-2.5, 2.5), math.random(-2, 2))
			game.Debris:AddItem(rp, 0.75)
			TweenService:Create(rp, TweenInfo.new(0.75), {
				Transparency = 1,
				Size = Vector3.new(0, 0, 0),
				CFrame = rp.CFrame * CFrame.new(0, 0, math.random(2.5, 4))
			}):Play()
		end
	end

	lastPosition = Character.PrimaryPart.Position
end)`
