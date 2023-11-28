import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import BookedParcel from "../Pages/Dashboard/ForUser/BookedParcel";
import ParcelBooking from "../Pages/Dashboard/ForUser/ParcelBooking";
import MyProfile from "../Pages/Dashboard/MyProfile";
import UpdateParcel from "../Pages/Dashboard/ForUser/UpdateParcel";
import UserRoute from "./UserRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: '/dashboard/myprofile',
                element: <MyProfile></MyProfile>
            },
            {
                path:'/dashboard/bookingparcel',
                element: <UserRoute><ParcelBooking></ParcelBooking></UserRoute>
            },
            {
                path:'/dashboard/parcelbooked',
                element: <UserRoute><BookedParcel></BookedParcel></UserRoute> 
            },
            
            {
                path:'/dashboard/updateparcel/:id',
                element: <UserRoute><UpdateParcel></UpdateParcel></UserRoute>
            },
        ]
        
        
    }
]);