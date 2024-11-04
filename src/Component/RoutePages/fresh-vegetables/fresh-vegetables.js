/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useContext,useEffect } from "react";
import { Createcart } from "../../../Context/Context";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";

import mainimg from "../../../images/fruits.webp"
import { CiCirclePlus } from "react-icons/ci";
const FreshVegetables = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);

  const {
    
    loading
,

    freshvegetables,
    freshvegetablesCartItems,
    addToCartFreshVegetables,
   
    removefreshvegetablesFromCart,
  } = useContext(Createcart);


  const handleRemoveFromCart = (product) => {
    removefreshvegetablesFromCart(product);
  };
  return (
    <div className=" pt-20 ">
    <header className="bg-[#F8F9FA]">
      <p className="flex justify-start items-center px-2">
        <Link to="/" className="px-2 hover:text-[#00C851]">
          Home
        </Link>{" "}
        / <p className="px-2"> Fresh Vegetables</p>
      </p>
    </header>

    <div className="flex justify-center items-center flex-col py-4">
         <div className="py-4">
          <img src="http://apt.farmtohome.com.pk/banners/veggies.webp" alt="fresh fruits" className="w-48 h-48" />
         </div>
         <div>
         <p className="font-medium text-[#525252] text-[56px] leading-[67px]">Fresh Vegetables</p>
         </div>
      </div>
    <div className="px-6 py-4">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9"
      >
        {loading}
        {freshvegetables.map((person) => (
          <li
            key={person.email}
            className="col-span-1  w-[150px] h-[20vh]  relative flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow overflow-hidden"
          >
            <div className="flex flex-1 flex-col relative">
              <img
                alt=""
                src={person.data.image}
                className="absolute z-10 w-full h-full object-cover"
              />

              <div className="relative z-20 bg-black bg-opacity-50 w-[150px] h-[20vh]  p-4">
                <div className="flex flex-col justify-end items-start h-full">
              <p className="text-lg font-medium text-white leading-[26px]">
                {person.data.name.split(" ").slice(0, 2).join(" ")}
              </p>
              <p className="text-sm font-medium text-white">RS {person.data.price}</p>
            </div>
             
                <div className="absolute right-2 top-2">
                {!freshvegetablesCartItems.find(
                    (item) => item.key === person.key
                  ) ?  (
                  <button onClick={() => addToCartFreshVegetables(person)} className="text-white">
                    <CiCirclePlus
                      size={35}
                      className="text-[#E66C42] rounded-full hover:bg-[#E66C42] hover:text-white"
                    />
                  </button>
                ) : (
                  <div className="flex items-center">
                    <button className="text-white font-semibold"  onClick={() => {
                          addToCartFreshVegetables(person);
                        }}>
                      +
                    </button>
                    <p className="mx-2 text-white font-semibold">
                    {
                          freshvegetablesCartItems.find(
                            (item) => item.key === person.key
                          ).quantity
                        }
                    </p>
                    <button
                      className="text-white font-semibold"
                      onClick={() => {
                        const cartItem = freshvegetablesCartItems.find(
                          (item) => item.key === person.key
                        );
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(person);
                        } else {
                          removefreshvegetablesFromCart(person);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
              
          
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Contact />
  </div>
  )
}

export default FreshVegetables