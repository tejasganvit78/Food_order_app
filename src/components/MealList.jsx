import React from "react";
import "../App.css";

const MealList = ({ Meal, addToCart }) => {
  return (
    <div className="flex">
      {Meal.map((MealItem, MealIndex) => {

        return (
          <div >
            <div className="product-item">
              <img className="imag" src={MealItem.url} />
              
              <h2>
                {MealItem.name} | {MealItem.category}
              </h2>
              <p>{MealItem.seller}</p>
              <h3>Rs. {MealItem.price} /-</h3>

              <button className="btn" onClick={()=> addToCart(MealItem)}>Add</button>

            </div>
          </div>
        );
      })}
      

    </div>
  );
};

export default MealList;
