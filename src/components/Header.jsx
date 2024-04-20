import React from "react";
import "../App.css";

const Header = (props) => {
  return (
    <div className="flex shopping-card header">
    
      <div onClick={() => props.handleShow(false)}>
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"
          alt="Cart"
          height={60}
          width={70}
        />
      </div>

      <div onClick={() => props.handleShow(false)}>    
        <h1>Food Order App</h1>
      </div>
      <div onClick={() => props.handleShow(true)}>
        <sup className="count">{props.count}</sup>
        <img
          src="https://icons.getbootstrap.com/assets/icons/cart.svg"
          alt="Cart"
          height={60}
          width={70}
        />
      </div>
    </div>
  );
};

export default Header;
