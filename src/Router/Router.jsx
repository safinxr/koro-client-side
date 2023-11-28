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
import StatisticsPage from "../Pages/Dashboard/ForAdmin/StatisticsPage/StatisticsPage";
import AllUser from "../Pages/Dashboard/ForAdmin/AllUser/AllUser";
import AllParcels from "../Pages/Dashboard/ForAdmin/AllParcels/AllParcels";
import AllDeliveryMen from "../Pages/Dashboard/ForAdmin/AllDeliveryMen/AllDeliveryMen";
import AdminRoute from "./AdminRoute";


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
            {
                path:'/dashboard/statistics',
                element: <AdminRoute><StatisticsPage></StatisticsPage></AdminRoute>
            },
            {
                path:'/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path:'/dashboard/allparcel',
                element: <AdminRoute><AllParcels></AllParcels></AdminRoute>
            },
            {
                path:'/dashboard/alldeliveryman',
                element: <AdminRoute><AllDeliveryMen></AllDeliveryMen></AdminRoute>
            },

        ]
        
        
    }
]);