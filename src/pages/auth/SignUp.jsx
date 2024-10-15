import React, { useState } from "react";
import { supabase } from "../../supabase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.length === 0) {
      return setErrorMailMessage("L'email est invalide");
    }
    if (!password) {
      return setErrorPasswordMessage("Le mot de passe est invalide");
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Erreur lors de l'inscription : ", error.message);
    } else {
      console.log("Inscription réussie !", data);
    }
  };

  return (
    <div className="container mx-auto">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default SignUp;
