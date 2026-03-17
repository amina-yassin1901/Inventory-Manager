import styles from "./styles.module.css";
function InventoryItem({ item, onDeleteItem, onUpdateQuantity }) {
  const isLow = item.quantity < 5;
  return (
    <li className={isLow ? styles.low : ""}>
      <h2 className={styles.title}>Name: {item.name}</h2>
      <p className={styles.text}>Category: {item.category}</p>

      <div className={styles.quantityBtn}>
        <p className={styles.text}>Quantity: {item.quantity}</p>
        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            onClick={() => onUpdateQuantity(item.id, -1)}
          >
            -
          </button>
          <button
            className={styles.btn}
            onClick={() => onUpdateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
      </div>
      {isLow && <span> ⚠️ Low Stock!</span>}
      <p className={styles.text}>Price: {item.price} €</p>
      <button className={styles.btn} onClick={() => onDeleteItem(item.id)}>
        Delete Item
      </button>
    </li>
  );
}
export default InventoryItem;
