import React, { useState } from "react";
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

//原生带图标的下拉框地址：https://www.cxyzjd.com/article/lanying100/107940319

const SelectCountry = () => {
    const [selected, setSelected] = useState<string>(people[1].name);

    return(
        <div className="w-full h-full flex bg-yellow-200">
            <div className="flex flex-col m-6 bg-gradient-to-r from-[#E1F1FF] to-[#ADD9FF] w-full h-full">
                <div className="flex items-center justify-between pb-4 bg-green-200">
                    <div className="w-1/2">
                        <img className="md:max-h-32 max-h-16 object-cover py-3 md:px-10" src={LogoImg} alt="/" />
                    </div>
                    <div className="w-1/2">
                        <div className="text-right py-5 md:px-10 pl-12">
                            <select defaultValue={selected} onChange={(e) => setSelected(e.target.value)} className="md:py-2 px-1 w-full md:max-w-[100px] rounded outline-none focus:ring focus:border-sky-400">
                                {
                                    people.map((item, index) => {
                                        return <option key={item.name + index} value={item.name} className="text-center">{item.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="max-w-lg border border-red-300 m-5 rounded-lg bg-white w-full h-full">
                        <div className="flex flex-col m-8 border border-green-500">
                            <div className="border border-blue-400">
                                <h1 className="text-center text-2xl font-bold">Select your country</h1>
                            </div>
                            <div className="border border-green-700 mt-10">
                                <p className="text-md">Please ensure your country of residence matches your valid ID. Your privilages could change based on the selection</p>
                            </div>
                            <div className="flex flex-col mt-7 border border-yellow-500">
                                <label htmlFor="" className="block text-sm font-bold">your country</label>
                                <div className="mt-3 rounded-md border border-blue-500">
                                    <span className="after:bg-[url('/')] after:w-6 after:h-6 after:content-['*'] after:absolute after:left-0"></span>
                                    <input className="w-full py-3" type="text" placeholder="Enter your country" />
                                    
                                    <div className="z-30 border border-red-500 w-full h-full">
                                        <ul>
                                            <li className="border focus:bg-gray-200 hover:bg-gray-200">
                                                <div className="flex">
                                                    <img className="w-10 h-10 my-1 mx-3" src={LogoImg} alt="" />
                                                    <div className="flex my-1">
                                                        <p className="my-auto">中国</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="border focus:bg-gray-200 hover:bg-gray-200">
                                                <div className="flex">
                                                    <img className="w-10 h-10 my-1 mx-3" src={LogoImg} alt="" />
                                                    <div className="flex my-1">
                                                        <p className="my-auto">中国</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="border focus:bg-gray-200 hover:bg-gray-200">
                                                <div className="flex">
                                                    <img className="w-10 h-10 my-1 mx-3" src={LogoImg} alt="" />
                                                    <div className="flex my-1">
                                                        <p className="my-auto">中国</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="border focus:bg-gray-200 hover:bg-gray-200">
                                                <div className="flex">
                                                    <img className="w-10 h-10 my-1 mx-3" src={LogoImg} alt="" />
                                                    <div className="flex my-1">
                                                        <p className="my-auto">中国</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="border focus:bg-gray-200 hover:bg-gray-200">
                                                <div className="flex">
                                                    <img className="w-10 h-10 my-1 mx-3" src={LogoImg} alt="" />
                                                    <div className="flex my-1">
                                                        <p className="my-auto">中国</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>                                
                            </div>
                            <div className="mt-10 border border-sky-300">
                                <button type="button" className="text-center border border-blue-700 py-3 w-full bg-blue-700 rounded-md text-white text-md">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectCountry;