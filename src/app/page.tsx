'use client'
import Card from "@/components/ui/card/Card";
import Layout from "@/components/ui/layout/Layout";
import { useState } from "react";
import { HiOutlineUserCircle } from 'react-icons/hi';
import {useRouter} from 'next/navigation';




export default function Home() {

  const mr = useRouter();


  return (

    <div className="grid  grid-cols-6 md:grid-cols-12  flex-col sm:flex-row min-h-screen bg-white">
      <div className="col-span-6 ">
        <Layout />
      </div>

      <div className="col-span-6 ">
        <div className="text-gray-500 flex justify-end mt-8 mr-14 mb-6  ">Already have an account? <a href="/individual" className="text-blue-500">Sign In</a></div>
        <div className="max-w-[426px] mx-auto px-3 md:px-0">

          <div className="flex flex-col md:pt-44 py-20">
            <div className="font-extrabold text-3xl text-black">Join Us!</div>
            <div className="text-slate-500 ">To begin this journey, tell us what type of account you’d be opening.</div>

            <div className="flex flex-col gap-5 pt-3">
              <Card
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M26 0L50.7275 17.9656L41.2824 47.0344H10.7176L1.27253 17.9656L26 0Z" fill="#1565D8" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7204 28.8871C20.5018 28.1057 21.5616 27.6667 22.6667 27.6667H29.3333C30.4384 27.6667 31.4982 28.1057 32.2796 28.8871C33.061 29.6685 33.5 30.7283 33.5 31.8333V33.5C33.5 33.9602 33.1269 34.3333 32.6667 34.3333C32.2064 34.3333 31.8333 33.9602 31.8333 33.5V31.8333C31.8333 31.1703 31.5699 30.5344 31.1011 30.0656C30.6323 29.5967 29.9964 29.3333 29.3333 29.3333H22.6667C22.0036 29.3333 21.3677 29.5967 20.8989 30.0656C20.4301 30.5344 20.1667 31.1703 20.1667 31.8333V33.5C20.1667 33.9602 19.7936 34.3333 19.3333 34.3333C18.8731 34.3333 18.5 33.9602 18.5 33.5V31.8333C18.5 30.7283 18.939 29.6685 19.7204 28.8871Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9999 19.3333C24.6192 19.3333 23.4999 20.4526 23.4999 21.8333C23.4999 23.214 24.6192 24.3333 25.9999 24.3333C27.3806 24.3333 28.4999 23.214 28.4999 21.8333C28.4999 20.4526 27.3806 19.3333 25.9999 19.3333ZM21.8333 21.8333C21.8333 19.5321 23.6987 17.6667 25.9999 17.6667C28.3011 17.6667 30.1666 19.5321 30.1666 21.8333C30.1666 24.1345 28.3011 26 25.9999 26C23.6987 26 21.8333 24.1345 21.8333 21.8333Z" fill="white" />
                </svg>}
                heading="Individual"
                description="Personal account to manage all you activities."
                href="./individual"
                onClickCallBack={() => {

                  const data = {
                    accountType: 'Individual'
                  };
              
                  localStorage.setItem('data', JSON.stringify(data));

                  mr.push(`/individual`);

                  
                }}
              />
              <Card
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" >
                  <path d="M2.09543 18.2329L26 0.865247L49.9046 18.2329L40.7738 46.3344H11.2262L2.09543 18.2329Z" stroke="#1565D8" stroke-width="1.4" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3333 22.6667C18.873 22.6667 18.4999 23.0398 18.4999 23.5V31.8333C18.4999 32.2936 18.873 32.6667 19.3333 32.6667H32.6666C33.1268 32.6667 33.4999 32.2936 33.4999 31.8333V23.5C33.4999 23.0398 33.1268 22.6667 32.6666 22.6667H19.3333ZM16.8333 23.5C16.8333 22.1193 17.9525 21 19.3333 21H32.6666C34.0473 21 35.1666 22.1193 35.1666 23.5V31.8333C35.1666 33.214 34.0473 34.3333 32.6666 34.3333H19.3333C17.9525 34.3333 16.8333 33.214 16.8333 31.8333V23.5Z" fill="#1565D8" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5655 18.3989C23.0343 17.9301 23.6702 17.6667 24.3333 17.6667H27.6666C28.3296 17.6667 28.9655 17.9301 29.4344 18.3989C29.9032 18.8677 30.1666 19.5036 30.1666 20.1667V33.5C30.1666 33.9602 29.7935 34.3333 29.3333 34.3333C28.873 34.3333 28.4999 33.9602 28.4999 33.5V20.1667C28.4999 19.9457 28.4121 19.7337 28.2558 19.5774C28.0996 19.4211 27.8876 19.3333 27.6666 19.3333H24.3333C24.1122 19.3333 23.9003 19.4211 23.744 19.5774C23.5877 19.7337 23.4999 19.9457 23.4999 20.1667V33.5C23.4999 33.9602 23.1268 34.3333 22.6666 34.3333C22.2063 34.3333 21.8333 33.9602 21.8333 33.5V20.1667C21.8333 19.5036 22.0966 18.8677 22.5655 18.3989Z" fill="#1565D8" />
                </svg>}
                heading="Business"
                description="Own or belong to a company, this is for you."
                href="./individual"
                onClickCallBack={() => {
                  const data = {
                    accountType: 'Business'
                  };
              
                  localStorage.setItem('data', JSON.stringify(data));

                  mr.push(`/individual`);
                }}
              />



            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
