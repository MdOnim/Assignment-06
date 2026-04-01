import React from "react";
import { toast } from "react-toastify";

const Cartsection = ({ cart, setCart }) => {
  // console.log(cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  // console.log(totalPrice);

  const hadlePayment = () => {
    setCart([]);
    toast.success("Successfully paid !");
  };

  const handleDelete = (itemDelete) => {
    const filteredArrray = cart.filter((cd) => cd !== itemDelete);
    //    console.log(filteredArrray);
    setCart(filteredArrray);
    toast.error("Successfully removed from cart !");
  };

  return (

    <div className="card bg-base-100 shadow-sm container mx-auto">
      <div className="card-body">
        <h2 className="card-title">Your Cart</h2>
        {cart.length === 0 ? (
          <div>
            <p className="text-center">Your cart is empty</p>
          </div>
        ) : (
            
        
        <div className="space-y-4 ">
          {cart.map((item, index) => (
            <div key={index} className="">
              <div className=" flex gap-4 justify-between p-2 bg-base-100 shadow-sm ">
                <div className="flex gap-4 ">
                  <div>
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[10px] md:text-[14px] ">{item.name}</p>
                    <p >${item.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>

              
            </div>
          ))}

          <div className="flex justify-between p-1">
                <div>
                  <p>Total</p>
                </div>
                <div>
                  <p className="font-bold">${totalPrice}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={hadlePayment}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
              </div>
        </div>
       )}
    </div>
    </div>
  );
};

export default Cartsection;
