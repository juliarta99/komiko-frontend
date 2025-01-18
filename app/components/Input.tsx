"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    id: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({type, name, id, className, ...props}) => {
    return (
        <input
            className={`py-2 px-5 rounded-md ${className}`}
            type={type}
            name={name}
            id={id} 
            {...props}
        />
    )
}

export default Input;