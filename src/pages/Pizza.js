import React from "react";

const Pizza = (props) => {
  return (
    <div>
      {props.data.map((pizza) => (
        <div
          className="pizza"
          key={pizza.name}
          style={{ opacity: pizza.soldOut ? 0.5 : 1 }}
        >
          <img
            src={pizza.photoName}
            alt={pizza.name}
            style={{ width: "200px" }}
          />
          <div>
            <h3 style={{ fontSize: "1.7em", marginBottom: "1.4em" }}>
              {pizza.name} {pizza.soldOut && "(Sold Out)"}
            </h3>
            <p style={{ fontSize: "1.4em", marginBottom: "0.5em" }}>
              {pizza.ingredients}
            </p>
            <p style={{ fontSize: "1.4em", marginBottom: "1em" }}>
              Price: ${pizza.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
