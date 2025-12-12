import React from "react";

interface InputFieldProps {
    label: string;
    placeholder?: string;
    value: string;
    type?: string;
    large?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string; 
}

export default function InputField({
    label,
    placeholder,
    value,
    type = "text",
    large = false,
    onChange,
    className, 
}: InputFieldProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">{label}</label>

            {large ? (
                <textarea
                    className={`border border-gray-300 rounded p-2 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className || ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    className={`border border-gray-300 rounded p-2 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className || ""}`}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    onChange={onChange}
                />
            )}
        </div>
    );
}
