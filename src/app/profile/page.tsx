"use client";
import CustomButton from "@/components/ui/button/Button";
import CountryForm from "@/components/ui/dropdown/DropDown";
// import TextInput from "@/components/ui/inputbar/InputBar";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import React, { useEffect, useState } from 'react';
import Layout from "@/components/ui/layout/Layout";
import { useRouter } from 'next/navigation';
import TextInput from "@/components/ui/inputbar/InputBar";

const countriesList = ['United States', 'Canada', 'France', 'Germany'];

const Profile = () => {
   const [country, setcountry] = useState('');
  const [address, setMyAddress] = useState('');
  const [Value, setValue] = useState('');
  
  const [storedData, setStoredData] = useState({});
useEffect(() => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('data');
    setStoredData(data ? JSON.parse(data) : {});
  }
}, []); // '{}' as default
  const mr = useRouter();
  // const handlePhoneChange = (value: React.SetStateAction<string>) => {
  //   console.log('test ', value)
  //   setPhone(value);
  // };
  const onChange = () => {
    console.log('hallo');
  };
  useEffect(() => {

    console.log("Fahad next Page STate: ", storedData);
  }, []);
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
              <a href="/individual">&lt; &nbsp; Back</a>
            </div>
            <div className="text-[#8692A6] mr-9">Personal Info.</div>
          </div>
        </div>
        <div className="max-w-[426px] mx-auto px-3 md:px-0">
          <div className="flex flex-col md:pt-11 py-20">
            <div className="font-extrabold text-3xl text-black">Complete Your Profile!</div>
            <div className="text-slate-500 pt-4 ">For the purpose of industry regulation, your details are required.</div>
            <div className="flex flex-col gap-1 pt-3">


              <PhoneInput
                className="block w-full  px-3 py-2 mt-1 text-slate-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 hover:border-blue-500 hover:shadow-lg"
                placeholder="Enter phone number"
                international
                defaultCountry="US"
                value={Value}
                onChange={onChange}
              />
              <TextInput label={"Your address"} placeholder={"Please enter address"} onValueChange={(obj: { target: { value: React.SetStateAction<string>; }; }) => {
                console.log("fah value change: ", obj.target.value);
                setMyAddress(obj.target.value);
              }} type={""}></TextInput>


              <CountryForm countries={countriesList} placeholder={'Please select'} onValueChange={(obj: { target: { value: React.SetStateAction<string>; }; }) => {
                console.log("fah value change: ", obj.target.value);
                setcountry(obj.target.value);
              }} />

              <div className="flex flex-col gap-6 pt-3">

                <CustomButton color="bg-[#1565D8]" text="Save & Continue" href="/auth"
                  onClick={() => {


                    const newData = {
                      ...storedData,
                      address: address,
                      country: country,

                    }

                    localStorage.setItem('data', JSON.stringify(newData));

                    mr.push(`/auth`)
                  }}
                />


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

export default Profile;

