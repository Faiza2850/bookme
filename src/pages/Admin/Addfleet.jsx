import React from "react";
import { bookme } from "../../assets/index";
import VarificationEmail from "../../components/admin components/VarificationEmail";

function EmailVarification() {
  return (
    <div className="bg-black ">
      {/*  header */}
      <header className="bg-black text-white flex justify-center items-center">
        <div className="flex items-center">
          <img src={bookme} alt="Bookmee Logo" className="h-[8rem]" />
        </div>
        </header>


      <div className="text-white text-center text-2xl mt-10 font-medium">
        Hi <span className="font-bold">James</span>,<br></br>
        Welcome to <span className="font-bold">Bookmee</span>! Your<br></br>{" "}
        account has been created.
      </div>
      {/* contents */}


      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 max-w-7xl mx-auto mt-10">
        <div
          className="mx-4 md:mx-10 text-center text-[#5E5E5E]">
          <span className="">
            Your account has been created and you can check more <br></br>{" "}
            details on Bookmee.com
          </span>
        </div>
        <div className="justify-center items-center">
        <hr className=" my-6 border-t border-[#bcbfc8] w-[80%]" /></div>
<div className=" text-center text-lg mt-4">
        <p className="text-[#5E5E5E]">
  You can now access details of your ride on</p> 
  <a href="http://bookmee.com/myride" className="text-side_blue underline" target="_blank">
    http://bookmee.com/myride
  </a></div>

<VarificationEmail/>
      </div>
      
    </div>
  );
}

export default EmailVarification;