import React from 'react'
import {Link} from "react-router-dom"
import {Search} from "./Search";
import { Tab } from './Tab';
export const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to="/">
               <p className='text-2xl bg-blue-500 rounded py-1 px-2 dark:bg-gray-700 dark:text-white-900'>
                Googlo 🔍
               </p>
            </Link>
            <Search/>
            <button className='bg-gray-400 rounded-full px-2 py-1 hover:shadow-lg' type='button' onClick={()=> setDarkTheme(!darkTheme) }>
                {darkTheme ? "Light 🔆" : "Dark 🌙"}
            </button>
        </div>
        <Tab/>
        
        
    </div>
  )
}

