/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../../images/logo.png";

import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import facebook from "../images/Social/facebook.png";
import instagram from "../images/Social/instagram.png";
import linkedin from "../images/Social/linkedin.png";
import whatsapp from "../images/Social/whatsapp.png";

const Contact = () => {



  return (
    <div id="Contact" className=" shadow-lg bg-[#F8F9FA] p-16 md:p-0">
      <div className="flex  justify-around flex-row   items-start md:items-center border-b-2 border-gray-400 py-4">
        <div className="flex justify-center mb-8 md:w-1/2">
          <h3>
            <img src={logo} alt="sdjfha" className="w-36" />
          </h3>
        </div>
        <div className="flex justify-center flex-col mb-1 md:w-1/2">
          <ul role="list" className="">
            <li className="   transition ease-in-out duration-300">
              <a href="mailto:info@fruitsnutsbazar.com.pk" target="_blank" className="text-lg flex items-center text-gray-600 hover:text-[#00C851]" rel="noreferrer">
                <AiOutlineMail className="mr-2 " />
                info@fruitsnutsbazar.com.pk
              </a>
            </li>
            <li className="hover:text-[#00C851]   transition ease-in-out duration-300">

              <a href="tel:+923160891725" target="_blank" className="text-lg flex items-center text-gray-600 mt-2 hover:text-[#00C851]" rel="noreferrer">
                <AiFillPhone className="mr-2" />
                +923554741334
              </a>
            </li>
            <li
              className="text-lg flex items-center  text-gray-600 mt-2 hover:text-[#00C851]   transition ease-in-out duration-300"
            >

              Plot 250, Street 6, I-9/2, Gilgit
            </li>
          </ul>

        </div>
        <div className="flex justify-center flex-col mb-8 md:w-1/3">
          <h3 className="font-semibold flex-1"> <p className="text-[#00C851] inline-block">Product</p> Category</h3>
          <div>

            <ul>
              <li>
                <Link to="/fresh-fruits" className="flex justify-between items-center p-2 transition-colors ease-in-out duration-300 hover:text-[#00C851]">
                  <p className="flex items-center">
                    <FaArrowRight className="mr-2" /> {/* Added margin to the right of the icon */}
                    Fresh Fruits
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to="/fresh-vegetables"
                  className="flex items-center p-2 transition-colors ease-in-out duration-300 hover:text-[#00C851]"
                >
                  <FaArrowRight className="mr-2" />
                  <p>Fresh Vegetables</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/herbs"
                  className="flex items-center p-2 transition-colors ease-in-out duration-300 hover:text-[#00C851]"
                >
                  <FaArrowRight className="mr-2" />
                  <p>Herbs</p>
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="flex justify-center flex-col mb-8 md:w-1/2">
        <h3 className="font-semibold flex-1"> <p className="text-[#00C851] inline-block">Get in </p> Touch</h3>
          <div className="flex justify-around mt-4">
            <a href="" className=" hover:scale-125 transition duration-200">
            <img src={facebook} alt="facebook" className="w-9 h-9" />
            </a>
            <a href="" className=" hover:scale-125 transition duration-200">
            <img src={instagram} alt="facebook" className="w-9 h-9" />
            </a>
            <a href="" className=" hover:scale-125 transition duration-200">
            <img src={linkedin} alt="facebook" className="w-9 h-9" />
            </a>
            <a href="" className=" hover:scale-125 transition duration-200">
            <img src={whatsapp} alt="facebook" className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-lg md:text-sm">
        &copy; Fruits & Nuts Bazar  {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
