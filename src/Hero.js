import React from "react";
import Server from "./Server";

const Hero = ({ handleLogout }) => {
  return (
    <div>
      <section className="hero">
        <nav>
          <h2>Серверын бүртгэл</h2>
          <button onClick={handleLogout}>Гарах</button>
        </nav>
        <Server />
      </section>
    </div>
  );
};

export default Hero;
