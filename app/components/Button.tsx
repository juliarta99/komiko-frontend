"use client"

interface ButtonPorps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonPorps> = ({children, className, ...props}) => {
    return(
        <button 
            className={`rounded-md py-2 px-5 bg-white text-black text-xs font-medium disabled:bg-gray-500 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;