'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

export default function Search({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value)
        if (onSearch) {
            onSearch(value);
        }
    }

    return (
        <div 
        className="border shadow-2xl rounded-2xl p-1 pl-2 flex w-[50vw]">
            <MagnifyingGlass size={32} />
            <input
            type="text" 
            maxLength={50}
            className='flex-1 ml-3 outline-none bg-transparent focus:ring-0 focus:outline-none'
            placeholder='Search...'
            onChange={handleChange}
            />
        </div>
    );
}