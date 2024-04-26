import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = ()=>{
        return <>
         <li><NavLink to='/' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>Home</NavLink></li>
         <li><NavLink to='/asset' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>All Art & craft Items</NavLink></li>
         <li><NavLink to='/asset' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>Add Craft Item</NavLink></li>
         <li><NavLink to='/asset' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>My Art&Craft List</NavLink></li>
        </>
    }
    return (
        <div className=''>
        
            <div className="navbar bg-base-100   bg-gradient-to-r from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to ="/" className="btn btn-ghost text-4xl text-secondary font-bold">Artistry Avenue</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
  
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 hidden lg:flex gap-3 mr-3 text-[15px] font-bold">
      {
        navItems()
      }
        
    </ul>
    
  
  </div>
  
</div>
        </div>
    );
};

export default Navbar;