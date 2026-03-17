import styles from "./styles.module.css";
function InventoryItem({ item, onDeleteItem, onUpdateQuantity }) {
  const isLow = item.quantity < 5;
  return (
    <li className={isLow ? styles.low : ""}>
      <h2>Name: {item.name}</h2>
      <p>Category: {item.category}</p>

      <div>
        <p>Quantity: {item.quantity}</p>
        <div>
          <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
          <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
        </div>
        {isLow && <span> ⚠️ Low Stock!</span>}
      </div>
      <p>Price: {item.price} €</p>
      <button onClick={() => onDeleteItem(item.id)}>Delete Item</button>
    </li>
  );
}
export default InventoryItem;
