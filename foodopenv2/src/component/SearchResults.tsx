import React from "react";
import { Product } from "../produit/Product";
import "./SearchResults.css";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  results: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>Marque</th>
          <th>Identifiant</th>
        </tr>
      </thead>
      <tbody>
        {results.map((product) => (
          <tr key={product.id}>
            <td>
              <Link to={`/product/${product.id}`}>
                <img src={product.image_url} alt={product.product_name} />
              </Link>
            </td>
            <td>{product.product_name}</td>
            <td>{product.brands}</td>
            <td>{product.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
