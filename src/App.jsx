import React from "react";
import Header from "./components/Header";
import "./App.css";
import MealList from "./components/MealList";
import { useState } from "react";
import CartList from "./components/CartList";

const App = () => {
  const [Meal, setMeal] = useState([
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wf3pzeliomy1bjfyehgc",
      name: "Samosa",
      category: "Samosa",
      seller: "Krishna Nasta Center",
      price: 20,
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zxjuokhvejeediqr5e4f",
      name: "Gujarati Thali",
      category: "Thali",
      seller: "Patel Kitchen",
      price: 300,
    },
    {
      url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdbsqa9oqv1eb2pzwldq",
      name: "Thali",
      category: "Thali",
      seller: "Ahoka hotel",
      price: 350,
    },
    {
      name: "Pizza",
      url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      category: ["Pizza ", "vilage-pizza"],
      seller: "Shree Krishna Pizza Store",
      price: 200,
    },
    {
      name: "Burger",
      url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a046d76c79482f2551c1bca6dbd44cd",
      category: ["Burger ", " Fast Food"],
      seller: "Patel Kitchen",
      price: 100,
    },
    {
      name: "Gobi Manchurian",
      url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z2kiqvp5lylcgmiwhkfa",
      category: ["Manchurian ", "Chinese"],
      seller: "Teju Chinese center",
      price: 100,
    },
  ]);

  const [cart,setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data)=>{
    setCart([...cart,{...data, quantity:1}])
  }

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); 
    setCart(updatedCart);
  };

  const handleShow = (value)=>{
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}/>
      {
        showCart ?  <CartList cart={cart} onDeleteItem={handleDeleteItem}/> :
        <MealList Meal={Meal} addToCart={addToCart}/>
      }
    </div>
  );
};

export default App;
