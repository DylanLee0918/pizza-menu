import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) {
    alert("We are currently open!");
  } else {
    alert("Sorry we're closed!");
  }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open!
    </footer>
  );
};

export default Footer;
