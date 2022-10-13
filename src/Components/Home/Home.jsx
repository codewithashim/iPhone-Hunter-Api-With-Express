import React from "react";
import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";
import "./Home.css";

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h2>Total Phone {phones.length}</h2>
      <div className="phoneContainer">
        {phones.map((phone) => {
          return <Phone key={phone.id} phone={phone}></Phone>;
        })}
      </div>
    </div>
  );
};

export default Home;
