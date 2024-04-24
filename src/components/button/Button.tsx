import { cn } from "@/utils/cn";
import { FC } from "react";

interface ButtonProps {
    className?: string;
    isLoading?: boolean;
    type?: "submit" | "button";
    text: string;
    onAction: () => void;
}

export const Button: FC<ButtonProps> = ({
    className,
    isLoading = false,
    onAction,
    text,
    type = "button",
}) => {
    return (
        <button
            disabled={isLoading}
            onClick={onAction}
            type={type}
            className={cn("rounded-pill btn-text-orange", className)}
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
            ) : (
                <span className="button-text btn-text-orange">{text}</span>
            )}
        </button>
    );
};
