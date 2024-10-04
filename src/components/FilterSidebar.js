import React, { useState } from "react";
import styles from "@/styles/FilterSidebar.module.css";

const FilterSidebar = ({ onFilterChange }) => {
  const [customizable, setCustomizable] = useState(false);
  const [idealFor, setIdealFor] = useState("");
  const [occasion, setOccasion] = useState("");
  const [fabric, setFabric] = useState("");
  const [suitableFor, setSuitableFor] = useState("");

  const handleIdealForChange = (value) => {
    setIdealFor(value);
    handleFilterChange();
  };

  const handleFilterChange = () => {
    onFilterChange({
      customizable,
      idealFor,
      occasion,
      fabric,
      suitableFor,
    });
  };

  return (
    <aside className={styles.sidebar}>
      <h3>Filter Products</h3>
      <div className={styles.filterGroup}>
        <h4>Customizable</h4>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="customizable"
            name="customizable"
            checked={customizable}
            onChange={() => {
              setCustomizable(!customizable);
              handleFilterChange();
            }}
          />
          <label className={styles.label} htmlFor="customizable">
            {" "}
            Customizable
          </label>
        </div>
      </div>

      {/* New Filter for Ideal For */}
      <div className={styles.filterGroup}>
        <h4>Ideal For</h4>
        <select
          value={idealFor}
          onChange={(e) => handleIdealForChange(e.target.value)}
        >
          <option value="">Select Ideal For</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Baby & Kids">Baby & Kids</option>
        </select>
      </div>

      {/* New Filter for Occasion */}
      <div className={styles.filterGroup}>
        <h4>Occasion</h4>
        <select
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select Occasion</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Party">Party</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      {/* New Filter for Fabric */}
      <div className={styles.filterGroup}>
        <h4>Fabric</h4>
        <select
          value={fabric}
          onChange={(e) => {
            setFabric(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select Fabric</option>
          <option value="Cotton">Cotton</option>
          <option value="Polyester">Polyester</option>
          <option value="Wool">Wool</option>
          <option value="Silk">Silk</option>
        </select>
      </div>

      {/* New Filter for Suitable For */}
      <div className={styles.filterGroup}>
        <h4>Suitable For</h4>
        <select
          value={suitableFor}
          onChange={(e) => {
            setSuitableFor(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select Suitable For</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Babies">Babies</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;
