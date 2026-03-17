import styles from "./styles.module.css";
function Header({ items }) {
  const totalItems = items.length;

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <h1>Warehouse Dashboard</h1>

      <p>Total Products: {totalItems}</p>
      <p>Total Quantity: {totalQuantity}</p>
    </header>
  );
}

export default Header;
