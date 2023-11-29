import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#4341C2]'>
            <footer className=" flex text-white max-w-6xl mx-auto px-3 md:px-8 lf:px-0
            md:justify-between justify-around py-14
            ">
                <nav className='flex flex-col leading-6 md:leading-8'>
                    <header className="footer-title uppercase mb-4">Features Section</header>
                    <Link to='/' className="link link-hover opacity-60">Our Best Features
                    </Link>
                    <Link to='/' className="link link-hover opacity-60"> Statistics Section</Link>
                    <Link to='/' className="link link-hover opacity-60">Best Delivery Man
                    </Link>
                </nav>
                <nav className='flex flex-col leading-6 md:leading-8 '>
                    <header className="footer-title uppercase mb-4">Navigation</header>
                    <Link to='/' className="link link-hover opacity-60">Home</Link>
                    <Link to='/dashboard' className="link link-hover opacity-60">Dashboard</Link>
                   
                </nav >
                <nav className='hidden md:flex flex-col leading-6 md:leading-8'>
                    <header className="footer-title uppercase mb-4">Legal</header>
                    <Link to='' className="link link-hover opacity-60">Terms of use</Link>
                    <Link to='' className="link link-hover opacity-60">Privacy policy</Link>
                    <Link to='' className="link link-hover opacity-60">Cookie policy</Link>
                </nav>
            </footer>
            {/* <span >Best Food Providing since 2023</span> */}
            <hr />
            <footer className=" py-4 max-w-6xl mx-auto px-3 md:px-8 lg:px-0 text-white 
            flex justify-between items-center
            ">
                <div className="flex items-center ">
                    <div>
                        <Link to='/'>
                            <img src="https://i.ibb.co/ss9HPbG/KURO-logo.png" alt="" />
                        </Link>
                    </div>
                    <div className='ms-4 mt-1 text-sm'>

                        <p className='hidden md:flex'>&copy; 2023 KORO All rights reserved.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                    <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                    <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;