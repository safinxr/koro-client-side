import React from 'react';
import { Link } from 'react-router-dom';


const MyBookedTable = ({ parcel, deleteBtn }) => {
    const { _id, name, email, price, address, requested_delivery_date, phone_number, receivers_name, receivers_number, type, weight, date, status } = parcel
    return (
        <tr className="hover">
            <td className='w-2/12'>
                <div className='text-center'>
                    <h4 className='text-base font-medium'>Parcel Type</h4>
                    <h4>{type}</h4>
                    <h4 className='text-[#00A1FF] font-bold'>{status}</h4>

                </div>
            </td>
            <td className='w-3/12'>
                <div className=''>
                    <h4 className='font-semibold'>Receivers Name</h4>
                    <h4>{receivers_name}</h4>
                    <h4 className='font-semibold'>Receivers Number</h4>
                    <h4>{receivers_number}</h4>

                </div>
            </td>
            <td className='w-3/12'>
                <h4 className='font-semibold'>Requested Delivery Date</h4>
                <h4>{requested_delivery_date}</h4>
                <h4 className='font-semibold'>Address</h4>
                <h4>{address}</h4>
            </td>
            <td className='w-2/12'>
                <h4 className='font-semibold'>Price</h4>
                <h4>{price} TK</h4>
                <h4 className='font-semibold'>Weight</h4>
                <h4>{weight} Kg</h4>
            </td>
            <th className='w-1/12'>
                <div className='flex flex-col items-center justify-center w-full gap-y-2'>
                    <Link to={`/dashboard/updateparcel/${_id}`}
                        className='uppercase active:scale-95 w-full text-center bg-[#02A2FF]  py-2 text-white rounded-md px-4'>
                        Update
                    </Link>



                    <button
                        onClick={() => deleteBtn(_id)}
                        className='uppercase active:scale-95 w-full text-center bg-[#3341B3]  py-2 text-white rounded-md px-4'>
                        Cancel
                    </button>
                </div>

            </th>
        </tr>
    );
};

export default MyBookedTable;