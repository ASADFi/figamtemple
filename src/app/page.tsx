import Card from "@/components/ui/card/Card";
import Layout from "@/components/ui/layout/Layout";
import { HiOutlineUserCircle } from 'react-icons/hi';


export default function Home() {

  return (
    <div className="grid  grid-cols-6 md:grid-cols-12  flex-col sm:flex-row min-h-screen bg-white">
      <div className="col-span-6 ">
        <Layout />
      </div>

      <div className="col-span-6 ">
        <div className="text-gray-500 flex justify-end mt-8 mr-3 mb-6  ">Already have an account? <a href="/" className="text-blue-500">Sign In</a></div>
        <div className="max-w-[426px] mx-auto px-3 md:px-0">

          <div className="flex flex-col md:pt-44 py-20">
            <div className="font-extrabold text-3xl text-black">Join Us!</div>
            <div className="text-slate-500 ">To begin this journey, tell us what type of account you’d be opening.</div>

            <div className="flex flex-col gap-5 pt-3">
              <Card
                icon={<HiOutlineUserCircle className="text-blue-500 size-7" />}
                heading="Individual"
                description="Personal account to manage all you activities."
                href="./individual"
              />
              <Card
                icon={<HiOutlineUserCircle className="text-blue-500 size-7" />}
                heading="Business"
                description="Own or belong to a company, this is for you."
                href="./individual"
              />
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}
