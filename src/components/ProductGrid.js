import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/ProductGrid.module.css";

const ProductGrid = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // Map the products to include occasion and fabric for filtering
      const enhancedData = data.map((product) => ({
        ...product,
        occasion: "Casual", // Sample data for filtering, update as needed
        fabric: "Cotton", // Sample data for filtering, update as needed
      }));
      setProducts(enhancedData);
    };
    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    // Apply filters here based on the selected options
    if (filters.customizable && !product.customizable) return false;
    if (
      filters.idealFor.length > 0 &&
      !filters.idealFor.includes(product.category)
    )
      return false;
    if (filters.occasion && product.occasion !== filters.occasion) return false;
    if (filters.fabric && product.fabric !== filters.fabric) return false;
    return true; // Include the product if no filters are applied
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "highToLow") {
      return b.price - a.price;
    }
    return 0; // default sorting (e.g., recommended)
  });

  return (
    <section className={styles.gridContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.centeredTitle}>Discover Our Products</h2>
        <p className={styles.description}>
          Explore a wide range of fashionable clothing and accessories that suit
          every occasion and style. Find the perfect fit for you and your loved
          ones.
        </p>
      </div>
      <div className={styles.sortOptions}>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="recommended">Recommended</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className={styles.grid}>
        {sortedProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <Image
              src={product.image}
              alt={product.title} // Use product.title for better accessibility
              width={200}
              height={200}
            />
            <h3>{product.title}</h3> // Display product title instead of name
            <p>Price: ${product.price}</p> // Display product price
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
