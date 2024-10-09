import React, { useState, useEffect } from "react";
import { supabase } from "./../supabase";
import { Link } from "react-router-dom";
const Home = () => {
  const [watches, setWatches] = useState([]);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(7);

  useEffect(() => {
    fetchWatches();
  }, [startPage, endPage]);

  const fetchWatches = async () => {
    const { data } = await supabase
      .from("watches")
      .select("*")
      .range(startPage, endPage);
    setWatches(data);
  };

  const nextPages = () => {
    setStartPage(startPage + 8);
    setEndPage(endPage + 8);
  };

  const previousPages = () => {
    setStartPage(startPage - 8);
    setEndPage(endPage - 8);
  };

  return (
    <div className="">
      <h1 className="flex justify-center items-center h-40">
        Toutes nos Montres
      </h1>
      <div className="container mx-auto flex flex-wrap justify-center gap-4 mb-20">
        {watches.length > 0 ? (
          watches.map((item) => (
            <div key={item.id} className="lg:w-1/5 sm:1/3 p-4 border border-2">
              <Link to={`/watch/${item.id}`}>
                <div className="w-60 h-60 overflow^-hidden">
                  <div className="flex justify-between">
                    <p className="font-bold">{item.brand}</p>
                    <p>{item.model}</p>
                  </div>
                  <img
                    src={item.picture}
                    alt="watch picture"
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
      <div className="flex justify-center gap-6">
        {startPage > 0 ? (
          <button onClick={previousPages} className="text-center">
            ← Précédent
          </button>
        ) : (
          ""
        )}
        {endPage < 20 ? (
          <button onClick={nextPages} className="text-center">
            Suivant →
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
