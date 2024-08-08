import React from 'react';
import { NavLink } from 'react-router-dom';

export const Tab = () => {
    const links = [
        { url: "/search", text: "All" },
        { url: "/images", text: "Images" },
    ];

    return (
        <div className='mx-2 my-3 flex space-x-6 border-b-0 border-gray-300 dark:border-gray-700 pb-0'>
            {links.map(({ url, text }) => (
                <NavLink
                    key={url}
                    to={url}
                    className={({ isActive }) =>
                        `text-xl-2 font-medium ${
                            isActive
                                ? 'text-blue-600 border-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400'
                        } pb-0 border-b-2 hover:text-blue-500 dark:hover:text-blue-300 transition duration-300`
                    }
                >
                    {text}
                </NavLink>
            ))}
        </div>
    );
};
