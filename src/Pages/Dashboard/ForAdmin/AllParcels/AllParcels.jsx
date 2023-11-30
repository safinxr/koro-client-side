import React, { useContext } from 'react';
import useAllParcel from '../../../../Hooks/useAllParcel';
import { PulseLoader } from 'react-spinners';
import AllParcelTable from './AllParcelTable';
import SectionHeader from '../../../../Components/SectionHeader/SectionHeader';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { ContextAuth } from '../../../../Context/Context';

const AllParcels = () => {
    const { user } = useContext(ContextAuth)
    const [AllData, isLoading, refetch] = useAllParcel('allparcel')
    const axiosSecure = useAxiosSecure()

    
    if (isLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }

    const deleteBtn = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookedParcel/?id=${id}&email=${user.email}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Parcel cancel successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                        }
                    })
            }
        });

    }




    return (
        <div className=''>
            <div className=' mx-auto px-3 md:px-8 lg:px-12 my-12'>
                <SectionHeader text={'All Booked Parcel'}></SectionHeader>

                <div className="overflow-x-auto mt-6 shadow-two rounded-lg">
                    {
                        AllData.map((parcel, index) => <AllParcelTable parcel={parcel} key={parcel._id} deleteBtn={deleteBtn} index={index}></AllParcelTable>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllParcels;