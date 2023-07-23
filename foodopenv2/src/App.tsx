import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchForm from "../src/component/SearchForm";
import SearchResults from "../src/component/SearchResults";
import { Product } from "./produit/Product";
import ProductDetails from "./component/ProductDetails";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchResult = (results: Product[]) => {
    setSearchResults(results);
    setShowResults(true);
  };

  return (
    <Router>
      <div className="container">
      <Navbar />
        <h1 className="title">One Food Volume 2</h1>
        
        <SearchForm onSearchResult={handleSearchResult} />
        <Routes>
          <Route
            path="/"
            element={
              showResults ? (
                <SearchResults results={searchResults} />
              ) : (
                <div>Bienvenue</div>
              )
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
