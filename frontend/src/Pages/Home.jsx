import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
    </>
  );
};

export default Home;