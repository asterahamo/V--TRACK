import {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { LoginAdmin } from '../redux/apiCalls/AuthSlice';
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import imageLogin from "../assets/logoImg.jpg";
import vector from "../assets/Vector.png";
import CircleLoader from 'react-spinners/CircleLoader'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginSuccessState, setLoginSuccessState] = useState(false); 

    const HandelLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                title: "Validation Error",
                text: "Please enter both email and password.",
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return; 
        }

        const userData = {
            email,
            password,
        };

        setIsLoading(true); 

        try {
            await dispatch(LoginAdmin(userData, setLoginSuccessState));
        } catch (error) {
            console.error("Login dispatch failed:", error);
            Swal.fire({
                title: "Login Failed",
                text: "An error occurred during login. Please check your credentials.",
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setIsLoading(false); 
            setEmail(""); 
            setPassword(""); 
        }
    };

    useEffect(() => {
        if(loginSuccessState){
            Swal.fire({
                title: "Login Successful", 
                text: "Welcome to the dashboard!", 
                icon: 'success',
                confirmButtonText: 'OK',
            }).then((result) => {
                if(result.isConfirmed){
                    navigate("/dashboard");
                }
            });
            setLoginSuccessState(false); 
        }
    },[loginSuccessState, navigate]); 

    return (
        <div className="w-[100%] h-[100vh] overflow-hidden bg-[#fff]">
            <div className="w-[100%] h-[100%] flex">
                <div className="w-[50%] h-[100%] relative">
                    <div className="absolute top-[3%] right-[44%]">
                        <p className="text-[50px] font-serif font-[700] underline tracking-[-9px] text-[#000] ">V-Track</p>
                    </div>
                    <img src={imageLogin} alt="Login illustration" className="w-[100%] h-[100%] bg-auto"/>
                </div>
                <div className='w-[50%] h-[100%] p-14 relative'>
                    <div className="flex flex-col absolute top-[15%] left-[15%] mt-[20px]">
                        <p className="w-[100%] font-Rubik text-[32px] font-[600] text-[#000] ml-[20px] tracking-[-3px] ">Login</p>
                        <p className="text-[#000] ml-[20px] font-[600] underline cursor-pointer">Forgot your password?</p>
                        <form className="mt-10 ml-[20px] mr-[20px]" onSubmit={HandelLogin}> {/* Attach HandelLogin to form's onSubmit */}
                            <div className="flex flex-col">
                                <div className="flex flex-col mb-8">
                                    <input
                                        className="w-full px-[4px] py-[10px] text-lg bg-transparent border-[1px] border-[rgba(121, 118, 124, 1)] text-[15px] rounded-[5px] focus:outline-none placeholder:font-[400] pl-[15px]"
                                        type="email"
                                        placeholder="Enter Your Email..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col mb-8">
                                    <input
                                        className="w-full px-[4px] py-[10px] text-lg bg-transparent border-[1px] border-[rgba(121, 118, 124, 1)] text-[15px] rounded-[5px] focus:outline-none placeholder:font-[400] pl-[15px]"
                                        type="password"
                                        placeholder="Password..."
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <input
                                    className="w-[5%] mr-4 px-[4px] py-[16px] bg-transparent border-2 text-[10px] rounded-t-[15px] focus:outline-none placeholder:font-[400] text-[black]"
                                    type="checkBox"
                                    id="keepLoggedIn" 
                                />
                                <label htmlFor="keepLoggedIn" className="text-[16px] font-[600] font-sans"> 
                                    Keep me logged in - applies to all log in options below. More info
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="button cursor-pointer w-[100%] p-4 mb-4 mt-6 rounded-lg bg-[#000] flex items-center justify-center"
                                disabled={isLoading} 
                            >
                                {isLoading ? (
                                    <CircleLoader size={20} color="#ffffff" /> 
                                ) : (
                                    <span className="text-[#fff] text-[14px] font-[500] flex items-center justify-between w-full">
                                        EMAIL LOGIN
                                        <img src={vector} alt='arrow icon' className="ml-2"/>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;