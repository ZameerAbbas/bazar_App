/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect, useContext } from "react";
import { Createcart } from "../../Context/Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


import { CheckIcon, } from '@heroicons/react/20/solid'
import Contact from "../Contact/Contact";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";





const Cart = () => {
  const {



    trendingCartItems,
    addToCardTrending,
    removeTrendingFromCart,
    clearCartTrending,
    getCartTotalTrending,






    // freshfruits

    addToCardfreshfruits,
    freshfruitsCartItems,
    removefreshfruitsFromCart,
    clearCartfreshfruits,
    getCartTotalfreshfruits,


    // freshvegetables

    freshvegetablesCartItems,
    addToCartFreshVegetables,
    clearCartFreshVegetables,
    getCartTotalfreshvegetables,
    removefreshvegetablesFromCart,

    //herbs

    addToCartherbs,
    herbsCartItems,
    clearCartherbs,
    getCartTotalherbs,
    removeherbsFromCart,


    //datesdryfruit

    datesdryfruitCartItems,
    addToCartDatesDryFruit,
    clearCartDatesDryFruits,
    getCartTotaldatesdryfruit,
    removedatesdryfruitFromCart,




    // choppedpeeled

    choppedpeeledCartItems,
    addToCardChoppedpeeled,
    removechoppedpeeledFromCart,
    getCartTotalchoppedpeeled,
    clearCartchoppedpeeled,

    //daryandjams 
    dairyproductsCartItems,
    addToCartdDairyProducts,
    removedairyProductsFromCart,
    getCartTotaldairyproducts,
    clearCartDairyProducts



  } = useContext(Createcart);




  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });


  const handleRemoveFromCarttrend = ( item) => {

    removeTrendingFromCart(item);
    


  };
  const handleRemoveFromCartfruits = (product) => {
  
    removefreshfruitsFromCart(product);


  };
  const handleRemoveFromCartvegetables = (product) => {
    removefreshvegetablesFromCart(product);
    console.log("product",product)
    
  };
  const handleremovechoppedpeeledFromCart = (product) => {
  
    removechoppedpeeledFromCart(product);

    
  };
  const handleremovedairyProductsFromCart = (product) => {

    removedairyProductsFromCart(product);
    
 
  };
  const handleremoveherbsFromCart = (product) => {

    removeherbsFromCart(product);
 
  };
  const handleremovedatesdryfruitFromCart = (product) => {
    
    removedatesdryfruitFromCart(product);
  
  };


  console.log("freshfruitsCartItems", freshfruitsCartItems)
  console.log("trendingCartItems", trendingCartItems)


  const [subtotal, setSubtotal] = useState(0);
  const shipping = 5.00; // Static shipping value
  const tax = 8.32; // Static tax value
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const trending = getCartTotalTrending();
    const freshFruits = getCartTotalfreshfruits();
    const freshVegetables = getCartTotalfreshvegetables();
    const herbs = getCartTotalherbs();
    const datesDryFruit = getCartTotaldatesdryfruit();
    const choppedPeeled = getCartTotalchoppedpeeled();
    const dairyProducts = getCartTotaldairyproducts();

    const calculatedSubtotal = trending + freshFruits + freshVegetables + herbs + datesDryFruit + choppedPeeled + dairyProducts;
    setSubtotal(calculatedSubtotal);

    // Calculate total with shipping and tax
    setOrderTotal(calculatedSubtotal + shipping + tax);
  }, [addToCardTrending,
    removeTrendingFromCart, addToCardfreshfruits,
    removefreshfruitsFromCart,
    addToCartFreshVegetables,
    removefreshvegetablesFromCart,
    addToCartherbs,
    removeherbsFromCart,
    addToCartDatesDryFruit,
    removedatesdryfruitFromCart,
    addToCardChoppedpeeled,
    removechoppedpeeledFromCart,
    addToCartdDairyProducts,
    removedairyProductsFromCart]);

  const clearAllCarts = () => {
    clearCartTrending();
    clearCartfreshfruits();
    clearCartFreshVegetables();
    clearCartherbs();
    clearCartDatesDryFruits();
    clearCartchoppedpeeled();
    clearCartDairyProducts();
  };





  return (
    <>
      <div className="pt-20">
        <header className="bg-[#F8F9FA]">
          <p className="flex justify-start items-center px-2">
            <Link to="/" className="px-2 hover:text-[#00C851]" >Home</Link> /  <p className="px-2"> Cart</p>
          </p>
        </header>
      </div>


      <div className="bg-white">


        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl pt-16">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

              <form className="mt-12">
                <section aria-labelledby="cart-heading">
                  <h2 id="cart-heading" className="sr-only">
                    Items in your shopping cart
                  </h2>

                  <ul role="list" className=" border-b    border-gray-200 mb-4">
                    <p className="font-semibold"> Featured Product Cart</p>
                    {trendingCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.trendingImageURL}
                            src={item.data.trendingImagesURL}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">


                                  {item.data.trendingName}

                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.trendingPrice}</p>

                              </div>


                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  addToCardTrending(item);
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  const cartItem = trendingCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleRemoveFromCarttrend(item);
                                  } else {
                                    removeTrendingFromCart(item);
                                    e.preventDefault()
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}

                    <p className="text-right text-sm font-medium text-gray-900 ">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">

                          {getCartTotalTrending()}</p>
                      </div>
                    </p>
                  </ul>
                  <ul role="list" className=" border-b    border-gray-200 mb-4">
                    <p className="font-semibold"> Fresh Fruits Cart</p>
                    {freshfruitsCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.name}
                            src={item.data.image}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">
                                  <Link to={`/fresh-fruits/${item.key}`} >
                                    {item.data.name}
                                  </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.price}</p>

                              </div>




                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  addToCardfreshfruits(item);
                                  e.preventDefault()
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  const cartItem = freshfruitsCartItems.find(
                                    (product) => product.key === item.key
                                  );

                                  if (cartItem.quantity === 1) {
                                    handleRemoveFromCartfruits(item);
                                  } else {
                                    removefreshfruitsFromCart(item);
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>

                    ))}
                    <p className="text-right text-sm font-medium text-gray-900">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">

                          {getCartTotalfreshfruits()}</p>
                      </div>
                    </p>
                  </ul>
                  <ul role="list" className="  border-b    border-gray-200  py-4">
                    <p className="font-semibold"> Fresh Vegetables Carts</p>
                    {freshvegetablesCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.name}
                            src={item.data.image}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">

                                  {item.data.name}

                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.price}</p>

                              </div>


                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  addToCartFreshVegetables(item);
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  const cartItem = freshvegetablesCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleRemoveFromCartvegetables(item);
                                  } else {
                                    removefreshvegetablesFromCart(item);
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}





                    <p className="text-right text-sm font-medium text-gray-900">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">
                          {getCartTotalfreshvegetables()}</p>

                      </div>
                    </p>
                  </ul>
                  <ul role="list" className="    border-b    border-gray-200  mb-4">
                    <p className="font-semibold"> Chopped Peeled Carts</p>
                    {choppedpeeledCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.name}
                            src={item.data.image}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">

                                  {item.data.name}

                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.price}</p>

                              </div>


                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  addToCardChoppedpeeled(item);
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  const cartItem = choppedpeeledCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleremovechoppedpeeledFromCart(item);
                                  } else {
                                    removechoppedpeeledFromCart(item);
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>


                    ))}

                    <p className="text-right text-sm font-medium text-gray-900">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">
                          {getCartTotalchoppedpeeled()}</p>

                      </div>
                    </p>
                  </ul>
                  <ul role="list" className="    border-b    border-gray-200  mb-4">
                    <p className="font-semibold"> Dairy and Jams Carts</p>
                    {dairyproductsCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.name}
                            src={item.data.image}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">

                                  {item.data.name}

                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.price}</p>

                              </div>


                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  addToCartdDairyProducts(item);
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  const cartItem = dairyproductsCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleremovedairyProductsFromCart(item);
                                  } else {
                                    removedairyProductsFromCart(item);
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                    <p className="text-right text-sm font-medium text-gray-900">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">
                          {getCartTotaldairyproducts()}</p>

                      </div>
                    </p>
                  </ul>
                  <ul role="list" className="    border-b    border-gray-200  mb-4">
                    <p className="font-semibold"> Herbs Carts</p>
                    {herbsCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.name}
                            src={item.data.image}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">

                                  {item.data.name}

                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.price}</p>

                              </div>

                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  addToCartherbs(item);
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  const cartItem = herbsCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleremoveherbsFromCart(item);
                                  } else {
                                    removeherbsFromCart(item);
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}
                    <p className="text-right text-sm font-medium text-gray-900">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">
                          {getCartTotalherbs()}</p>

                      </div>
                    </p>
                  </ul>
                  <ul role="list" className="    border-b    border-gray-200  mb-4">
                    <p className="font-semibold"> Dates and Dry Fruit Carts</p>
                    {datesdryfruitCartItems.map((item, productIdx) => (
                      <li key={item.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            alt={item.data.name}
                            src={item.data.image}
                            className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                          />
                        </div>

                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-2xl font-bold text-gray-700 hover:text-gray-800">

                                  {item.data.name}

                                </h3>
                                <p className="mt-1 text-sm text-gray-500">RS. {item.data.price}</p>

                              </div>

                            </div>

                            <div className="flex justify-between items-center w-14">
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  addToCartDatesDryFruit(item);
                                }}
                              >
                                <CiCirclePlus size={25} className="text-[#00C851] font-bold" />
                              </button>
                              <p className="text-lg px-2">{item.quantity}</p>
                              <button
                                onClick={(e) => {
                                  e.preventDefault()
                                  const cartItem = datesdryfruitCartItems.find(
                                    (product) => product.key === item.key
                                  );
                                  if (cartItem.quantity === 1) {
                                    handleremovedatesdryfruitFromCart(item);
                                  } else {
                                    removedatesdryfruitFromCart(item);
                                  }
                                }}
                              >
                                <CiCircleMinus size={25} />
                              </button>
                            </div>
                          </div>

                          <p className="mt-4 flex space-x-2 text-sm text-gray-700">

                            <CheckIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />


                            <span>In stock</span>
                          </p>
                        </div>
                      </li>
                    ))}

                    <p className="text-right text-sm font-medium text-gray-900">
                      <div className="flex justify-end items-center">

                        <p className="px-2 font-semibold">
                          Total
                        </p>
                        <p className=" font-semibold">
                          {getCartTotaldatesdryfruit()}</p>

                      </div>
                    </p>
                  </ul>
                </section>
                <button className=" float-end" onClick={clearAllCarts}>Clear All Cart</button>

                {/* Order summary */}
                <section aria-labelledby="summary-heading" className="mt-10 sm:ml-32 sm:pl-6">
                  <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                    <h2 id="summary-heading" className="sr-only">
                      Order summary
                    </h2>

                    <div className="flow-root">
                      <dl className="-my-4    text-sm">
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd className="font-medium text-gray-900">Rs. {subtotal.toFixed(2)}</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-gray-600">Shipping</dt>
                          <dd className="font-medium text-gray-900">Rs. {shipping.toFixed(2)}</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-gray-600">Tax</dt>
                          <dd className="font-medium text-gray-900">Rs. {tax.toFixed(2)}</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <dt className="text-base font-medium text-gray-900">Order total</dt>
                          <dd className="text-base font-medium text-gray-900">Rs. {orderTotal.toFixed(2)}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Link to="/check-out"

                      className="w-[100%] flex  text-center justify-center items-center rounded-md border   ransparent bg-[#00C851] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[#00C811]"
                    >
                      <p className=" font-medium text-lg">

                        Checkout
                      </p>

                    </Link>
                  </div>


                  <div className="mt-6 text-center text-sm text-gray-500 py-2">
                    <p className="py-2">
                      OR
                    </p>
                    <p>


                      <Link to={"/"} className="font-medium text-[#00C851] hover:text-[#00C851]">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </p>
                  </div>
                </section>
              </form>
            </div>
          </div>


        </main>


        <Contact />
      </div>

    </>
  );
};

export default Cart;
