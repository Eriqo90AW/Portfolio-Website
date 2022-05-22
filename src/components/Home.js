import React from "react";
import "./bootstrap.min.css";
import { Image } from "react-bootstrap";
import foto from "./images/foto_biodata.jpg";

export const Home = () => {
  return (
    <div className="Home">
      <section className="bagian-atas text-center">
        <h1>Hello World!</h1>
        <Image
          src={foto}
          alt="Eriqo Arief"
          className="img-fluid rounded-circle py-3"
          width="300"
        />
        <h3>Eriqo Arief Wicaksono</h3>
        <h5>Computer Engineering 2021</h5>
        <svg
          id="about"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ecf4f9"
            d="M0,160L180,192L360,192L540,128L720,64L900,192L1080,160L1260,192L1440,32L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
