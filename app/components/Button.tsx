interface ButtonPorps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    name: string;
    className?: string;
}

const Button: React.FC<ButtonPorps> = ({name, className, ...props}) => {
    return(
        <button 
            className={`rounded-md py-2 px-5 dark:bg-white bg-black dark:text-black text-white text-xs font-medium ${className}`}
            {...props}
        >
            {name}
        </button>
    )
}

export default Button;