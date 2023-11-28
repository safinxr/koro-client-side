import React, { useContext, useEffect } from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { ContextAuth } from '../Context/Context';
import useUserType from '../Hooks/useUserType';
import { MdAddBox } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

const Dashboard = () => {
    const navigate = useNavigate()
    let { pathname } = useLocation();
    const [userInfo, isLoading] = useUserType()


    useEffect(() => {

        if (userInfo.user_type === "user") {
            navigate('/dashboard/bookingparcel')
        }
    }, [pathname === "/dashboard", userInfo])

    const userLink = <>
        <li>
            <NavLink to="/dashboard/bookingparcel"><MdAddBox /> Book a Parcel </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/parcelbooked"><FaBoxes /> My Parcels </NavLink>
        </li>
    </>
    const adminLink = <>
        <li>
            <NavLink to="/dashboard/bookingparcel"><MdAddBox /> Book a Parcel </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/parcelbooked"><FaBoxes /> My Parcels </NavLink>
        </li>
    </>

    // console.log(isLoading, userInfo);

    return (
        <div>
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar navChange={true}></Navbar>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div
                        className='w-72 min-h-full  bg-[#3341B3]'>
                        <div className='py-6 flex flex-col  items-center'>
                            <h2 className='uppercase font-bold text-2xl text-white'>dashboard</h2>
                            <div className='flex gap-2 text-gray-50 text-sm '>
                                <h4> Role</h4>
                                <h4>||</h4>
                                <h4 className='uppercase'>{userInfo?.user_type}</h4>
                                
                                
                            </div>
                        </div>
                        <hr />



                        <ul className="menu p-4 text-white text-base font-medium">
                            {
                                userInfo.user_type === 'admin' ? adminLink :
                                 userLink
                                
                            }
                            
                            <li><NavLink to="/dashboard/myprofile"><FaUserPen /> My Profile </NavLink></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;