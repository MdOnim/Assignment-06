import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
<div className="navbar  px-4 lg:px-12 w-full sticky top-0 z-50 container mx-auto " >
  
 
  <div className="navbar-start">
    <div className="dropdown">
     
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="text-2xl lg:text-3xl font-bold text-secondary tracking-tight">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 text-base font-medium">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2 lg:gap-4">
    <div className="flex items-center gap-1 lg:gap-2">
      <button className="btn btn-ghost btn-circle">

       <MdOutlineShoppingCart className='text-xl' />
      </button>
      
      <a className="link link-hover font-medium hidden sm:block">Login</a>
    </div>
    <a className="btn btn-sm lg:btn-md bg-gradient-to-r from-secondary to-primary text-white border-none rounded-full px-4 lg:px-6">
      Get Started
    </a>
  </div>
</div>
</div>
    );
};

export default Navbar;