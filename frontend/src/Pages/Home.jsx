import React, { useContext } from "react";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
    </>
  );
};

export default Home;