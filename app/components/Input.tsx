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
            className={`py-2 px-4 rounded-md text-black ${className}`}
            type={type}
            name={name}
            id={id} 
            {...props}
        />
    )
}

export default Input;