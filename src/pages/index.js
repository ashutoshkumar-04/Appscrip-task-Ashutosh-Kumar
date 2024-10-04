import Head from "next/head";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: "",
    occasion: "",
    fabric: "",
    suitableFor: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Head>
        <title>Discover Our Products - Your Company Name</title>
        <meta
          name="description"
          content="Explore a wide range of customizable products on our platform. Sign in to see pricing and discover our latest offers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Discover Our Products - Your Company Name"
        />
        <meta
          property="og:description"
          content="Explore a wide range of customizable products on our platform. Sign in to see pricing and discover our latest offers."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.mainContent}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <ProductGrid filters={filters} />
      </main>
      <Footer />
    </div>
  );
}
