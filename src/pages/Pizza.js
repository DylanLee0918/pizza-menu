import React from "react";

const Pizza = (props) => {
  return (
    <div>
      {props.data.map((pizza) => (
        <div key={pizza.name} style={{ opacity: pizza.soldOut ? 0.5 : 1 }}>
          <h3>
            {pizza.name} {pizza.soldOut && "(Sold Out)"}
          </h3>
          <p>{pizza.ingredients}</p>
          <p>Price: ${pizza.price}</p>
          <img
            src={pizza.photoName}
            alt={pizza.name}
            style={{ width: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Pizza;
