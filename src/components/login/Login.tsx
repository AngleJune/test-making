import React, { useState } from "react";
// import SelectInLogin from "./SelectInLogin";
import LogoImg from '../../assest/s1.jpg';
import { EyeOffIcon, EyeIcon } from '@heroicons/react/outline';

const people = [
    { name: 'Chinese' },
    { name: 'English' },
    { name: 'French' },
    { name: 'Spanish' },
    { name: 'Arabic' },
    { name: 'German' },
]



const Login = () => {
    //语言选择
    const [selected, setSelected] = useState(people[1].name);
    //密码是否可见
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="h-full w-full flex">
            <div className="bg-gradient-to-r from-sky-100 to-blue-400 h-full m-6 flex flex-col w-full">
                <div className="flex items-center justify-between pb-4">
                    <div className="w-1/2">
                        <img className="md:max-h-32 max-h-16 object-cover py-3 md:px-10" src={LogoImg} alt="/" />
                    </div>
                    <div className="w-1/2">
                        <div className="text-right py-5 md:px-10 pl-12 ">
                            <select className="md:py-2 py-1 w-full md:max-w-[100px] rounded outline-none focus:ring focus:border-sky-300" defaultValue={selected} onChange={(e) => setSelected(e.target.value)}>
                                {
                                    people.map((item, index) => {
                                        return <option className="text-center" key={item.name + index} value={item.name}>{item.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-md border border-white mb-32 shadow-md">
                        <h2 className="mt-8 text-3xl font-extrabold text-gray-900">Login</h2>                    
                        <form className="mt-8 space-y-6" action="#">
                            <div className="rounded-md -space-y-px">
                                <div className="py-3">
                                    <label htmlFor="email-address" className="font-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="border rounded-md w-full px-3 py-4 outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs md:text-sm"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="py-3">
                                    <label htmlFor="password" className="font-bold">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={isOpen === false? "password" : "text"}
                                            className="border rounded-md w-full px-3 py-4 outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs md:text-sm"
                                            placeholder="Enter your password"
                                        />
                                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2" onClick={() => setIsOpen(!isOpen)}>
                                            {isOpen === false? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" /> }                                                                               
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="flex items-center justify-end pb-8">
                                <div className="text-sm">
                                    <a href="#/" className="font-medium text-[#1E4FFF] hover:text-[#1E4FFF]">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center mt-7 py-4 px-4 border border-transparent 
                                text-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div>
                            <p className="text-center">New account on RemitWise?<a href="#/" className="font-medium text-[#1E4FFF] hover:text-[#1E4FFF]">Create new account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Login;