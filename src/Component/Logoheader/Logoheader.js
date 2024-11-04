import React from "react";
import {
  LogoNav,
  ConatinerFlex,
  Contactoptions,
  ContactCard,
  Searchbox,
  Input,
} from "./Elements";
import ReactWhatsapp from "react-whatsapp";
import img from "../images/logo.jpg";

import {RiTelegramLine} from "react-icons/ri"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch, BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
const Logoheader = () => {
  return (
    <LogoNav>
      <ConatinerFlex>
        <Contactoptions>
          <ContactCard>
            {" "}
            <ReactWhatsapp
              number="923554741334"
              message="Type Message Here!"
              style={{
                cursor: "pointer",
                border: "none",
                color: "#fff",
                background: "black",
                margin: "0 15px",
              }}
            >
              <RiTelegramLine size={40} />
            </ReactWhatsapp>
            <a
              rel="noreferrer"
              href="tel:+923554741334"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {" "}
              <BsTelephone size={30} />
            </a>
          </ContactCard>
          <Searchbox>
            <Input type="text" placeholder="search" /> <BsSearch size={25} />
          </Searchbox>
        </Contactoptions>
        <div>
           <img
            src={img}
            alt=""
            style={{ width: "50px", marginLeft: "-200px" }}
          /> 
        </div>
        <div>
          {" "}
          <Link to="/Cart">
            <AiOutlineShoppingCart size={40}  color="#fff"/>
          </Link>
        </div>
      </ConatinerFlex>
    </LogoNav>
  );
};

export default Logoheader;
