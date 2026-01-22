"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Copy, Check } from "lucide-react"
import { DialogClose } from "@/components/ui/dialog"

// Simple manual syntax highlighting for Luau
const highlightCode = (code: string) => {
    const keywords = ["local", "function", "return", "end", "if", "then", "else", "true", "false", "nil", "require", "self", "and", "or", "not"]
    const globals = ["game", "workspace", "script", "math", "table", "string", "print", "warn", "error", "Enum", "Instance", "Vector3", "CFrame", "TweenInfo"]

    return code.split(/(\s+|[(){}[\].,;="'#])/g).map((token, i) => {
        if (keywords.includes(token)) return <span key={i} className="text-purple-400">{token}</span>
        if (globals.includes(token)) return <span key={i} className="text-blue-400">{token}</span>
        if (!isNaN(Number(token))) return <span key={i} className="text-orange-400">{token}</span>
        if (token.startsWith('"') || token.startsWith("'")) return <span key={i} className="text-green-400">{token}</span>
        if (token.startsWith("--")) return <span key={i} className="text-gray-500 italic">{token}</span>
        if (token.match(/^[A-Z]\w+$/)) return <span key={i} className="text-yellow-200">{token}</span> // Probable Class/Type
        return <span key={i} className="text-[#e6edf3]">{token}</span>
    })
}

const snippets = [
    {
        title: "SprintHandler.luau",
        desc: "Efficient stamina-based sprint system.",
        code: `local SprintHandler = {}
local UserInputService = game:GetService("UserInputService")
local TweenService = game:GetService("TweenService")

function SprintHandler:Init(player)
    self.Player = player
    self.Stamina = 100
    self.IsSprinting = false
    
    UserInputService.InputBegan:Connect(function(input)
        if input.KeyCode == Enum.KeyCode.LeftShift then
            self:SetSprinting(true)
        end
    end)
    
    UserInputService.InputEnded:Connect(function(input)
        if input.KeyCode == Enum.KeyCode.LeftShift then
            self:SetSprinting(false)
        end
    end)
end

function SprintHandler:SetSprinting(active)
    self.IsSprinting = active
    local goal = active and 24 or 16
    
    local tween = TweenService:Create(
        self.Player.Character.Humanoid,
        TweenInfo.new(0.5),
        {WalkSpeed = goal}
    )
    tween:Play()
end

return SprintHandler`
    },
    {
        title: "DoubleJump.luau",
        desc: "Physics-based multi-jump mechanic.",
        code: `local DoubleJump = {}
local UserInputService = game:GetService("UserInputService")

function DoubleJump:Start(char)
    local humanoid = char:WaitForChild("Humanoid")
    local canJump = false
    local hasDoubleJumped = false
    
    humanoid.StateChanged:Connect(function(old, new)
        if new == Enum.HumanoidStateType.Landed then
            canJump = true
            hasDoubleJumped = false
        elseif new == Enum.HumanoidStateType.Jumping then
            canJump = false
        end
    end)
    
    UserInputService.JumpRequest:Connect(function()
        if not canJump and not hasDoubleJumped then
            hasDoubleJumped = true
            
            -- Apply upward impulse
            char.HumanoidRootPart:ApplyImpulse(Vector3.new(0, 500, 0))
            
            -- Play visual effect
            self:PlayJumpEffect(char.HumanoidRootPart.Position)
        end
    end)
end

return DoubleJump`
    },
    {
        title: "CombatHandler.luau",
        desc: "Server-side hit validation with sanity checks.",
        code: `local CombatHandler = {}
CombatHandler.__index = CombatHandler

function CombatHandler.new(player)
    local self = setmetatable({}, CombatHandler)
    self.Player = player
    self.LastSwing = 0
    return self
end

function CombatHandler:ValidateHit(target, weaponData)
    local now = workspace:GetServerTimeNow()
    local distance = (target.Position - self.Player.Character.HumanoidRootPart.Position).Magnitude
    
    -- Sanity Checks
    if distance > weaponData.Range + 2 then return false end
    if now - self.LastSwing < weaponData.Cooldown then return false end
    
    self.LastSwing = now
    return true
end

return CombatHandler`
    },
    {
        title: "DataManager.luau",
        desc: "Robust ProfileService wrapper for safe data handling.",
        code: `local DataManager = {}
local ProfileService = require(game.ServerScriptService.ProfileService)

local ProfileStore = ProfileService.GetProfileStore("Save_v1", {Cash=0})

function DataManager.PlayerAdded(player)
    local profile = ProfileStore:LoadProfileAsync("User_" .. player.UserId)
    
    if profile ~= nil then
        profile:AddUserId(player.UserId)
        profile:Reconcile()
        profile:ListenToRelease(function() player:Kick() end)
        
        if player:IsDescendantOf(game.Players) then
            return profile
        else
            profile:Release()
        end
    else
        player:Kick("Failed to load data")
    end
end

return DataManager`
    }
]

export function SnippetCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [copied, setCopied] = useState(false)

    const nextSnippet = () => {
        setCurrentIndex((prev) => (prev + 1) % snippets.length)
        setCopied(false)
    }

    const prevSnippet = () => {
        setCurrentIndex((prev) => (prev - 1 + snippets.length) % snippets.length)
        setCopied(false)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(snippets[currentIndex].code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative w-full overflow-hidden rounded-xl bg-[#0d1117] border border-white/10 shadow-2xl font-mono text-sm group">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#161b22]">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 group-hover:opacity-100 transition-opacity">
                        {/* Close Button (Red) - Wired to DialogClose */}
                        <DialogClose asChild>
                            <button className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group/close cursor-pointer">
                                <span className="opacity-0 group-hover/close:opacity-100 text-[8px] text-black/50 font-bold leading-none">x</span>
                            </button>
                        </DialogClose>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-xs text-[#8b949e] ml-2 truncate font-semibold opacity-70">
                        {snippets[currentIndex].title}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-[#8b949e] hover:text-white"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                </div>
            </div>

            {/* Code Area */}
            <div className="relative p-0 bg-[#0d1117] min-h-[320px] max-h-[400px] flex flex-col group/code">
                {/* Scrollbar hidden via CSS utility classes */}
                <div className="absolute inset-0 overflow-auto p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    <pre className="text-[13px] leading-6 tab-4 font-normal">
                        <code>
                            {highlightCode(snippets[currentIndex].code)}
                        </code>
                    </pre>
                </div>

                {/* Subtle Fade at bottom to indicate scroll if needed (optional decoration) */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none"></div>
            </div>

            {/* Footer / Controls */}
            <div className="px-4 py-3 border-t border-white/5 bg-[#161b22] flex items-center justify-between">
                <div className="text-[11px] text-[#8b949e] w-2/3 truncate">
                    {snippets[currentIndex].desc}
                </div>

                <div className="flex items-center gap-1">
                    <button onClick={prevSnippet} className="p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[#c9d1d9]">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] text-[#8b949e] font-mono px-2 select-none">
                        {currentIndex + 1}/{snippets.length}
                    </span>
                    <button onClick={nextSnippet} className="p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[#c9d1d9]">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
