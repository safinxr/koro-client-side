import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { PulseLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import useGetSingleParcel from '../../../Hooks/useGetSingleParcel';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';



const UpdateParcel = () => {
    const {id} = useParams()
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()
    const kg = watch('weight') || 0
    const [totalPrice, setTotalPrice] = useState(0)
    const currentDate = new Date();
    const axiosSecure = useAxiosSecure()

    // Extract current day, month, year, 
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const datex = `${currentDay}-${currentMonth}-${currentYear}`


    const [singleData, loading] = useGetSingleParcel(id)
    const { name, email, price, address, requested_delivery_date, phone_number, receivers_name, receivers_number, type, weight } = singleData



    useEffect(() => {
        const weight = parseFloat(kg)
        if (weight <= 0) {
            setTotalPrice(0)
        }
        else if (weight <= 1) {
            setTotalPrice(50)
        }
        else if (weight <= 2) {
            setTotalPrice(100)
        }
        else if (weight > 2) {
            setTotalPrice(150)
        }
    }, [kg])


    const onSubmit = (data) => {

        const name = singleData.name;
        const email = singleData.email;
        const price = totalPrice;
        const address = data.address;
        const requested_delivery_date = data.requested_delivery_date;
        const phone_number = data.phone_number;
        const receivers_name = data.receivers_name;
        const receivers_number = data.receivers_number;
        const type = data.type;
        const weight = data.weight;
        const date = datex;
        const status = 'Unpaid'
        const bookedData = { name, email, price, address, requested_delivery_date, phone_number, receivers_name, receivers_number, type, weight, date, status }


        axiosSecure.put(`/bookedparcel/?id=${id}`, bookedData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Parcel Update successful",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            })


    }
    return (
        <div className="hero min-h-screen ">
            {
                loading ? <div className='h-[80vh] flex justify-center items-center'>
                    <PulseLoader color="#231F20" size={20} />
                </div>
                    :
                    <div className='w-[700px] bg-[#00A1FF] shadow-two border py-14 px-6 my-20 rounded-xl'>
                        <h1 className='uppercase text-white text-2xl font-semibold text-center mb-10'>Update your parcel</h1>
                        <form onSubmit={handleSubmit(onSubmit)}
                            className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4' >
                            {/* Name ========*/}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">Name</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={name}
                                    disabled
                                    {...register("name")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/* Email=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">Email</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={email}
                                    disabled
                                    {...register("email")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/* Phone Number=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">Phone Number</span>
                                </label>
                                <input
                                    required
                                    type="number"
                                    placeholder='Your Phone Number'
                                    defaultValue={phone_number}
                                    {...register("phone_number")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/* Parcel Type=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">Parcel Type</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder='Parcel Type'
                                    defaultValue={type}
                                    {...register("type")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/*  Parcel Weight=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base"> Parcel Weight | KG</span>
                                </label>
                                <input
                                    required
                                    type="number"
                                    placeholder='kilogram'
                                    defaultValue={weight}
                                    {...register("weight")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/*   Receiver’s Name=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">  Receiver's Name</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Receiver's Name"
                                    defaultValue={receivers_name}
                                    {...register("receivers_name")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/*   Receiver's Phone Number=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">  Receiver's Phone Number</span>
                                </label>
                                <input
                                    required
                                    type="number"
                                    placeholder="Receiver's Phone Number "
                                    defaultValue={receivers_number}
                                    {...register("receivers_number")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/*   Receiver’s Name=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">  Parcel Delivery Address</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Parcel Delivery Address"
                                    defaultValue={address}
                                    {...register("address")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/*   Requested Delivery Date=============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">   Requested Delivery Date</span>
                                </label>
                                <input
                                    required
                                    type="date"
                                    placeholder="Parcel Delivery Address"
                                    defaultValue={requested_delivery_date}
                                    {...register("requested_delivery_date")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>
                            {/*  Price =============== */}
                            <div>
                                <label className="label">
                                    <span className="label-text text-white font-medium text-base">  Total Price | TK</span>
                                </label>
                                <input
                                    required
                                    type="number"
                                    value={totalPrice || price}
                                    disabled
                                    {...register("price")}
                                    className="w-full input input-bordered  h-10 focus:border-0" />
                            </div>



                            <button type='submit'
                                className=" px-10 py-2 bg-white mx-auto cursor-pointer md:col-span-2 rounded-md text-[#00A1FF] mt-6 active:scale-95 font-semibold">

                                Submit
                            </button>
                        </form>
                    </div>
            }
        </div>
    );
};

export default UpdateParcel;