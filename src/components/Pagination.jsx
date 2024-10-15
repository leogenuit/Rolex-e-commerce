import React from "react";

const Pagination = ({ currentPage, onNext, onPrevious }) => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      {/* Bouton Précédent, désactivé si on est sur la première page */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        ← Précédent
      </button>

      {/* Bouton Suivant */}
      <button
        onClick={onNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Suivant →
      </button>
    </div>
  );
};

export default Pagination;
