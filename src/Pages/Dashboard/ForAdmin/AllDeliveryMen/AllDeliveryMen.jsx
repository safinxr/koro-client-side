import React, { useContext } from 'react';
import useAllDeliveryMan from '../../../../Hooks/useAllDeliveryMan';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { PulseLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import SectionHeader from '../../../../Components/SectionHeader/SectionHeader';
import DeliveryMenTable from './DeliveryMenTable';
import { ContextAuth } from '../../../../Context/Context';

const AllDeliveryMen = () => {
    const { user } = useContext(ContextAuth)
    const [deliveryMan, isLoading, refetch] = useAllDeliveryMan()
    const axiosSecure = useAxiosSecure()



    const adminHandel = (id) => {
        console.log('yo');
        const userType = { user_type: 'admin' }
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

    if (isLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }

    return (
        <div className=''>
            <div className=' mx-auto px-3 md:px-8 lg:px-8 my-12'>
                <SectionHeader text={'All Delivery Man'}></SectionHeader>

                <div className="overflow-x-auto mt-6 shadow-two rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Delivery Man Name</th>
                                    <th>Email</th>
                                    <th>User Role</th>
                                    <th>Set Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    deliveryMan.map((user, index) => <DeliveryMenTable user={user} key={user._id} index={index} adminHandel={adminHandel} ></DeliveryMenTable>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllDeliveryMen;