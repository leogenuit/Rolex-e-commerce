import React, { useState, useEffect } from "react";
import { supabase } from "./../supabase";
const Home = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetchWatches();
  }, []);

  async function fetchWatches() {
    const { data } = await supabase.from("watches").select("*");
    // .range(0, 7);
    setWatches(data);
    console.log("ici", data);
  }
  async function nextPages() {
    const { data } = await supabase.from("watches").select("*");
    // setWatches(data);
    // console.log(data);
  }

  return (
    <div>
      <h1 className="flex justify-center items-center h-20">
        Toutes nos Montres
      </h1>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {watches.length > 0 ? (
          watches.map((item) => (
            <div key={item.id} className="lg:w-1/5 sm:1/3 p-4 border border-2">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="font-bold">{item.Brand}</p>
                  <p>{item.Model}</p>
                </div>
                <img src={item.picture} alt="watch picture" className="w-60" />
              </div>
            </div>
          ))
        ) : (
          <p>Chargement des montres...</p>
        )}
      </div>
      <button onClick={nextPages()} className="text-center">
        next
      </button>
    </div>
  );
};

export default Home;
