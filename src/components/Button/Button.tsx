import { FC, ReactNode } from "react";

type ButtonProps = {
    text: string | ReactNode;
    onClick?: () => void;
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ text, className, leftIcon, rightIcon, onClick  }) => {
    let buttonClassName = "Button";

    if (className) {
        buttonClassName = `${buttonClassName} ${className}`; 
    }
    
    return (
        <button
        className={buttonClassName}
        onClick={onClick}
        >
            {leftIcon && <span className="Button__Icon-left">{leftIcon}</span>}
            {text}
            {rightIcon && <span className="Button__Icon-right">{rightIcon}</span>}
        </button>
    )    
}