import React from "react";

const CartEvent = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div className="flex justify-between border-b-2 pb-5 border-gray-300 mt-5 ">
      <div className="w-[65%]">
        <img src={cartItem.event?.image} />
      </div>
      <div className="flex flex-col w-full">
        <div className="m-2">
          <p className="font-bold tracking-widest ">{cartItem.event?.title}</p>
          
          <div className="w-full flex flex-row">
            <p className="w-1/2 italic text-gray-600">Date: {cartItem.event?.date}</p>
            <p className="w-1/2 italic text-gray-600">Time: {cartItem.event?.time}</p>
          </div>
          <p className="text-gray-500 py-1">Location: {cartItem.event?.location}</p>
          <p className="text-gray-500 py-1">Price:{cartItem.event?.price}</p>
          <p className="text-gray-500 py-1">Description: {cartItem.event?.description}</p>
          <div className="py-5">
          Status : 
            <p className={`inline uppercase font-semibold tracking-widest ${cartItem?.status==='pending'? 'text-yellow-400' : cartItem.status=== 'approved' ? 'text-green-400': 'text-red-400'}`}>
                {cartItem.status}
              {/* <span>{cartProduct.quantity * cartProduct.price}</span> */}
            </p>
          </div>
          
          {/* total prize display for particular item */}
          
        </div>
      </div>
      
    </div>
  );
};

export default CartEvent;
