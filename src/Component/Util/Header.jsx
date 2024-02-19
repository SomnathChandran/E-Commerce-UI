// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearchDollar } from 'react-icons/fa'
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from 'react';
import { IoPerson } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import LoginDropdown from './LoginDropdown';
import { useAuth } from '../Context/AuthProvider';


const  Header = () => {
  const [theme, setTheme]=useState("Light")
  const { auth } = useAuth();
  const { isAuthenticated } = auth;

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
    
    <header className='   dark:text-gray-100 dark:bg-slate-700 duration-100 '>
     <nav className='flex shadow-md bg-white  size-28 w-full dark:text-gray-100 dark:bg-slate-900 duration-100 '>
          <Link to={"/"} className=' ml-9'> 
          <img src='/src/Image/E-Commerce (1).png' alt='logo' className=' size-28 '></img>
          </Link>

              {/* SEARCH BAR */}
              <div className='flex items-center justify-center  m-6 relative w-[600px] ml-20  bg-white border-solid border-2 border-slate-400 rounded-md'>
                <input type='search'placeholder='Search here Groceries and Product..' className='border-none p-4 w-[500px] h-14  outline-none d'></input> 
                <div className='absolute left-4 top-8 -translate-y-1/2 p-2 mr-2 mt-bg-state-900 
                rounded-full dark:text-gray-100 dark:bg-slate-900 duration-100'>
                <FaSearchDollar/>
                </div>
              </div>

          {/* Link Block */}
          <div className='flex-initial w-96 flex gap-10 font-sans
          font-semibold items-center text-balance ml-16 tracking-[2px]   '>
            {/* Login */}
            {isAuthenticated ?<Link to={"/"}><ion-icon name="person-circle-sharp"></ion-icon></Link>
            : <div className=''>
              <Link to={"/login"} className='hover:text-orange-400 uppercase ' > 
            <div className='absolute top-6 ml-5'><IoPerson /></div>
            Login
            </Link>
            </div> }
            
            {/* Seller */}
            <Link to={"/seller/register"} className='hover:text-orange-400 uppercase'>
              <div className='absolute top-6 ml-5'><BsShop /></div>
              Seller
            </Link>
            {/* CART */}
            {isAuthenticated ?  <Link to={"/cart"}  className='hover:text-orange-400 uppercase'>
              <div className='absolute top-6 ml-4'><FaCartShopping /></div>
              Cart
            </Link>:<Link to={"/login"}  className='hover:text-orange-400 uppercase'>
              <div className='absolute top-6 ml-4'><FaCartShopping /></div>
              Cart
            </Link>}
           
            {/* WishList */}
            <Link to={"/wishlist"}  className='hover:text-orange-400 uppercase'>
              <div className='absolute top-6 ml-8'><FaRegHeart /></div>
              Wishlist
            </Link>
            {/* Menu */}
            <Link to={"/dropdown"}  className='hover:text-orange-400 uppercase'>
              <div className='absolute top-6 ml-2'><IoMdMenu /></div>
              Dropdown
            </Link>
          </div>
          <div className='absolute top-1px right-11  duration-100 dark:slate-700 bggray-100 rounded font-sans font-bold mt-5  '>
              <button className='border-solid border-2 border-black  m-3 p-1  h-10 w-10 flex justify-center items-center 'onClick={handelThemeSwitch}><MdDarkMode /></button>
          </div>
     </nav>
  </header>
  )
}

export default Header
