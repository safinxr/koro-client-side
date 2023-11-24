import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './navbar.css'
import { FiLogIn, FiUser } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
// import { ContextAuth } from '../../Context/Context';
import { PulseLoader } from 'react-spinners';
import { IoNotificationsCircleOutline } from "react-icons/io5";


const Navbar = () => {

    const [navBg, setNavBg] = useState(false)
    let { pathname } = useLocation();
    // const { user, logOut, shortLoading, setLoading } = useContext(ContextAuth)
    const user = null;
    const logOut = () =>{
        console.log('logout');
    }
    const shortLoading = false;




    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    useEffect(() => {
        if (pathname === '/') {
            setNavBg(false)

        }
        else {
            setNavBg(true)
        }
    }, [pathname])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setNavBg(true)
            }
            else {
                if (pathname === '/') {
                    return setNavBg(false)
                }
                setNavBg(true)
            }
        })
    }, [pathname])

    const signOut = () => {
        logOut()
    }

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "mx-2 relative active-underline  text-[#00A1FF]" : "mx-2 relative nav-underline text-[#00A1FF]"
            }
        >
            HOME
        </NavLink></li>
        <li><NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "mx-2 relative active-underline text-[#00A1FF]" : "mx-2 relative nav-underline text-[#00A1FF]"
            }
        >
            Dashboard
        </NavLink></li>
    </>
    const smNavLink = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

    </>

    const logIngLink = <>

        <Link to='/signin' className="mr-4 relative inline-flex items-center justify-center uppercase py-1 md:py-1.5  lg:py-1.5 px-2.5 md:px-4 lg:px-5 overflow-hidden font-medium md:font-semibold text-[#00A1FF] transition duration-300 ease-out border-2 border-[#00A1FF] rounded-lg shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#00A1FF] group-hover:translate-x-0 ease">
                <FiLogIn className='text-xl '></FiLogIn>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full black-text transition-all duration-300 transform group-hover:translate-x-full ease">SIGN IN</span>
            <span className="relative invisible">SIGN I0</span>
        </Link>
    </>

    
    const userInfo = <div className='flex flex-col lg:flex-row lg:items-center '>
        <div className="dropdown dropdown-bottom dropdown-end flex items-center">
            <label tabIndex={0} className="hover:scale-105">{
                user?.photoURL ?
                    <img className='w-10 h-10  rounded-full ' src={user?.photoURL} alt="" />
                    :
                    <div className='w-10 h-10 rounded-full black-bg flex justify-center items-center'>
                        <p className='text-white text-xl uppercase'>{user?.email.slice(0, 1)}</p>
                    </div>

            }</label>

            <div tabIndex={0} className="dropdown-content z-[1]  shadow bg-base-100  w-64 mt-5 rounded-md">
                <div className='flex flex-col justify-center items-center p-4'>
                    {user?.photoURL ?
                        <img className='w-16 h-16  rounded-full ' src={user?.photoURL} alt="" />
                        :
                        <div className='w-16 h-16 rounded-full black-bg flex justify-center items-center'>
                            <p className='text-white text-2xl uppercase'>{user?.email.slice(0, 1)}</p>
                        </div>
                    }
                    <p className='mt-6'>{user?.displayName}</p>
                    <p className=''>{user?.email}</p>
                </div>
                <div className='border w-full'></div>
                <ul className='uppercase menu font-medium'>
                    <li><NavLink to='/myaddedfood'>My added food</NavLink></li>
                    <li><NavLink to='/addnewfood'>  Add new food</NavLink></li>
                    <li><NavLink to='/myorderedfood'> My ordered food</NavLink></li>
                </ul>
                <div>
                    <button onClick={signOut} className=" relative inline-flex items-center justify-start py-2  pl-4 pr-12 overflow-hidden font-semibold black-text transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group w-full">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out black-bg group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 black-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokelinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <MdLogout className='text-white text-xl'></MdLogout>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white uppercase ps-2">Sing Out</span>
                    </button>
                </div>
            </div>
        </div>
    </div>


    // RETURN START 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
    return (
        <nav className={navBg ? "sticky top-0 z-10 bg-white shadow-md" : "sticky top-0 z-10"}>
            <div className="navbar max-w-6xl mx-auto py-0 md:py-2 px-3 md:px-8 lg:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {smNavLink}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='' src="https://i.ibb.co/ss9HPbG/KURO-logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className=" menu-horizontal px-1 text-base font-semibold black-text uppercase tracking-widest hidden lg:flex">
                        {navLink}
                    </ul>
                    <div className="indicator me-4">
                        <span className="indicator-item  "></span>
                        <Link><IoNotificationsCircleOutline className='text-4xl text-[#00A1FF] ' /></Link>
                    </div>
                    {
                        shortLoading ? <PulseLoader color="#231F20" size={10} /> : <>{user ? userInfo : logIngLink}</>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;