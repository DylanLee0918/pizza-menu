import React from "react";
import Pizza from "./Pizza";

const Menu = (props) => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Check out our delicious pizzas!</p>
      <Pizza data={props.data} />
    </main>
  );
};

export default Menu;
