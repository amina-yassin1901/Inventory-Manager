import styles from "./styles.module.css";
function Header({ items }) {
  const totalItems = items.length;

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Warehouse Dashboard</h1>

      <p className={styles.text}>Total Products: {totalItems}</p>
      <p className={styles.text}>Total Quantity: {totalQuantity}</p>
    </header>
  );
}

export default Header;
