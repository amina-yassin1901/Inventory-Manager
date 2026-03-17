import styles from "./styles.module.css";
import SearchBar from "../seatchBar";
function Controls({ search, setSearch, showLowOnly, setShowLowOnly }) {
  return (
    <div className={styles.controlsContainer}>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={() => setShowLowOnly((prev) => !prev)}>
        {showLowOnly ? "Show All Items" : "Show Low Stock Only"}
      </button>
    </div>
  );
}
export default Controls;
