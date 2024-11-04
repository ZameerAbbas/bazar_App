import React from "react";
import {
  Container,
  ConatinerMainFelx,
  FlexCardCont,
  Left,
  LeftTop,
  LeftBotom,
  Rigth,
} from "./MainContactElement";
import Navbar from "../Navbar/Navbar";

const MainContact = () => {
  return (
    <Container>
      <Navbar />
      <ConatinerMainFelx>
        <FlexCardCont>
          <Left>
            <LeftTop>
              <h1>Contact Information</h1>
            </LeftTop>
            <LeftBotom></LeftBotom>
          </Left>
          <div>Right</div>
        </FlexCardCont>
      </ConatinerMainFelx>
    </Container>
  );
};

export default MainContact;
