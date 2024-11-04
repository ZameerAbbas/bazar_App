import React, { useState, useEffect, useContext } from "react";
import {

    Radio,
    RadioGroup,
    Dialog,
    DialogPanel, Button, DialogTitle

} from '@headlessui/react'

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'

import { Createcart } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const deliveryMethods = [
    { id: 1, title: 'Cash on Delivery', turnaround: '4–10 business days', price: '' },
    { id: 2, title: 'Online pay', turnaround: '2–5 business days', price: '$16.00' },
]




export default function Checkout() {
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])

    const {





        getCartTotalTrending,






        // freshfruits


        getCartTotalfreshfruits,


        // freshvegetables

        getCartTotalfreshvegetables,

        //herbs


        getCartTotalherbs,



        //datesdryfruit


        getCartTotaldatesdryfruit,





        // choppedpeeled


        getCartTotalchoppedpeeled,

        //daryandjams 

        getCartTotaldairyproducts,




    } = useContext(Createcart);



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
    }, []);

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    const navigate = useNavigate();

    function close() {
        setIsOpen(false)
        navigate("/")
    }


    return (
        <>

            <div className='py-20 px-10'>

                {/* <header className="bg-[#F8F9FA]">
          <p className="flex justify-start items-center px-2">
            <Link to="/cart" className="px-2 hover:text-[#00C851]" >Cart</Link> /  <p className="px-2"> Check Out</p>
          </p>
        </header> */}


                <div className="bg-gray-50">


                    <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <h1 className="sr-only">Checkout</h1>

                            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                                <div>
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                                        <div className="mt-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email-address"
                                                    name="email-address"
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="Enter your Email "
                                                    className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="  border-gray-200 pt-10">
                                        <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                            <div>
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    First name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="first-name"
                                                        name="first-name"
                                                        type="text"
                                                        placeholder=" Enter Your First Name"
                                                        autoComplete="given-name"
                                                        className="block w-full  p-3  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Last name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="last-name"
                                                        name="last-name"
                                                        type="text"
                                                        autoComplete="family-name"
                                                        placeholder="Enter your last Name"
                                                        className="block w-full  p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>



                                            <div className="sm:col-span-2">
                                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                    Address
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="address"
                                                        name="address"
                                                        type="text"
                                                        placeholder="Enter your Address"
                                                        autoComplete="street-address"
                                                        className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                                    Apartment, suite, etc.
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="apartment"
                                                        placeholder="Enter your   Apartment, suite, etc."
                                                        name="apartment"
                                                        type="text"
                                                        className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    City
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="city"
                                                        name="city"
                                                        type="text"
                                                        placeholder="Enter your City"
                                                        autoComplete="address-level2"
                                                        className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                </label>
                                                <div className="mt-1">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        placeholder="Enter your Country Name "
                                                        className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    >
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                    State / Province
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="region"
                                                        name="region"
                                                        type="text"
                                                        placeholder=" Region "
                                                        autoComplete="address-level1"
                                                        className="block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    Postal code
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="postal-code"
                                                        name="postal-code"
                                                        type="text"
                                                        placeholder=" Postal Code "
                                                        autoComplete="postal-code"
                                                        className="block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                    Phone
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="text"
                                                        placeholder="Enter your Phone Number"
                                                        autoComplete="tel"
                                                        className="block w-full  p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Payment */}

                                </div>

                                {/* Order summary */}
                                <div className="mt-10 lg:mt-0">


                                    <div className="mt-10 ">
                                        <h2 className="text-lg font-medium text-gray-900">Delivery method</h2>

                                        <fieldset aria-label="Delivery method" className="mt-4">
                                            <RadioGroup
                                                value={selectedDeliveryMethod}
                                                onChange={setSelectedDeliveryMethod}
                                                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                                            >
                                                {deliveryMethods.map((deliveryMethod) => (
                                                    <Radio
                                                        key={deliveryMethod.id}
                                                        value={deliveryMethod}
                                                        aria-label={deliveryMethod.title}
                                                        aria-description={`${deliveryMethod.turnaround} for ${deliveryMethod.price}`}
                                                        className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[checked]:border-transparent data-[focus]:ring-2 data-[focus]:ring-[#00C851]"
                                                    >
                                                        <span className="flex flex-1">
                                                            <span className="flex flex-col">
                                                                <span className="block text-sm font-medium text-gray-900">{deliveryMethod.title}</span>
                                                                <span className="mt-1 flex items-center text-sm text-gray-500">
                                                                    {deliveryMethod.turnaround}
                                                                </span>
                                                                <span className="mt-6 text-sm font-medium text-gray-900">Rs {orderTotal.toFixed(2)}</span>
                                                            </span>
                                                        </span>
                                                        <CheckCircleIcon
                                                            aria-hidden="true"
                                                            className="h-5 w-5 text-[#00C851] [.group:not([data-checked])_&]:hidden"
                                                        />
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-[#00C851]"
                                                        />
                                                    </Radio>
                                                ))}
                                            </RadioGroup>
                                        </fieldset>
                                    </div>

                                    <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                                    <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                                        <h3 className="sr-only">Items in your cart</h3>

                                        <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <dt className="text-sm">Subtotal</dt>
                                                <dd className="text-sm font-medium text-gray-900">Rs. {subtotal.toFixed(2)}</dd>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <dt className="text-sm">Shipping</dt>
                                                <dd className="text-sm font-medium text-gray-900">Rs. {shipping.toFixed(2)}</dd>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <dt className="text-sm">Taxes</dt>
                                                <dd className="text-sm font-medium text-gray-900">Rs. {tax.toFixed(2)}</dd>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                                <dt className="text-base font-medium">Total</dt>
                                                <dd className="text-base font-medium text-gray-900">Rs. {orderTotal.toFixed(2)}</dd>
                                            </div>
                                        </dl>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <button

                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    open();
                                                }}
                                                className="w-[100%] flex text-center justify-center items-center rounded-md border border-transparent bg-[#00C851] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[#00C811]"
                                            >
                                                <p className="font-medium text-lg">Confirm order</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                    <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
    <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-black/50 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                <DialogTitle as="h3" className="text-lg font-medium text-black">
                    Order successfully completed
                </DialogTitle>
                <p className="mt-2 text-sm text-black/80">
                    Your order has been successfully completed. We’ve sent you an email with all of the details of your order.
                </p>
                <div className="mt-4">
                    <Button
                        className="inline-flex items-center gap-2 rounded-md bg-gray-300 py-1.5 px-3 text-sm font-semibold text-black shadow-inner focus:outline-none hover:bg-gray-200 focus:outline focus:outline-2 focus:outline-black"
                        onClick={close}
                    >
                        Got it, thanks!
                    </Button>
                </div>
            </DialogPanel>
        </div>
    </div>
</Dialog>



                </div>
            </div>

            <Contact />
        </>
    )
}
