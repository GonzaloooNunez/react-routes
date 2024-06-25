import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <p>Aquí podemos encontrar los diferentes curriculums y proyectos.</p>
      <ul>
        <li>
          <Link to="/projects">Ver Proyectos</Link>
        </li>
        <li>
          <Link to="/resume">Ver Currículum</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
