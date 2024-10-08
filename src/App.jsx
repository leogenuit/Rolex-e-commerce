import React, { useState, useEffect } from "react";
import { supabase } from "./createClient";

const App = () => {
  const [watchs, setWatchs] = useState([]);

  useEffect(() => {
    fetchWatchs();
  }, []);

  async function fetchWatchs() {
    const { data } = await supabase.from("watchs").select("*");
    setWatchs(data);
    console.log(data);
  }
  return (
    <div>
      {watchs.map((item) => {
        return (
          <div>
            <p>{item.brand}</p>
            <p>{item.price}</p>
            <img src={item.picture} alt="watch picture" className="w-60" />
          </div>
        );
      })}
    </div>
  );
};

export default App;
