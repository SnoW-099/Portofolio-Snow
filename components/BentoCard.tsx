import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
// Adjust the import path if your ArrowRight icon is located elsewhere or use lucide-react
import { ArrowRight } from "lucide-react"

interface BentoCardProps {
    children: ReactNode
    className?: string
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12
    rowSpan?: 1 | 2 | 3 | 4 | 5
    href?: string
}

export const BentoCard = ({ children, className, colSpan = 3, rowSpan = 1, href }: BentoCardProps) => {
    const Component = href ? "a" : "div"

    const colSpanClass = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
        4: "md:col-span-4",
        5: "md:col-span-5",
        6: "md:col-span-6",
        8: "md:col-span-8",
        9: "md:col-span-9",
        10: "md:col-span-10",
        12: "md:col-span-12",
    }[colSpan]

    const rowSpanClass = {
        1: "row-span-1",
        2: "row-span-2",
        3: "row-span-3",
        4: "row-span-4",
        5: "row-span-5",
    }[rowSpan]

    return (
        <Component
            href={href}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl",
                // Glassmorphism and Monochromatic Styling
                "bg-white/5 backdrop-blur-xl border border-white/10",
                "hover:border-white/20 hover:bg-white/10 transition-all duration-300",
                // Shadow for depth
                "shadow-sm hover:shadow-md",
                colSpanClass,
                rowSpanClass,
                className,
            )}
        >
            {children}

            {/* Optional: Add a subtle arrow indicator if it's a link */}
            {href && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                </div>
            )}
        </Component>
    )
}
