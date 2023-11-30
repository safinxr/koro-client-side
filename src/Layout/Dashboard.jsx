import React, { useContext, useEffect } from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { ContextAuth } from '../Context/Context';
import useUserType from '../Hooks/useUserType';
import { MdAddBox } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { PulseLoader } from 'react-spinners';
import { FaChartBar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
    const navigate = useNavigate()
    let { pathname } = useLocation();
    const [userInfo, isLoading] = useUserType()


    if (isLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }
    if (pathname === "/dashboard") {
        if (userInfo.user_type === "user") {
            navigate('/dashboard/bookingparcel')

        }
        if (userInfo.user_type === "admin") {
            navigate('/dashboard/statistics')

        }

    }



    // Nav Links 🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗🔗
    const userLink = <>
        <li>
            <NavLink to="/dashboard/bookingparcel"><MdAddBox /> Book a Parcel </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/parcelbooked"><FaBoxes /> My Parcels </NavLink>
        </li>
    </>

    const deliveryManLik = <>
        <li>
            <NavLink to="/dashboard/mydeliverylist"><IoIosListBox /> My Delivery List</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/myreviews"><FaStar /> My Reviews </NavLink>
        </li>
        
    </>
    const adminLink = <>
        <li>
            <NavLink to="/dashboard/statistics"><FaChartBar /> Statistics</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/allparcel"><FaBoxes /> All parcels </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/alluser"><FaUsers /> All user </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/alldeliveryman"><FaUserClock /> All delivery men </NavLink>
        </li>
    </>


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
                                    userInfo.user_type === 'delivery man'? deliveryManLik: userLink

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