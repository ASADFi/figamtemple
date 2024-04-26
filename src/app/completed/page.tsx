"use client"
import React, { useState } from 'react';

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
                <div className="relative w-full h-screen flex justify-center items-center">
                    <img src="/backphoto.png" className="w-full h-full object-cover" alt="image" />
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full">
                        <div className="bg-[#1565D8e5] w-full h-full flex justify-center items-center">
                            <div className="max-w-[475px] xl:max-w-[700px] mx-auto">
                                <div className="justify-start flex flex-col  items-start">
                                    
                                    
                                    <div className=" flex items-center gap-4 absolute left-10 top-16">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" viewBox="0 0 44 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.506 28.7517C7.86923 29.9003 4.98068 30.2576 2.18354 29.8175C0.395723 29.5362 -0.435764 27.5944 0.226389 25.9101C0.888543 24.2257 2.81925 23.4695 4.6289 23.4451C5.74072 23.4302 6.84936 23.1958 7.88853 22.7431C9.94214 21.8485 11.5563 20.1747 12.3758 18.09C13.1954 16.0053 13.1532 13.6805 12.2586 11.6268C11.8059 10.5877 11.1537 9.66103 10.3497 8.89293C9.04112 7.64275 8.14234 5.77412 8.80449 4.08979C9.46665 2.40545 11.3979 1.54975 12.8986 2.56125C14.1094 3.37728 15.1935 4.36514 16.1172 5.49215C16.3489 5.77496 16.7889 5.77497 17.0207 5.49216C19.1554 2.88728 22.1047 1.0766 25.3936 0.351648C28.6825 -0.373304 32.1197 0.0296555 35.1517 1.49565C38.1838 2.96165 40.6342 5.40537 42.1086 8.43336C42.9639 10.1899 43.4618 12.0838 43.5894 14.007C43.7432 16.3251 41.4393 17.788 39.1692 17.2942C36.8991 16.8004 35.5817 14.4045 34.625 12.2875C34.5991 12.2301 34.5723 12.173 34.5447 12.1163C33.8972 10.7866 32.8211 9.71347 31.4897 9.0697C30.1582 8.42593 28.6488 8.24897 27.2045 8.56733C25.7602 8.88568 24.4651 9.68081 23.5277 10.8247C22.5902 11.9686 22.065 13.3947 22.0366 14.8734C22.0082 16.352 22.4783 17.7973 23.3711 18.9763C24.2639 20.1554 25.5275 20.9997 26.9585 21.3733C27.0195 21.3892 27.0807 21.4043 27.1421 21.4184C29.4058 21.9405 32.0138 22.7616 32.9439 24.8904C33.8741 27.0193 32.8923 29.5657 30.5892 29.8703C28.6784 30.123 26.7236 30.0068 24.8333 29.5133C21.5746 28.6626 18.6971 26.7399 16.664 24.055C16.6164 23.9921 16.5215 23.9921 16.4738 24.055C14.9338 26.0887 12.8861 27.7148 10.506 28.7517Z" fill="white" />
                                        </svg>
                                        <span className="font-semibold  text-xl xl:text-2xl pt-3">Oasis.</span>
                                    </div>








                                    
                                </div>
                                <p className="text-white text-2xl xl:text-7xl ">
                                Welcome to the <span className='font-extrabold '>company.</span>
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-6 relative">

                <div className="fixed top-8 right-6 flex flex-col ">
                    <span className="text-[#BDBDBD] ml-[107px]">Steve Balbar</span>
                    <div className="flex items-center">
                        <span className="text-[#8692A6] mr-2">stevebalbar@example.com</span>
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Profile" className="w-10 h-10 rounded-full" />
                    </div>


                </div>


               



                <div className="absolute bottom-8  flex flex-col ">
                    <span className="text-[#BDBDBD] ml-[107px]">
                    <a href="/">&lt; &nbsp; Logout</a>
                    </span>
                    


                </div>







                <div className="max-w-[426px] mx-auto px-3 md:px-0">
                <div className="flex flex-col justify-center  h-screen">
  <span className="text-black text-4xl font-extrabold">Congratulations! 🎉</span>
  <span className="text-[#8692A6] font-normal mt-4 ">Thank you for joining the company</span>
</div>



                </div>
                
            </div>







        </div>
    );
};

export default Auth;

