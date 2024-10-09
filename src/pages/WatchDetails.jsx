import React, { useEffect, useState } from "react";
import { supabase } from "./../supabase";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
const WatchDetails = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState(null);

  useEffect(() => {
    fetchWatchDetails();
  }, [id]);

  const fetchWatchDetails = async () => {
    const { data } = await supabase
      .from("watches")
      .select("*")
      .eq("id", id)
      .single();
    setWatch(data);
  };
  if (!watch) {
    return <p>Chargement des détails de la montre...</p>;
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <h3 className="text-4xl font-bold">
          {watch.brand} {watch.model}
        </h3>
        <img
          src={watch.picture}
          alt="Montre"
          className="w-60 h-60 object-contain"
        />
        <p>Prix: {watch.price}€</p>
        <p>Complication(s): {watch.complications}</p>
        <p>Resistance à l'eau: {watch.waterResistance} mètres </p>
        <p>Mouvement: {watch.movementType} </p>
        <p>Diametre du boîtier: {watch.caseDiameter}mm</p>
        <p>Épaisseur du boîtier: {watch.caseThickness}mm</p>
        <p>Couleur du cadran: {watch.dialColor}</p>
        <p>Réserve de marche: {watch.powerReserve} heures</p>
      </div>
      <Button color="bg-blue-500 text-white p-2" text="Ajouter au panier" />
    </div>
  );
};

export default WatchDetails;
