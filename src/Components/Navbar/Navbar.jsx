import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Navbar = () => {
   const {user,logout} = UseAuth()
   const handleSignout =()=>{
    logout()
    .then()
    .catch()
  
}
    const navItems = ()=>{
        return <>
         <li><NavLink to='/' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>Home</NavLink></li>
         <li><NavLink to='/new' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>All Art & craft Items</NavLink></li>
         <li><NavLink to='/asset' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>Add Craft Item</NavLink></li>
         <li><NavLink to='/asset' className={({isActive})=>isActive?'text-primary font-bold':'text-secondary'}>My Art&Craft List</NavLink></li>
         </>
    }
    return (
        <div className=''>
           
            <div className="navbar bg-base-100   bg-gradient-to-r from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)]">
  <div className="navbar-start">
    <div className="dropdown z-10">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          navItems()
        }
      </ul>
    </div>
    <Link to ="/" className="btn btn-ghost text-4xl text-secondary font-bold">Artistry Avenue</Link>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 hidden lg:flex gap-3 mr-3 text-[15px] font-bold">
      {
        navItems()
      }
        
    </ul>
    
    {
    user? <div className="avatar ml-3">
      
    <div className="w-12 rounded-full cursor-pointer">
      <img src= {user.photoURL} title={user.displayName} />
      
    </div>
    <button onClick={()=>handleSignout()} className='p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300'>Logout</button>
  </div>:<>
  <Link to='/login'  className="p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300">Login</Link>
    <Link to='/register'  className="p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300">Register</Link>
  </>
   
  
  }
  </div>
  
</div>
        </div>
    );
};

export default Navbar;