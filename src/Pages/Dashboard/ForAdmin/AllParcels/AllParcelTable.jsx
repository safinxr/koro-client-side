import React from 'react';
import ComingSoon from '../../../../Components/ComingSoon/ComingSoon';

const AllParcelTable = ({ parcel, deleteBtn, index }) => {
    console.log(index);
    const { _id, name, email, price, address, requested_delivery_date, phone_number, receivers_name, receivers_number, type, weight, date, status } = parcel
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td className='w-1/12'>
                        <div className='flex justify-center items-center'>
                            <h4 className='text-lg font-bold'>{index + 1}</h4>
                        </div>
                    </td>
                    <td className='w-2/12'>
                        <div className='text-center'>
                            <h4 className='text-base font-medium'>Parcel Type</h4>
                            <h4>{type}</h4>
                            <h4 className='text-[#00A1FF] font-bold'>{status}</h4>

                        </div>
                    </td>
                    <td className='w-3/12'>
                        <div className=''>
                            <h4 className='font-semibold'>User Name</h4>
                            <h4>{name}</h4>
                            <h4 className='font-semibold'>User Number</h4>
                            <h4>{phone_number}</h4>

                        </div>
                    </td>
                    <td className='w-3/12'>
                        <h4 className='font-semibold'>Requested Delivery Date</h4>
                        <h4>{requested_delivery_date}</h4>
                        <h4 className='font-semibold'>Booking Date</h4>
                        <h4>{date}</h4>
                    </td>
                    <td className='w-1/12'>
                        <h4 className='font-semibold'>Price</h4>
                        <h4>{price} TK</h4>
                        <h4 className='font-semibold'>Weight</h4>
                        <h4>{weight} Kg</h4>
                    </td>
                    <th className='w-1/12'>
                        <div className='flex flex-col items-center justify-center w-full gap-y-2'>
                            

                            <button 
                            className='uppercase active:scale-95 w-full text-center bg-[#02A2FF]  py-2 text-white rounded-md px-4' 
                            onClick={() => document.getElementById('my_modal_3').showModal()}>Manage</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div>
                                        <ComingSoon width={150}></ComingSoon>
                                    </div>
                                </div>
                            </dialog>



                            <button
                                onClick={() => deleteBtn(_id)}
                                className='uppercase active:scale-95 w-full text-center bg-[#3341B3]  py-2 text-white rounded-md px-4'>
                                Cancel
                            </button>
                        </div>

                    </th>
                </tr>
            </tbody>


        </table>
    );
};

export default AllParcelTable;