import React, { useEffect, useState } from 'react';
import { useResultContext } from '../context/ResultContextProvider';
import { useDebounce } from 'use-debounce';

export const Search = () => {
    const [input, setInput] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debounceValue] = useDebounce(input, 1000);

    useEffect(() => {
        if (debounceValue) setSearchTerm(debounceValue);
    }, [debounceValue, setSearchTerm]);

    const clearInput = () => {
        setInput('');
    };

    return (
        <div className='relative flex items-center'>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for anything..."
                className='pl-3 border border-gray-300 rounded-full p-2 text-sm w-80 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150'
            />
            {input && (
                <button
                    type='button'
                    onClick={clearInput}
                    className='pr-2 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
                >
                    x
                </button>
            )}
        </div>
    );
};
