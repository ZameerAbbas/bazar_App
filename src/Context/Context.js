import { createContext, useState, useEffect, } from "react";
import App from "../App";
import { db } from "../Component/firebase";
import { onValue, ref } from "firebase/database";

// Context to store state and pass it globally
export const Createcart = createContext();

// This component wraps its children with the context provider, making cart-related data and functions available to all nested component

const Statestore = ({ children }) => {
  //// . It checks the browser's localStorage for any existing cart items and parses
  //them into an array. If no items are found, an empty array is used as the default value.




  // Trending products in local storage

  const [trendingCartItems, setTrendingCartItems] = useState(
    localStorage.getItem("trendingCartItems")
      ? JSON.parse(localStorage.getItem("trendingCartItems"))
      : []
  );
  // chickenmeat products in local storage


  // freshfruits products in local storage

  const [freshfruitsCartItems, setfreshfruitsCartItems] = useState(
    localStorage.getItem("freshfruitsCartItems")
      ? JSON.parse(localStorage.getItem("freshfruitsCartItems"))
      : []
  );
  const [choppedpeeledCartItems, setchoppedpeeledCartItems] = useState(
    localStorage.getItem("choppedpeeledCartItems")
      ? JSON.parse(localStorage.getItem("choppedpeeledCartItems"))
      : []
  );
  // freshvegetables products in local storage

  const [freshvegetablesCartItems, setfreshvegetablesCartItems] = useState(
    localStorage.getItem("freshvegetablesCartItems")
      ? JSON.parse(localStorage.getItem("freshvegetablesCartItems"))
      : []
  );
  // herbs products in local storage

  const [herbsCartItems, setHerbsCartItems] = useState(
    localStorage.getItem("herbsCartItems")
      ? JSON.parse(localStorage.getItem("herbsCartItems"))
      : []
  );
  // datesdryfruit products in local storage

  const [datesdryfruitCartItems, setdatesdryfruitCartItems] = useState(
    localStorage.getItem("datesdryfruitCartItems")
      ? JSON.parse(localStorage.getItem("datesdryfruitCartItems"))
      : []
  );

  const [dairyproductsCartItems, setdairyproductsCartItems] = useState(
    localStorage.getItem("dairyproductsCartItems")
      ? JSON.parse(localStorage.getItem("dairyproductsCartItems"))
      : []
  );

  // data calling from firebase





  const [trending, setTrending] = useState([]);
  
  const [freshfruits, setFreshfruits] = useState([]);
  const [freshvegetables, setFreshvegetables] = useState([]);
  const [herbs, setHerbs] = useState([]);
  const [datesdryfruit, setDatesdryfruit] = useState([]);
  const [choppedpeeled, setChoppedpeeled] = useState([]);
  const [dairyproducts, setDairyproducts] = useState([]);






  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const dbreftrend = ref(db, "trendingProducts");
        const dbrefchoppedpeeled = ref(db, "chopped-&-peeled");
    
        const dbreffreshfruits = ref(db, "fresh-fruits");
        const dbreffreshvegetables = ref(db, "fresh-vegetables");
        const dbrefherbs = ref(db, "herbs");
        const dbrefdatesdryfruit = ref(db, "dates-&-dry-fruit");
        const dbrefdairyproducts = ref(db, "dairy-products");

        // Parallel fetching using Promises for faster data retrieval
        await Promise.all([
         
          onValue(dbreftrend, (snapshot) => {
            let trending = [];
            snapshot.forEach((childSnapshot) => {
              trending.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setTrending(trending);
          }),
          
          onValue(dbrefchoppedpeeled, (snapshot) => {
            let choppedpeeled = [];
            snapshot.forEach((childSnapshot) => {
              choppedpeeled.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });

           
            setChoppedpeeled(choppedpeeled);
          }),
          
          onValue(dbreffreshfruits, (snapshot) => {
            let freshfruits = [];
            snapshot.forEach((childSnapshot) => {
              freshfruits.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setFreshfruits(freshfruits);
          }),
          onValue(dbreffreshvegetables, (snapshot) => {
            let freshvegetables = [];
            snapshot.forEach((childSnapshot) => {
              freshvegetables.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setFreshvegetables(freshvegetables);
          }),
          onValue(dbrefherbs, (snapshot) => {
            let herbs = [];
            snapshot.forEach((childSnapshot) => {
              herbs.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setHerbs(herbs);
          }),
          onValue(dbrefdatesdryfruit, (snapshot) => {
            let datesdryfruit = [];
            snapshot.forEach((childSnapshot) => {
              datesdryfruit.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setDatesdryfruit(datesdryfruit);
          }),
          onValue(dbrefdairyproducts, (snapshot) => {
            let dairyproducts = [];
            snapshot.forEach((childSnapshot) => {
              dairyproducts.push({ key: childSnapshot.key, data: childSnapshot.val() });
            });
            setDairyproducts(dairyproducts);
          }),
        ]);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // This function, addToCart, is responsible for adding items to the cart. It first checks if the item already exists in the
  // cart. If it does, the item's quantity is increased; otherwise, a new item with a quantity of 1 is added




 
  // Trending Product add to cart
  const addToCardTrending = (item) => {
    const isItemInCart = trendingCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart) {
      setTrendingCartItems(
        trendingCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setTrendingCartItems([...trendingCartItems, { ...item, quantity: 1 }]);
    }
    localStorage.setItem("trendingCartItems", JSON.stringify(trendingCartItems));
  };
  const addToCardChoppedpeeled = (item) => {
    const isItemInCart = choppedpeeledCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart) {
      setchoppedpeeledCartItems(
        choppedpeeledCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setchoppedpeeledCartItems([...choppedpeeledCartItems, { ...item, quantity: 1 }]);
    }
    localStorage.setItem("choppedpeeledCartItems", JSON.stringify(choppedpeeledCartItems));
  };


  
  const addToCardfreshfruits = (item) => {
    const isItemInCart = freshfruitsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = freshfruitsCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...freshfruitsCartItems, { ...item, quantity: 1 }];
    }

    setfreshfruitsCartItems(updatedCartItems);
    // After updating the state, save it to localStorage
    localStorage.setItem("freshfruitsCartItems", JSON.stringify(updatedCartItems));

    console.log("Updated Cart Items:", updatedCartItems);
  };


  const addToCartFreshVegetables = (item) => {
    const isItemInCart = freshvegetablesCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = freshvegetablesCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...freshvegetablesCartItems, { ...item, quantity: 1 }];
    }

    setfreshvegetablesCartItems(updatedCartItems);
    localStorage.setItem(
      "freshvegetablesCartItems",
      JSON.stringify(updatedCartItems)
    );
  };


  const addToCartherbs = (item) => {
    const isItemInCart = herbsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = herbsCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...herbsCartItems, { ...item, quantity: 1 }];
    }

    setHerbsCartItems(updatedCartItems);
    localStorage.setItem(
      "herbsCartItems",
      JSON.stringify(updatedCartItems)
    );
  };

  const addToCartDatesDryFruit = (item) => {
    const isItemInCart = datesdryfruitCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = datesdryfruitCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...datesdryfruitCartItems, { ...item, quantity: 1 }];
    }

    setdatesdryfruitCartItems(updatedCartItems);
    localStorage.setItem(
      "datesdryfruitCartItems",
      JSON.stringify(updatedCartItems)
    );
  };
  const addToCartdDairyProducts = (item) => {
    const isItemInCart = dairyproductsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    let updatedCartItems;

    if (isItemInCart) {
      updatedCartItems = dairyproductsCartItems.map((cartItem) =>
        cartItem.key === item.key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...dairyproductsCartItems, { ...item, quantity: 1 }];
    }

    setdairyproductsCartItems(updatedCartItems);
    localStorage.setItem(
      "dairyproductsCartItems",
      JSON.stringify(updatedCartItems)
    );
  };




  

  

  

  // Trending producct remove from card

  const removeTrendingFromCart = (item) => {
    const isItemInCart = trendingCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setTrendingCartItems(
        trendingCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setTrendingCartItems(
        trendingCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removechoppedpeeledFromCart = (item) => {
    const isItemInCart = choppedpeeledCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setchoppedpeeledCartItems(
        choppedpeeledCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setchoppedpeeledCartItems(
        choppedpeeledCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

 
  const removefreshfruitsFromCart = (item) => {
    const isItemInCart = freshfruitsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );

    if (isItemInCart.quantity === 1) {
      setfreshfruitsCartItems(
        freshfruitsCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setfreshfruitsCartItems(
        freshfruitsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removefreshvegetablesFromCart = (item) => {
    const isItemInCart = freshvegetablesCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setfreshvegetablesCartItems(
        freshvegetablesCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setfreshvegetablesCartItems(
        freshvegetablesCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeherbsFromCart = (item) => {
    const isItemInCart = herbsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setHerbsCartItems(
        herbsCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setHerbsCartItems(
        herbsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removedatesdryfruitFromCart = (item) => {
    const isItemInCart = datesdryfruitCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setdatesdryfruitCartItems(
        datesdryfruitCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setdatesdryfruitCartItems(
        datesdryfruitCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  const removedairyProductsFromCart = (item) => {
    const isItemInCart = dairyproductsCartItems.find(
      (cartItem) => cartItem.key === item.key
    );
  
    if (isItemInCart.quantity === 1) {
      setdairyproductsCartItems(
        dairyproductsCartItems.filter((cartItem) => cartItem.key !== item.key)
      );
    } else {
      setdairyproductsCartItems(
        dairyproductsCartItems.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  
  
  // Function to get total price for freshfruits


// Function to get total price for freshvegetables
const getCartTotalfreshvegetables = () => {
  return freshvegetablesCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};
const getCartTotalchoppedpeeled = () => {
  return choppedpeeledCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};

// Function to get total price for herbs
const getCartTotalherbs = () => {
  return herbsCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};

// Function to get total price for datesdryfruit
const getCartTotaldatesdryfruit = () => {
  return datesdryfruitCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};
// Function to get total price for datesdryfruit
const getCartTotaldairyproducts = () => {
  return dairyproductsCartItems.reduce(
    (total, item) => total + item.data.price * item.quantity,
    0
  );
};


  // simply empties the cart by setting the cartItems state to an empty array.



  // Trending product clear cart
  const clearCartTrending = () => {
    setTrendingCartItems([]);
    localStorage.removeItem("trendingCartItems");
  };
 
  const clearCartfreshfruits = () => {
    setfreshfruitsCartItems([]);
    localStorage.removeItem("freshfruitsCartItems");
  };
  const clearCartchoppedpeeled = () => {
    setchoppedpeeledCartItems([]);
    localStorage.removeItem("choppedpeeledCartItems");
  };

  const clearCartFreshVegetables = () => {
    setfreshvegetablesCartItems([]);
    localStorage.removeItem("freshvegetablesCartItems");
  };
  const clearCartherbs = () => {
    setHerbsCartItems([]);
    localStorage.removeItem("herbsCartItems");
  };
  const clearCartDatesDryFruits = () => {
    setdatesdryfruitCartItems([]);
    localStorage.removeItem("datesdryfruitCartItems");
  };
  const clearCartDairyProducts = () => {
    setdairyproductsCartItems([]);
    localStorage.removeItem("dairyproductsCartItems");
  };




  // calculates the total cost of the items in the cart by iterating through each item and multiplying its price by its quantity.






  
  const getCartTotalTrending = () => {
    return trendingCartItems.reduce(
      (total, item) => total + item.data.trendingPrice * item.quantity,
      0
    );
  };
 

 
  const getCartTotalfreshfruits = () => {
    return freshfruitsCartItems.reduce(
      (total, item) => total + item.data.price * item.quantity,
      0
    );
  };

  




  // This useEffect runs when the component mounts.
  // It retrieves cart data from localStorage and updates the cartItems state with the parsed data.

  useEffect(() => {
   


    // trending
    const trendingData = localStorage.getItem("trendingCartItems");
    if (trendingData) {
      setTrendingCartItems(JSON.parse(trendingData));
    }
  
    const freshvegetablesData = localStorage.getItem("freshvegetablesCartItems");
if (freshvegetablesData) {
  setfreshvegetablesCartItems(JSON.parse(freshvegetablesData));
}
const herbsData = localStorage.getItem("herbsCartItems");
if (herbsData) {
  setHerbsCartItems(JSON.parse(herbsData));
}
const datesdryfruitData = localStorage.getItem("datesdryfruitCartItems");
if (datesdryfruitData) {
  setdatesdryfruitCartItems(JSON.parse(datesdryfruitData));
}
const choppedpeeledData = localStorage.getItem("choppedpeeledCartItems");
if (choppedpeeledData) {
  setchoppedpeeledCartItems(JSON.parse(choppedpeeledData));
}

  }, []);

  // This useEffect runs whenever the cartItems state changes.
  //  It updates the localStorage with the current state of the cart, converting the array to a JSON string




  return (
    <Createcart.Provider
      value={{
        // gems functions and node data //
        

        loading,

      
        // Trending offer functions and nodes data
        trending,
        trendingCartItems,
        addToCardTrending,
        removeTrendingFromCart,
        clearCartTrending,
        getCartTotalTrending,






        // freshfruits
        freshfruits,
        addToCardfreshfruits,
        freshfruitsCartItems,
        removefreshfruitsFromCart,
        clearCartfreshfruits,
        getCartTotalfreshfruits,


        // freshvegetables
        freshvegetables,
        freshvegetablesCartItems,
        addToCartFreshVegetables,
        clearCartFreshVegetables,
        getCartTotalfreshvegetables,
        removefreshvegetablesFromCart,

        //herbs
        herbs,
        addToCartherbs,
        herbsCartItems,
        clearCartherbs,
        getCartTotalherbs,
        removeherbsFromCart,


        //datesdryfruit
        datesdryfruit,
        datesdryfruitCartItems,
        addToCartDatesDryFruit,
        clearCartDatesDryFruits,
        getCartTotaldatesdryfruit,
        removedatesdryfruitFromCart,
        



        // choppedpeeled
        choppedpeeled,
        choppedpeeledCartItems,
        addToCardChoppedpeeled,
        removechoppedpeeledFromCart,
        getCartTotalchoppedpeeled,
        clearCartchoppedpeeled,
       
       //daryandjams 
        dairyproductsCartItems,
        dairyproducts,
        addToCartdDairyProducts,
        removedairyProductsFromCart,
        getCartTotaldairyproducts,
        clearCartDairyProducts
        
      }}
    >
      {children}
      <App />
    </Createcart.Provider>
  );
};
export default Statestore;
