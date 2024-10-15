import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ num }) => {
  return (
    <div className="flex items-center justify-evenly">
      <Link to="/">
        <img
          className="w-36"
          src="https://static.vecteezy.com/ti/vecteur-libre/p1/5695531-temps-logo-montre-logo-vecteur-vectoriel.jpg"
          alt=""
        />
      </Link>
      <Link to="/cart">Mon Panier</Link>
      <Link to="/auth/signup">S'inscrire </Link>
      <Link to="/auth/login">Se connecter </Link>
    </div>
  );
};

export default Navbar;
