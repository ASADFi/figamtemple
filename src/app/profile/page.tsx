
import CustomButton from "@/components/ui/button/Button";
import CustomLoginButton from "@/components/ui/button/SocilaLoginButtion";
import IconButton from "@/components/ui/button/SocilaLoginButtion";
import TextInput from "@/components/ui/inputbar/InputBar";
import PasswordInput from "@/components/ui/inputbar/PasswordBar";
import Layout from "@/components/ui/layout/Layout";
import { HiOutlineMail } from "react-icons/hi";




export default function Home() {



  function handleClick(): void {
    console.log("Function not implemented.");
  }

  return (
    <div className="grid  grid-cols-6 md:grid-cols-12  flex-col sm:flex-row min-h-screen bg-white">
      <div className="col-span-6 ">
        <Layout />
      </div>

      <div className="col-span-6 ">
        <div className=" flex w-full flex-col mt-8">
          <div className="justify-end flex text-[#BDBDBD] mr-8">STEP 01/03</div>
          <div className="flex justify-between">
            <div className=" ml-16 font-semibold text-[#8692A6]">
              <a href="/">&lt; &nbsp; Back</a>
            </div>
            <div className=" text-[#8692A6] mr-9">Personal Info.</div>
          </div>



        </div>
        <div className="max-w-[426px] mx-auto px-3 md:px-0">

          <div className="flex flex-col md:pt-11 py-20">
            <div className="font-extrabold text-3xl text-black">Register Individual Account!</div>
            <div className="text-slate-500 pt-4 ">For the purpose of industry regulation, your details are required.</div>

            <div className="flex flex-col gap-1 pt-3">
              <TextInput label={"Your fullname*"} placeholder={"Steve Balbar"}></TextInput>
              <TextInput label={"Email address*"} placeholder={"Enter email address"}></TextInput>
              <PasswordInput label="Create password*" placeholder="Enter your password" />
              <span className="text-[#696F79]">
                I agree to terms & conditions</span>

              <div className="flex flex-col gap-6 pt-3">
                <CustomButton color="bg-[#1565D8]" text="Register Account" href="/individual" />
                <div className="text-black flex justify-center items-center">
  <div className="w-2/5 h-px bg-black"></div>
  <div className="mx-4">or</div>
  <div className="w-2/5 h-px bg-black"></div>
</div>
                <div className=" text-slate-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 hover:border-blue-500 hover:shadow-lg  ">
                  <CustomLoginButton color={"white"} text={"Register with Google"} href={"/"} />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
