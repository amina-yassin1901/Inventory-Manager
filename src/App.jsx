import "./App.css";
import { useState, useEffect } from "react";
import AddItemForm from "./components/addItemForm";
import Header from "./components/header";
import Controls from "./components/controls";
import InventoryList from "./components/inventoryList";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Laptop",
            category: "Electronics",
            quantity: 10,
            price: 1200,
          },
          {
            id: 2,
            name: "Chair",
            category: "Furniture",
            quantity: 3,
            price: 50,
          },
        ];
  });
  const [showLowOnly, setShowLowOnly] = useState(false);
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const upDateQuantity = (id, amount) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };
  const filteredItems = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (showLowOnly ? item.quantity < 5 : true));

  useEffect(() => {
    const savedItems = localStorage.getItem("items");

    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="appContainer">
      <Header items={items} />

      <Controls
        search={search}
        setSearch={setSearch}
        showLowOnly={showLowOnly}
        setShowLowOnly={setShowLowOnly}
      />

      <AddItemForm onAddItem={addItem} />

      <InventoryList
        itemsList={filteredItems}
        onDeleteItem={deleteItem}
        onUpdateQuantity={upDateQuantity}
      />
    </div>
  );
}

export default App;
