import React from 'react';
import { FaUserCog } from "react-icons/fa";

const DeliveryMenTable = ({ user, index, adminHandel }) => {
    const { name, email, user_type, _id } = user
    return (
        <tr className="hover">
            <td className='w-1/12'>
                {index}
            </td>
            <td className='w-3/12'>
                {name}
            </td>
            <td className='w-3/12'>
                {email}
            </td>
            <td className='uppercase w-2/12'>
                {user_type}
            </td>
            <td className='w-3/12'>
                <div className='flex gap-4'>
                   
                    <button
                        disabled={user_type === 'admin' ? true : false}
                        onClick={() => adminHandel(_id)}
                        className={user_type === 'admin' ? 'flex justify-center items-center  bg-[#306a8b] px-4 py-1.5 rounded-md text-white gap-x-2' : 'flex justify-center items-center  bg-[#00A1FF] px-4 py-1.5 rounded-md text-white gap-x-2'}>
                        Admin
                        <FaUserCog />
                    </button>
                </div>

            </td>
        </tr>
    );
};

export default DeliveryMenTable;