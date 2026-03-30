import React from 'react';

const ModelsCard = ({model}) => {
    const {name,description,icon,tag ,features} = model
    return (
        <div>
            {/* akhn theke models suru hobe */}
            
    <div className="card w-96 bg-base-100 shadow-sm">
    
    <div className="card-body ">
   {/* Tag er name onujayi badge er color change korlam akhane  */}
    <span className={`badge badge-soft absolute top-6 right-6 
        
        ${
        tag==='Best Seller'?'badge-warning':
        tag==='Popular'?'badge-primary':
        tag==='New'?'badge-success':
        tag==='Trending'?'badge-error':''
        }

        `}>{model.tag}</span>
    
    
    
    <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-gray-100 mb-2 mt-5">

    <img src={icon} alt="" />
    </div>
    <div className='space-y-2'>
      <h2 className="text-3xl font-bold line-clamp-1">{name}</h2>
      <p className='text-[#627382]'>{description}</p>
    <p><span className="text-xl font-bold">${model.price}</span>/{model.period}</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      
     {
        
        // feature gulo dekahnor jonno map korlam akhane 

        features.map((feature,index)=> <li key={index}>

        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[#627382]'>{feature}</span>

      </li>)
     }
      
      
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Buy Now</button>
    </div>
  </div>
</div>








       {/* akhabe sese models sesh  */}

        </div>
    );
};

export default ModelsCard;