import React, { useContext } from 'react';
import useAllParcel from '../../../../Hooks/useAllParcel';
import { PulseLoader } from 'react-spinners';
import AllUserTable from './AllUserTable';
import SectionHeader from '../../../../Components/SectionHeader/SectionHeader';
import { ContextAuth } from '../../../../Context/Context';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUser = () => {
    const {user} = useContext(ContextAuth)
    const [allUsers, isLoading, refetch] = useAllParcel('allusers')
    const axiosSecure = useAxiosSecure()

    const deliveryHandel = (id) => {
        const userType = {user_type:'delivery man'}
        axiosSecure.put(`/user/?id=${id}&email=${user.email}`, userType)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User to Delivery man successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()

                }

            })
    }
    const adminHandel = (id) => {
        console.log(id);
    }



    if (isLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }
    
    return (
        <div className=''>
            <div className=' mx-auto px-3 md:px-8 lg:px-8 my-12'>
                <SectionHeader text={'All Users'}></SectionHeader>

                <div className="overflow-x-auto mt-6 shadow-two rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>User Role</th>
                                    <th>Set Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers.map((user, index) => <AllUserTable user={user} key={user._id} index={index} adminHandel={adminHandel} deliveryHandel={deliveryHandel}></AllUserTable>)
                                }                                          
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllUser;