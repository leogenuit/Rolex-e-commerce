import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setUser(session?.user || null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Erreur lors de la connexion : ", error.message);
      setErrorMessage(error.message);
    } else {
      console.log("Connexion réussie !", data);
      setSuccessMessage("Connexion réussie !");
      checkUserSession();
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Se connecter</h2>

      {user ? (
        <p className="text-green-500">
          Vous êtes connecté en tant que {user.email}
        </p>
      ) : (
        <p className="text-red-500">Aucun utilisateur connecté</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 border mb-2 w-64"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="p-2 border mb-2 w-64"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <button type="submit" className="p-2 bg-blue-500 text-white w-64 mt-4">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Login;
