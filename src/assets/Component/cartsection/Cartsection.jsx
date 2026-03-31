import React from 'react';

const Cartsection = ({cart}) => {
    // console.log(cart);
const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
// console.log(totalPrice);
    return (
        

<div className="card bg-base-100 shadow-sm container mx-auto">
  <div className="card-body">
    <h2 className="card-title">Your Cart</h2>
   <div className='space-y-4 '>
    {
        cart.map((item, index)=> <div key={index} className='flex justify-between bg-base-100 shadow-sm p-4'>
        <div className=' flex gap-4 '>
            <div>
                <img src={item.icon} alt="" className="w-8 h-12 object-contain"/>
            </div>
            <div>
                <p className='font-semibold'>{item.name}</p>
                <p>${item.price}</p>
            </div>
        </div>
        <div>
            <button className='btn text-red-500'>Remove</button>
        </div>
    </div>)
    }
   </div>
    <div className='flex justify-between p-1'>
        <div>
            <p>Total</p>
        </div>
        <div>
            <p className='font-bold'>${totalPrice}</p>
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