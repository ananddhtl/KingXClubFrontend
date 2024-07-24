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
        <div className="flex justify-center w-full">
        <button
            disabled={isLoading || disabled}
            onClick={onAction}
            type={type}
            className={cn("w-full max-w-80 bg-green-600 outline-none flex justify-center text-white  py-3 px-4 rounded-xl hover:bg-green-800 disabled:opacity-45 disabled:cursor-not-allowed", className)}
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
                <span className="text-xl font-semibold">{text}</span>
            )}
        </button>
        </div>
    );
};
