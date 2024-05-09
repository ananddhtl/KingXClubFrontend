import { cn } from "@/utils/cn";
import { FC } from "react";

interface ButtonProps {
    className?: string;
    isLoading?: boolean;
    type?: "submit" | "button";
    text: string;
    onAction: () => void;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
    className,
    isLoading = false,
    onAction,
    text,
    type = "button",
    disabled = false
}) => {
    return (
        <button
            disabled={isLoading || disabled}
            onClick={onAction}
            type={type}
            className={cn("w-full bg-[#FE480F] flex justify-center text-white font-bold py-3 px-4 rounded-xl hover:bg-[#fe3f0f] disabled:opacity-45 disabled:cursor-not-allowed", className)}
        >
            {isLoading ? (
                <svg
                    className="spinner animate-spin"
                    id="spinner"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
            ) : (
                <span className="text-xl">{text}</span>
            )}
        </button>
    );
};
