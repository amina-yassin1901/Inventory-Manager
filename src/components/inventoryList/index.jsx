import styles from "./styles.module.css";
import InventoryItem from "../inventoryItem";
function InventoryList({ itemsList, onDeleteItem, onUpdateQuantity }) {
  return (
    <div>
      {itemsList.length === 0 ? (
        <p>Items List is empty</p>
      ) : (
        <ul>
          {itemsList.map((item) => {
            return (
              <InventoryItem
                key={item.id}
                item={item}
                onDeleteItem={onDeleteItem}
                onUpdateQuantity={onUpdateQuantity}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default InventoryList;
