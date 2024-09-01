import { ChangeEvent } from "react";

type InputBoxProps = {
    title: string;
    placeholder: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string;
};

export function InputBox({ title, placeholder, name, onChange ,type}: InputBoxProps) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-lg font-normal">{title}</span>
            <input
                id="default-search"
                className="block w-96 px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                type={type || "test"}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
        </div>
    );
}
