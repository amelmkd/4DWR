import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../produit/Product";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${id}.json`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du produit :",
          error
        );
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Chargement des détails du produit</div>;
  }

  return (
    <div>
      <h2>Détails du produit</h2>
      <div>
        <h3>Nom du produit: {product.product_name}</h3>
        <p>Marque : {product.brands}</p>
        <p>Catégorie : {product.categories}</p>
        <p>Ingrédients : {product.ingredients_text}</p>
        <img src={product.image_url} alt={product.product_name} />
      </div>
    </div>
  );
};

export default ProductDetails;
