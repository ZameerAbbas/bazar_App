import Blog from "../Bolg/Blog";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

import Product from "../Products/Product";
import Whatapp from "../Whatapp/Whatapp";

import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";



const HomePage = () => {
  
  return (
    <>
      <Whatapp />
      <Hero />
      <Product />
      <FeaturedProducts />
      <Contact />
    </>
  );
};

export default HomePage;
