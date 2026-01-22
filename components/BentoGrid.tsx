import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
    children: ReactNode
    className?: string
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[auto] gap-4 max-w-7xl mx-auto w-full",
                className,
            )}
        >
            {children}
        </div>
    )
}
