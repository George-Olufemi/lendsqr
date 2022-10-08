import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/user")
    }
  return (
    <React.Fragment>
       
        <div className='w-screen h-screen bg-[#fbfbfb]'>
        <div className="flex justify-between align-center">    
            <div>
                <div className="pt-[106px] ml-[97px] cursor-pointer">
                    <img src="/lendsqrlogo.svg" alt="Logo" />
                </div>
                <div className="">
                    <div className="mt-[139px] ml-[67px] mr-[169px]">
                        <img src="/pablo-sign-in 1.svg" alt="Pablo Sign In" />
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="h-screen w-[704px] bg-white">
                <div className="pt-[220px] pl-[100px]">
                    <h1 className="text-[#213F7D] font-[700] text-[40px] leading-[55px] pb-[10px]">Welcome!</h1>
                    <p className="font-[400] text-[#545F7D] text-[20px] leading-[27px] pb-[60px]">Enter details to login.</p>
                    {/* form section */}
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input className="border-[2px] border-[rgba(84, 95, 125, 0.15)] rounded-[5px] w-[447px] h-[50px] text-[18px] p-[16px] mb-[24px]" type="email" placeholder="Email" />
                                <input className="border-[2px] border-[rgba(84, 95, 125, 0.15)] rounded-[5px] w-[447px] h-[50px] text-[18px] p-[16px]" type="email" placeholder="Password" />
                                <p className='text-[#39CDCC] font-[600] text-[12px] leading-[16px] uppercase absolute left-[1265.95px] top-[465px] cursor-pointer'>show</p>
                                <p className="text-[#39CDCC] pt-[24px] text-[12px] font-[600] uppercase tracking-wide cursor-pointer pb-[30px]">forgot password?</p>
                                <button className="w-[447px] h-[50px] bg-[#39CDCC] text-center rounded-[8px] font-[600] text-[14px] leading-[19px] tracking-wide text-white cursor-pointer">LOGIN</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Login;