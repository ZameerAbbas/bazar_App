import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { ImWhatsapp } from "react-icons/im";
import styled from "styled-components";

const WhatappContainer = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  z-index: 99;
  display: flex;
  bottom: 15px;
  right:15px;

 
`;

const Whatapp = () => {
  return (
    <WhatappContainer>
      <ReactWhatsapp
        number="923160891725"
        message="Type Message Here!"
        style={{
          background: "transparent",
          height: "80px",
          width: "80px",
          borderRadius: "100px",
          cursor: "pointer",
          border:"none",
          boxShadow:"none"
          
        }}
      >
        <ImWhatsapp style={{ color: "#25D366", fontSize: "50px" }} />
      </ReactWhatsapp>
    </WhatappContainer>
  );
};

export default Whatapp;
