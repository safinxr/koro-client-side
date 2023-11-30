import React, { useContext, useRef, useState } from 'react';
import { ContextAuth } from '../../Context/Context';
import { useForm } from "react-hook-form"
import axios from 'axios';
import Swal from 'sweetalert2';


const MyProfile = () => {
    const { user, shortLoading, upProfileImg, upProfile, 
        setLoading } = useContext(ContextAuth)
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const imgRaf = useRef(null);
    const [img, setImg] = useState(null)
    const [changeBtn, setChangeBtn] = useState(false)



    const handleImageClick = () => {
        imgRaf.current.click();
    };

    const fileInput = (e) => {
        setImg(e.target.files[0]);
        setChangeBtn(true)

    }

    const onSubmit = async(data) => {
        const name = data.name
        
        if(img){
            const newImg = { image: img }
            const res = await axios.post('https://api.imgbb.com/1/upload?key=c14d1c652f3718fe5463a2c7182fdd68', newImg, {
                headers: {

                    'content-type': 'multipart/form-data'
                }
            })
            const imgUrl = res.data.data.url;
            upProfileImg(name, imgUrl)
                .then(() => {  
                    setLoading(false)                
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Profile Update successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch((error) => {
                    setLoading(false)
                    console.log("error:" + " " + error.message.split("/")[1].split(")")[0]);
                });
        }
        else{
            upProfile(name)
                .then(() => {
                    setLoading(false)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Profile Update successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch((error) => {
                    setLoading(false)
                    console.log("error:" + " " + error.message.split("/")[1].split(")")[0]);
                });
        }
        
        
    }


    return (
        <div className='mx-auto px-3 md:px-8 lg:px-12 my-12'>
            <div className='min-h-full flex justify-center items-center'>
                <div className='shadow-two bg-[#00A1FF] rounded-md w-[400px] px-8 py-12'>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col items-center'>
                        <div onClick={handleImageClick} className='cursor-pointer hover:opacity-80'>
                            {
                                img ? <img className='w-24 h-24  rounded-full ' src={URL.createObjectURL(img)} alt="" /> :
                                    user?.photoURL ?
                                        <img className='w-24 h-24  rounded-full ' src={user?.photoURL} alt="" />
                                        :
                                        <div className='w-24 h-24 rounded-full bg-gray-600 flex justify-center items-center'>
                                            <p className='text-white text-2xl uppercase'>{user?.email.slice(0, 1)}</p>
                                        </div>
                            }
                            {

                            }
                            <input {...register("img")}
                                onChange={fileInput}
                                name='img'
                                className='hidden'
                                type="file"
                                ref={imgRaf}
                            />
                        </div>
                        {/* Name==================== */}
                        <div className='mb-8 w-full'>
                            <label className="label">
                                <span className="label-text text-base font-medium text-white">Name</span>
                            </label>
                            <div className='bg-white w-full  flex items-center py-1.5 px-2 rounded-lg'>

                                <input
                                    className='w-full bg-transparent focus:outline-none text-lg ps-4'
                                    type="text"
                                    placeholder='Name'
                                    defaultValue={user.displayName}
                                    required
                                    {...register("name",)}
                                    onChange={() => setChangeBtn(true)}
                                />
                            </div>
                        </div>
                        {/* email==================== */}
                        <div className='w-full'>
                            <div className='bg-white w-full  flex items-center py-1.5 px-2 rounded-lg'>
                                <input
                                    className='w-full bg-transparent focus:outline-none text-lg ps-4 text-center text-gray-600'
                                    type="text"
                                    value={user.email}
                                    disabled

                                />
                            </div>
                        </div>

                        <button type='submit'
                            disabled={!changeBtn}
                            className={changeBtn ? " px-10 py-2 bg-green-600 mx-auto cursor-pointer md:col-span-2 rounded-md  mt-6 font-medium w-full text-white" : " px-10 py-2 bg-green-900 mx-auto cursor-pointer md:col-span-2 rounded-md  mt-6 font-medium w-full text-white"}>
                            Save Change</button>

                    </form>

                </div>
            </div>
        </div>

    );
};

export default MyProfile;