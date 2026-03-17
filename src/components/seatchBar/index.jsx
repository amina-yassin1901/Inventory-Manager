import styles from "./styles.module.css";
function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
export default SearchBar;
