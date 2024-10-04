import React, { useState } from "react";
import styles from "@/styles/FilterSidebar.module.css";

const FilterSidebar = ({ onFilterChange }) => {
  const [customizable, setCustomizable] = useState(false);
  const [idealFor, setIdealFor] = useState([]);
  const [occasion, setOccasion] = useState("");
  const [fabric, setFabric] = useState("");

  const handleIdealForChange = (value) => {
    setIdealFor((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
  };

  const handleFilterChange = () => {
    onFilterChange({
      customizable,
      idealFor,
      occasion,
      fabric,
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
      <div className={styles.filterGroup}>
        <h4>Ideal For</h4>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="men"
            name="idealFor"
            checked={idealFor.includes("Men")}
            onChange={() => {
              handleIdealForChange("Men");
              handleFilterChange();
            }}
          />
          <label className={styles.label} htmlFor="men">
            {" "}
            Men
          </label>
          <br />
          <input
            type="checkbox"
            id="women"
            name="idealFor"
            checked={idealFor.includes("Women")}
            onChange={() => {
              handleIdealForChange("Women");
              handleFilterChange();
            }}
          />
          <label className={styles.label} htmlFor="women">
            {" "}
            Women
          </label>
          <br />
          <input
            type="checkbox"
            id="kids"
            name="idealFor"
            checked={idealFor.includes("Kids")}
            onChange={() => {
              handleIdealForChange("Kids");
              handleFilterChange();
            }}
          />
          <label className={styles.label} htmlFor="kids">
            {" "}
            Baby & Kids
          </label>
        </div>
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

      {/* Add more filter sections as needed */}
    </aside>
  );
};

export default FilterSidebar;
