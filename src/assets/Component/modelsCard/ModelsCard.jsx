import React from 'react';

const ModelsCard = ({model}) => {
    return (
        <div>
            {/* //this is models start  */}
            
    <div className="card w-96 bg-base-100 shadow-sm">
    
    <div className="card-body ">
    {/* <span className="badge badge-soft badge-warning absolute top-6 right-6 ">{model.tag}</span> */}
    <span className={`badge badge-soft absolute top-6 right-6 
        
        ${
        model.tag==='Best Seller'?'badge-warning':
        model.tag==='Popular'?'badge-primary':
        model.tag==='New'?'badge-success':
        model.tag==='Trending'?'badge-error':''


        }
        
        
        `}>{model.tag}</span>
    
    
    
    <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-gray-100 mb-2 mt-5">
      {/* <span className="text-2xl">✏️</span>  */}

    <img src={model.icon} alt="" />
    </div>
    <div className='space-y-2'>
      <h2 className="text-3xl font-bold line-clamp-1">{model.name}</h2>
      <p className='text-[#627382]'>{model.description}</p>
    <p><span className="text-xl font-bold">${model.price}</span>/{model.period}</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[#627382]'>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Buy Now</button>
    </div>
  </div>
</div>








        {/* //this is models end */}

        </div>
    );
};

export default ModelsCard;