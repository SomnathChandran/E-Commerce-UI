// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearchDollar } from 'react-icons/fa'
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from 'react';
import { IoPerson } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const  Header = () => {
  const [theme, setTheme]=useState("Light")

  useEffect(() =>{
    if(theme ==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handelThemeSwitch = () =>{
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  
  return (
    <header className='h-screen bg-orange-300  dark:text-gray-100 dark:bg-slate-700 duration-100'>
     <nav className='flex bg-orange-400  size-28 w-full dark:text-gray-100 dark:bg-slate-900 duration-100'>
          <Link className=' ml-9'> 
          <img src='/Image/E-Commerce (1).png' alt='logo' className=' size-28 '></img>
          </Link>

              {/* SEARCH BAR */}
              <div className='flex-initial  m-6 relative w-[500px] ml-64'>
                <input type='search'placeholder='Search here Groceries and Product..' className='border-solid border-2 border-sky-900 p-4 w-full rounded-full 
                bg-state-800 h-14 '></input> 
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 mr-2 mt-
                bg-state-900 rounded-full dark:text-gray-100 dark:bg-slate-900 duration-100'>
                <FaSearchDollar/>
                </button>
              </div>

          {/* Link Block */}
          <div className='flex-initial w-96 flex gap-10 font-sans
          font-semibold items-center text-balance ml-10 tracking-[1px] '>
            {/* Login */}
            <Link to={"#"} className='hover:text-white uppercase ' > 
            <div className='absolute top-6 ml-4'><IoPerson /></div>
            Login
            </Link>
            {/* Seller */}
            <Link to={"#"} className='hover:text-white uppercase'>
              <div className='absolute top-6 ml-4'><BsShop /></div>
              Seller
            </Link>
            {/* Customer */}
            <Link to={"/"}  className='hover:text-white uppercase'>
              <div className='absolute top-6 ml-9'><AiOutlineShopping /></div>
              Customer
            </Link>
            <Link to={"/"}  className='hover:text-white uppercase'>
              <div className='absolute top-6 ml-3'><FaCartShopping /></div>
              Cart
            </Link>
          </div>
          <div className='fixed top-5 right-10 duration-100 dark:slate-700 bggray-100 rounded font-sans font-bold mt-5'>
              <button className='border-solid border-2 border-black m-3 p-1 'onClick={handelThemeSwitch}><MdDarkMode /></button>
          </div>
     </nav>
  </header>
  )
}

export default Header
