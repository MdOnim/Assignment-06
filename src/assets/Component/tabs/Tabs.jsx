import React from "react";

const Tabs = ({setActiveTab,cart}) => {
  return (
    <div className="tabs tabs-box justify-center bg-transparent m-5 ">
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-full w-40 "
        aria-label="Products"
        onClick={()=> setActiveTab("Products")}
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-full w-40"
        aria-label={`Cart(${cart.length})`}
        onClick={()=> setActiveTab("Cart")}
      />
    </div>
  );
};

export default Tabs;
