import React from 'react';
import BannerImage from "../../../assets/banner.png";
import { TfiControlPlay } from "react-icons/tfi";

const Banner = () => {
    return (

<div className='container mb-10 mx-auto mt-5 px-4 md:mt-10'>
  <div className="hero min-h-[80vh] lg:min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse p-0 lg:p-4 text-center lg:text-left">
      
     
      <img
        src={BannerImage}
        className="w-full max-w-[300px] md:max-w-sm rounded-lg shadow-2xl"
        alt="Banner"
      />
      
    
      <div className="mt-8 lg:mt-0">
        <div className="badge badge-soft badge-primary font-semibold p-4 rounded-2xl mb-4 text-xs md:text-sm">
          New: AI-Powered Tools Available
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Supercharge Your <br className="hidden md:block" />
          Digital Workflow
        </h1>
        
        <p className="py-6 text-sm md:text-lg opacity-80 max-w-md mx-auto lg:mx-0">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.
        </p>
        
      
        <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
          <button className="btn btn-primary rounded-3xl px-8">Explore Products</button>
          <button className="btn btn-outline rounded-3xl btn-primary gap-2"> 
            <TfiControlPlay className='text-xl' /> Watch Demo
          </button>
        </div>
      </div>
      
    </div>
  </div>
</div>





    );
};

export default Banner;