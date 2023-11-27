import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import signupA from '../../assets/signupA.json'
import { useForm } from "react-hook-form"
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { ContextAuth } from '../../Context/Context';
import { PulseLoader } from 'react-spinners';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';



const SignUp = () => {
    const [seen, setSeen] = useState(true)
    const { emailPassSignUp, upProfile, googleSignIn, shortLoading, setLoading } = useContext(ContextAuth)
    const [errorText, setErrorText] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const provider = new GoogleAuthProvider();
    const {register, handleSubmit, formState: { errors },} = useForm()


    
    // ON SUBMIT🍉🍉🍉🍉🍉🍉🍉
    const onSubmit = (data) => {
        setErrorText(null)
        
        const name = data.name;
        const email= data.email;
        const password = data.password
        emailPassSignUp(email, password)
            .then(res => {
                upProfile(name)
                    .then(() => {
                        // TODO🤖🤖🤖🤖🤖🤖
                        // axios.post('https://sasha-server-side.vercel.app/allusers', { name, email })
                        //     .then(res => console.log(res.data))
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Sign up successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location.state || '/')
                        setLoading(false)
                    }).catch((error) => {
                        setLoading(false)
                        setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
                    });




            })
            .catch(error => {
                setLoading(false)
                setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
            })
    }

    // GOOGLE SUBMIT=======================
    const googleHandel = (xProvider) => {
        googleSignIn(xProvider)
            .then(res => {
                // const user = res.user
                // const name = user.displayName
                // const email = user.email
                // axios.post('https://sasha-server-side.vercel.app/allusers', { name, email })
                //     .then(res => console.log(res.data))
                navigate(location.state || '/')
            }).catch((error) => {
                console.log(error.message);
            });

        }

    return (
        <div className='bg-gray-100'>
            <div className='max-w-4xl mx-auto py-10 md:py-20 px-3 md:px-8 lg:px-0'>

                <div className='shadow-two bg-white flex justify-center rounded-md'>


                    <div className='flex-1  rounded-s-m hidden md:flex'>
                        <div className=' md:flex md:items-center h-full'>
                            <Lottie animationData={signupA} loop={true} />
                        </div>
                    </div>


                    <div className='flex-1 bg-[#9013FE] rounded-md md:rounded-l-none rounded-r-md'>
                        <div className='py-8 lg:p-8'>
                            <h2 className='text-white uppercase text-xl text-center mt-2 mb-6'>Sign Up</h2>
                            <div className='px-4 md:px-6 lg:px-8 pb-4 pt-4'>
                                {/* Form start🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮🥮 */}

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='bg-white mb-8 flex items-center py-1.5 px-2 rounded-full'>
                                        <BiSolidUser className='text-xl mr-2'></BiSolidUser>
                                        <input
                                            className='w-full bg-transparent focus:outline-none text-lg '
                                            type="name"
                                            placeholder='Name'
                                            required
                                            {...register("name",

                                            )}
                                        />
                                    </div>
                                    {/* Email===================== */}
                                    <div className='bg-white mb-8 flex items-center py-1.5 px-2 rounded-full'>
                                        <MdEmail className='text-xl mr-2'></MdEmail>
                                        <input
                                            className='w-full bg-transparent focus:outline-none text-lg '
                                            type="email"
                                            placeholder='Email'
                                            required
                                            {...register("email",

                                            )}
                                        />
                                    </div>
                                    {/* Password=================== */}
                                    <div className='bg-white flex items-center py-1.5 px-2 rounded-full'>
                                        <RiLockPasswordFill className='text-xl mr-2'></RiLockPasswordFill>
                                        <input
                                            className='w-full bg-transparent focus:outline-none text-lg '
                                            type={seen ? "password" : "text"}
                                            placeholder='Password'
                                            required
                                            {...register("password",
                                                {
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Password must be at least 6 characters',
                                                    },
                                                    validate: {
                                                        hasUpperCase: (value) => /[A-Z]/.test(value) || 'Password must include one uppercase letter',
                                                        hasSpecialChar: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must include one special character',
                                                    },

                                                }
                                            )}
                                        />
                                        <label className="swap">

                                            <input onChange={() => setSeen(!seen)} type="checkbox" />

                                            <FaEyeSlash className="swap-on fill-current text-lg"></FaEyeSlash>

                                            <IoEyeSharp className="swap-off fill-current text-lg"></IoEyeSharp>

                                        </label>

                                    </div>
                                    {errors.password ? <p className="text-secondary ms-2 text-sm mt-1">{errors.password.message}</p>
                                        : errorText && <>
                                            <p className='text-secondary ms-2 text-sm mt-1'>{errorText}</p>
                                        </>
                                    }


                                    {/* Submit Button=============== */}
                                    <button type="submit" className='w-full bg-[#00A1FF] py-2 rounded-full text-white uppercase font-semibold active:scale-95 mt-8'>
                                        {shortLoading ? <PulseLoader color="#231F20" size={10} /> : "SIGN UP"}
                                    </button>
                                </form>

                                {/* GOOGLE SIGNUP PART===================== */}
                                <div className=''>
                                    <p className='my-5 ms-2 text-start text-white'>Already have an account? <Link className='underline underline-offset-4' to='/Signin' state={location.state}>Sign in</Link>
                                    </p>

                                    <div className='mb-4 flex justify-center items-center'>
                                        <div className='border w-full mx-5'></div>
                                        <p className='text-[#E5E7EB] border px-1.5 rounded-md'>OR</p>
                                        <div className='border w-full mx-5'></div>
                                    </div>
                                    <button onClick={() => googleHandel(provider)} className='w-full bg-[#00A1FF] py-2 rounded-full black-text font-semibold active:scale-95 mb-8 flex justify-center items-center text-white'>
                                        <span className='mr-2 text-2xl'><FcGoogle /></span>Sign Up With Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;