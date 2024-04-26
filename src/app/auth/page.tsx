"use client"
import CustomButton from "@/components/ui/button/Button";
import CountryForm from "@/components/ui/dropdown/DropDown";

import TextInput from "@/components/ui/inputbar/InputBar";
import React, { useState } from 'react';

import Layout from "@/components/ui/layout/Layout";


const countriesList = ['United States', 'Canada', 'France', 'Germany'];





const Auth: React.FC = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (value: React.SetStateAction<string>) => {
        setPhone(value);
    };


    const handleSelectCountry = () => {
        console.log('hallo');
    };

    return (
        <div className="grid grid-cols-6 md:grid-cols-12 flex-col sm:flex-row min-h-screen bg-white">
            <div className="col-span-6">
                <Layout />
            </div>

            <div className="col-span-6">
                <div className="flex w-full flex-col mt-8">
                    <div className="justify-end flex text-[#BDBDBD] mr-8">STEP 01/03</div>
                    <div className="flex justify-between">
                        <div className="ml-16 font-semibold text-[#8692A6]">
                            <a href="/profile">&lt; &nbsp; Back</a>
                        </div>
                        <div className="text-[#8692A6] mr-9">Personal Info.</div>
                    </div>
                </div>
                <div className="max-w-[426px] mx-auto px-3 md:px-0">
                    <div className="flex flex-col md:pt-11 py-20">
                        <div className="font-extrabold text-3xl text-black">Complete Your Profile!</div>
                        <div className="text-slate-500 pt-4 ">For the purpose of industry regulation, your details are required.</div>
                        <div className="flex flex-col gap-1 pt-3">




                            <TextInput label={"Bank verification number (BVN)"} placeholder={"090912345567"} type={"varification"}></TextInput>




                            <div className="flex flex-col gap-6 pt-3">
                                <CustomButton color="bg-[#1565D8]" text="Save & Continue" href="/completed" />
                                <div className="text-[#8692A6] flex justify-center items-center">
                                    <div className="mx-4">Your Info is safely secured</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;

