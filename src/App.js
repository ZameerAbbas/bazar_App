import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import Cart from "./Component/Cart/Cart";


import Navbar from "./Component/Navbar/Navbar";



import FreshFruits from "./Component/RoutePages/fresh-fruits/fresh-fruits"
import ChoppedPeeled from "./Component/RoutePages/chopped-&-peeled/chopped-&-peeled"
import FreshVegetables from "./Component/RoutePages/fresh-vegetables/fresh-vegetables"
import Dairy from "./Component/RoutePages/dairy/dairy"
import Herbs from "./Component/RoutePages/herbs/herbs"
import DatesDryFruit from "./Component/RoutePages/dates-&-dry-fruit/dates-&-dry-fruit"
 
import FruitDetails from "./Component/RoutePages/fresh-fruits/FruitDetails"
import Checkout from "./Component/RoutePages/Checkout"



function App() {


  return (
    <>
      <Router>
      <Navbar  />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route exact path="/fresh-fruits" element={<FreshFruits />} />
          <Route path="/fresh-fruits/:id" element={<FruitDetails />} />
          <Route exact path="/chopped-&-peeled" element={<ChoppedPeeled />} />
          <Route exact path="/fresh-vegetables" element={<FreshVegetables />} />
          <Route exact path="/dairy" element={<Dairy />} />
          <Route exact path="/herbs" element={<Herbs />} />
          <Route exact path="/dates-&-dry-fruit" element={<DatesDryFruit />} />
          <Route exact path="/check-out" element={<Checkout />} />
      
        </Routes>
      </Router>
    </>
  );
}

export default App;
