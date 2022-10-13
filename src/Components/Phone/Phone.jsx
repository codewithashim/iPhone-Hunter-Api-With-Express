import React from "react";
import "./Phone.css";

const Phone = ({ phone }) => {
  const { name, price, description, image } = phone;
  return (
    <>
      <div className="phoneCard">
        <div className="phoneImg">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="phoneDes">
            <p>Phone: {name}</p>
            <p>Price: {price}</p>
            <p>{description.slice(0 ,50)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
