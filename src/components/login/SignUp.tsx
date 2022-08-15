import React, { useState } from "react";
import { EyeOffIcon, EyeIcon } from '@heroicons/react/outline';
import LogoImg from '../../assest/s1.jpg';

// 国家语言
const people = [
    { name: 'Chinese' },
    { name: 'English' },
    { name: 'French' },
    { name: 'Spanish' },
    { name: 'Arabic' },
    { name: 'German' },
]

//国家电话代码
const phoneCode = [
    { country: 'Chinese', code: '+86' },
    { country: 'Afghanistan', code: '+93' },
    { country: 'Argentina', code: '+54' },
    { country: 'Australia', code: '+61' },
    { country: 'Brazil', code: '+55' },
    { country: 'France', code: '+33' },
    { country: 'Germany', code: '+49' },
    { country: 'India	', code: '+91' },
    { country: 'Singapore', code: '+65' },
    { country: 'Italy', code: '+39' },
]

const SignUp = () => {
    //语言选择下拉框
    const [selected, setSelected] = useState<string>(people[1].name);
    //电话代码下拉框
    const [selectedCode, setSelectedCode] = useState<string>(phoneCode[8].code);
    //密码是否可见
    const [isOpen, setIsOpen] = useState<boolean>(false);
    //确认密码是否可见
    const [isConfirm, setIsConfirm] = useState<boolean>(false);

    console.log(isConfirm);

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
                <div className="md:flex justify-center h-full">
                    <div className="border border-yellow-300 bg-white py-10 px-6 rounded-md w-full md:max-w-4xl h-full mb-48">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <form action="" className="text-gray-600">
                            <div className="md:flex justify-between md:space-x-8 mt-10">
                                <div className="md:w-1/2">
                                    <label htmlFor="email-address" className="block pb-2 text-xs md:text-sm md:font-semibold">Email</label>
                                    <div className="relative">
                                        <input type="email" className="border rounded-md outline-none focus:ring focus:border-sky-400 py-3 px-2 w-full text-xs md:text-sm" placeholder="Enter your email" />
                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                            <button type="button" className="md:px-3 px-1 border py-3 rounded-r-md text-blue-700 text-xs md:text-sm">Send</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 mt-5 md:mt-0">
                                    <label htmlFor="" className="block pb-2 text-xs md:text-sm md:font-semibold">Email verification code</label>
                                    <div className="flex">
                                        <input type="text" className="border rounded-md outline-none focus:ring focus:border-sky-400 py-3 px-2 w-full text-xs md:text-sm" placeholder="Enter your email verification code" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex justify-between mt-5 md:space-x-8">
                                <div className="md:w-1/2">
                                    <label className="block pb-2 text-xs md:text-sm md:font-semibold">Phone number</label>
                                    <div className="relative inline-block w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center rounded-l-md bg-blue-600">
                                            <select defaultValue={selectedCode} onChange={(e) => setSelectedCode(e.target.value)} className="py-3 md:px-2 text-white bg-blue-600 rounded-l-md outline-none border border-blue-600 focus:border-blue-600 text-xs md:text-sm">
                                                {
                                                    phoneCode.map((item, index) => <option key={item.code + index} value={item.code}>{item.code}</option>)
                                                }
                                            </select>
                                        </div>
                                        <input type="text" className="border rounded-md w-full py-3 md:pl-20 pl-12 outline-none focus:ring foucs:border-sky-400 text-xs md:text-sm" placeholder="Enter your phone number" />
                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                            <button type="button" className="md:px-3 px-1 border py-3 rounded-r-md text-blue-700 text-xs md:text-sm">Send</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="md:w-1/2 mt-5 md:mt-0">
                                    <label className="block pb-2 text-xs md:text-sm md:font-semibold">SMS Verification code</label>
                                    <input type="text" className="border rounded-md w-full px-2 py-3 outline-none focus:ring focus:border-sky-400 text-xs md:text-sm" placeholder="Enter your SMS verification code" />
                                </div>
                            </div>
                            <div className="md:flex justify-between md:space-x-8 mt-5">
                                <div className="md:w-1/2">
                                    <label className="block pb-2 text-xs md:text-sm md:font-semibold">Password</label>
                                    <div className="relative">
                                        <input type={isOpen === false ? "password" : "text"} className="border rounded-md w-full px-2 py-3 outline-none focus:ring focus:border-sky-400 text-xs md:text-sm" placeholder="Enter your password" />
                                        <button type="button" className="absolute inset-y-0 right-0 flex items-center" onClick={() => setIsOpen(!isOpen)}>
                                            {isOpen === false? <EyeOffIcon className="w-5 h-5 text-gray-400 mr-3" /> : <EyeIcon className="w-5 h-5 text-gray-400 mr-3" />}                                                                                        
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-1/2 mt-5 md:mt-0">
                                    <label className="block pb-2 text-xs md:text-sm md:font-semibold">Confirm password</label>
                                    <div className="relative">
                                        <input type={isConfirm === false? "password" : "text"} className="border rounded-md w-full px-2 py-3 outline-none focus:ring focus:border-sky-400 text-xs md:text-sm" placeholder="Enter your confirmation password" />
                                        <button type="button" className="absolute inset-y-0 right-0 flex items-center" onClick={() => setIsConfirm(!isConfirm)}>
                                            {isConfirm === false? <EyeOffIcon className="w-5 h-5 text-gray-400 mr-3" /> : <EyeIcon className="w-5 h-5 text-gray-400 mr-3" />}
                                        </button>
                                    </div>                                   
                                </div>
                            </div>
                            <div className="mt-5">
                                <label className="block pb-2 text-xs md:text-sm md:font-semibold">Referal code (optional)</label>
                                <input type="text" className="border w-full rounded-md px-2 py-3 outline-none focus:ring focus:border-sky-400 text-xs md:text-sm" placeholder="Enter your Referal code (optional)" />
                            </div>
                            <div className="md:flex justify-between items-center mt-5">
                                <div>
                                    <p className="py-2 text-xs md:text-sm md:font-semibold">Already have account ?<a className="text-blue-700 px-2" href="#/">Login</a></p>
                                </div>
                                <div>
                                    <button className="border border-blue-700 rounded-md py-3 px-10 bg-blue-700 text-white w-full md:text-sm text-xs">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;