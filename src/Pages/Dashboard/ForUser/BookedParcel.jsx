import React, { useContext } from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader'
import useBookedParcel from '../../../Hooks/useBookedParcel';
import { PropagateLoader } from 'react-spinners';
import MyBookedTable from './myBookedTable';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { HiOutlineEmojiSad } from "react-icons/hi";
import { ContextAuth } from '../../../Context/Context';


const BookedParcel = () => {
    const { user } = useContext(ContextAuth)
    const [bookedData = [], loading, refetch] = useBookedParcel()
 const axiosSecure = useAxiosSecure()




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

    if (loading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PropagateLoader color="#231F20" size={20} />
        </div>
    }
    // console.log(bookedData);
    if (bookedData.length === 0) {
        return <div className='flex justify-center items-center h-[50vh]'>
            <h2 className='text-3xl text-gray-500  font-semibold uppercase'>no booked parcel found </h2>
            <h2 className='text-5xl text-gray-500  font-semibold uppercase ms-2'><HiOutlineEmojiSad></HiOutlineEmojiSad></h2>
        </div>
    }

    return (
        <div className='overflow-x-auto'>

            <div className=' mx-auto px-3 md:px-8 lg:px-12 my-12'>
                <SectionHeader text={'My booked Parcel'}></SectionHeader>

                <div className="overflow-x-auto mt-6 shadow-one rounded-lg">
                    <table className="table">
                        <tbody>
                            {
                                bookedData.map(parcel => <MyBookedTable parcel={parcel} key={parcel._id} deleteBtn={deleteBtn}></MyBookedTable>)
                            }
                        </tbody>
                    </table>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default BookedParcel;
