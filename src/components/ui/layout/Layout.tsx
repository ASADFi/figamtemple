// components/Card.tsx

import React from 'react';

interface LayoutProps {
  
}

const Layout: React.FC<LayoutProps> = ({  }) => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
    <img src="/backphoto.png" className="w-full h-full object-cover" alt="image" />
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full">
      <div className="bg-[#1565D8e5] w-full h-full flex justify-center items-center">
        <div className="max-w-[475px] xl:max-w-[700px] mx-auto">
          <div className="justify-start flex flex-col  items-start">
            <div className=" flex items-center gap-4  ">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" viewBox="0 0 44 30" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.506 28.7517C7.86923 29.9003 4.98068 30.2576 2.18354 29.8175C0.395723 29.5362 -0.435764 27.5944 0.226389 25.9101C0.888543 24.2257 2.81925 23.4695 4.6289 23.4451C5.74072 23.4302 6.84936 23.1958 7.88853 22.7431C9.94214 21.8485 11.5563 20.1747 12.3758 18.09C13.1954 16.0053 13.1532 13.6805 12.2586 11.6268C11.8059 10.5877 11.1537 9.66103 10.3497 8.89293C9.04112 7.64275 8.14234 5.77412 8.80449 4.08979C9.46665 2.40545 11.3979 1.54975 12.8986 2.56125C14.1094 3.37728 15.1935 4.36514 16.1172 5.49215C16.3489 5.77496 16.7889 5.77497 17.0207 5.49216C19.1554 2.88728 22.1047 1.0766 25.3936 0.351648C28.6825 -0.373304 32.1197 0.0296555 35.1517 1.49565C38.1838 2.96165 40.6342 5.40537 42.1086 8.43336C42.9639 10.1899 43.4618 12.0838 43.5894 14.007C43.7432 16.3251 41.4393 17.788 39.1692 17.2942C36.8991 16.8004 35.5817 14.4045 34.625 12.2875C34.5991 12.2301 34.5723 12.173 34.5447 12.1163C33.8972 10.7866 32.8211 9.71347 31.4897 9.0697C30.1582 8.42593 28.6488 8.24897 27.2045 8.56733C25.7602 8.88568 24.4651 9.68081 23.5277 10.8247C22.5902 11.9686 22.065 13.3947 22.0366 14.8734C22.0082 16.352 22.4783 17.7973 23.3711 18.9763C24.2639 20.1554 25.5275 20.9997 26.9585 21.3733C27.0195 21.3892 27.0807 21.4043 27.1421 21.4184C29.4058 21.9405 32.0138 22.7616 32.9439 24.8904C33.8741 27.0193 32.8923 29.5657 30.5892 29.8703C28.6784 30.123 26.7236 30.0068 24.8333 29.5133C21.5746 28.6626 18.6971 26.7399 16.664 24.055C16.6164 23.9921 16.5215 23.9921 16.4738 24.055C14.9338 26.0887 12.8861 27.7148 10.506 28.7517Z" fill="white" />
              </svg>
              <span className="font-semibold  text-xl xl:text-2xl pt-3">Oasis.</span>
            </div>
            <div className="mt-32"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
              <path d="M21.9531 0.421875C23.0469 0.421875 23.5938 0.640625 23.5938 1.07812C23.5938 1.26562 23.4219 1.42187 23.0781 1.54688C20.2031 2.70313 18.7656 4.95313 18.7656 8.29688C19.2031 8.23438 19.5156 8.20312 19.7031 8.20312C23.4531 8.20312 25.3281 10.0781 25.3281 13.8281C25.3281 17.5469 23.4531 19.4062 19.7031 19.4062C15.3594 19.4062 13.1875 17.0156 13.1875 12.2344C13.1875 7.07812 15.2656 3.375 19.4219 1.125C20.2969 0.65625 21.1406 0.421875 21.9531 0.421875ZM9.71875 0.5625C10.8125 0.5625 11.3594 0.78125 11.3594 1.21875C11.3594 1.40625 11.1875 1.5625 10.8438 1.6875C7.96875 2.84375 6.53125 5.09375 6.53125 8.4375C6.96875 8.375 7.28125 8.34375 7.46875 8.34375C11.2188 8.34375 13.0938 10.2188 13.0938 13.9688C13.0938 17.6875 11.2188 19.5469 7.46875 19.5469C3.125 19.5469 0.953125 17.1562 0.953125 12.375C0.953125 7.21875 3.03125 3.51562 7.1875 1.26562C8.0625 0.796875 8.90625 0.5625 9.71875 0.5625Z" fill="#00DAF7" />
            </svg>
          </div>
          <p className="text-white text-xl xl:text-2xl leading-[38px] xl:leading-[42px] pt-11">
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
          </p>
          <div className="flex items-center gap-3 mt-3 xl:mt-6">
            <p className="text-lg xl:text-xl">Vincent Obi</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_1_150)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666626 8C0.666626 3.94991 3.94987 0.666664 7.99996 0.666664C12.05 0.666664 15.3333 3.94991 15.3333 8C15.3333 12.0501 12.05 15.3333 7.99996 15.3333C3.94987 15.3333 0.666626 12.0501 0.666626 8Z" fill="#08AD36" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5404 5.36195C11.8008 5.6223 11.8008 6.04441 11.5404 6.30476L7.40235 10.6381C7.142 10.8984 6.71989 10.8984 6.45954 10.6381L4.45954 8.6381C4.19919 8.37775 4.19919 7.95564 4.45954 7.69529C4.71989 7.43494 5.142 7.43494 5.40235 7.69529L6.93095 9.22388L10.5976 5.36195C10.858 5.1016 11.2801 5.1016 11.5404 5.36195Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_150">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-12 flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
              <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Layout;
