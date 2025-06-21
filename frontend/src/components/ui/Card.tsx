import type React from "react"
import { cn } from "../../utils/cn"

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
