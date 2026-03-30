import React from 'react';
import BannerImage from "../../../assets/banner.png";
import { TfiControlPlay } from "react-icons/tfi";

const Banner = () => {
    return (
    <div className=' container mx-auto mt-10 '>
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerImage}
      className="max-w-sm rounded-lg shadow-2xl"
    
    />
    <div>
        <div className="badge badge-soft badge-primary font-semibold p-4 rounded-2xl mb-4">New: AI-Powered Tools Available</div>
      <h1 className="text-5xl font-bold">Supercharge Your <br />
        Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br />
        Explore Products
      </p>
      <div className='flex gap-2'>
        <button className="btn btn-primary rounded-3xl">Explore Products</button>
        <button className="btn btn-outline rounded-3xl btn-primary"> <TfiControlPlay className='text-2xl' /> Watch Demo</button>

        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;