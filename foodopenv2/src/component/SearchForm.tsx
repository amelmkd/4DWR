import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

interface SearchFormProps {
  onSearchResult: (results: any[]) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearchResult }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") {
      console.log("Veuillez saisir un terme de recherche valide.");
      return;
    }
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
      );
      if (response.data.products.length === 0) {
        setError(true);
      } else {
        onSearchResult(response.data.products);
        setError(false);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Recherchez un produit..."
        className="search-input"
      />
      <button type="submit" className="search-button">Rechercher</button>
      {error && <div className="error-message">Aucun résultat trouvé.</div>}{" "}
    </form>
  );
};

export default SearchForm;
