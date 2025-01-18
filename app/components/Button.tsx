"use client"

interface ButtonPorps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonPorps> = ({children, className, ...props}) => {
    return(
        <button 
            className={`rounded-md py-2 px-5 dark:bg-white bg-black dark:text-black text-white text-xs font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;