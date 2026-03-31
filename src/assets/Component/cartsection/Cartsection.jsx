import React from 'react';

const Cartsection = ({cart}) => {
    console.log(cart);
    return (
<div className="card bg-base-100 shadow-sm container mx-auto">
  <div className="card-body">
    <h2 className="card-title">Your Cart</h2>
   <div className='space-y-4 '>
     <div className='flex justify-between bg-base-100 shadow-sm p-4'>
        <div className=' flex '>
            <div>
                <img src="https://img.icons8.com/fluency/48/notepad.png" alt="" className="w-10 h-10"/>
            </div>
            <div>
                <p>AI Writing Pro</p>
                <p>$29</p>
            </div>
        </div>
        <div>
            <button className='btn text-red-500'>Remove</button>
        </div>
    </div>
   </div>

    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Proceed to Checkout</button>
    </div>
  </div>
</div>
    );
};

export default Cartsection;