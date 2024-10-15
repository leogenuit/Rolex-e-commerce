import React, { useState, useEffect } from "react";
import { supabase } from "./../supabase";
import Pagination from "../components/Pagination"; // Importe ton composant Pagination
import { Link } from "react-router-dom";

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [startPage, setStartPage] = useState(0);
  const [itemsPerPage] = useState(8); // Nombre d'éléments par page

  // Gérer le changement de page
  const handleNext = () => {
    setStartPage((prev) => prev + itemsPerPage);
  };

  const handlePrevious = () => {
    setStartPage((prev) => Math.max(0, prev - itemsPerPage));
  };

  // Effect pour récupérer les montres selon la pagination
  useEffect(() => {
    const fetchWatches = async () => {
      const { data } = await supabase
        .from("watches")
        .select("*")
        .range(startPage, startPage + itemsPerPage - 1);
      setWatches(data);
    };

    fetchWatches();
    console.log(watches);
  }, [startPage]);

  const sortedByAsc = () => {};
  return (
    <div>
      <h1 className="flex justify-center items-center h-20">
        Toutes nos Montres
      </h1>

      <div className="container mx-auto flex flex-wrap justify-center gap-4 mb-20">
        {watches.length > 0 ? (
          watches.map((item) => (
            <div key={item.id} className="lg:w-1/5 sm:1/3 p-4 border border-2">
              <Link to={`/watch/${item.id}`}>
                <div className="w-60 h-60 overflow-hidden">
                  <div className="flex justify-between">
                    <p className="font-bold">{item.brand}</p>
                    <p>{item.model}</p>
                    <p>{item.price}</p>
                  </div>
                  <img
                    src={item.picture}
                    alt="watch"
                    className="flex mx-auto w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Chargement des montres...</p>
        )}
      </div>

      {/* Composant Pagination */}
      <Pagination
        currentPage={startPage / itemsPerPage}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Home;
