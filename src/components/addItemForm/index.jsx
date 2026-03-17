import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
function AddItemForm({ onAddItem }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      quantity: 0,
      price: 0,
    },
  });
  const onSubmit = (data) => {
    onAddItem({
      id: Date.now(),
      ...data,
      quantity: Number(data.quantity),
      price: Number(data.price),
    });
    reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        {" "}
        Name:
        <input
          className={styles.item}
          type="text"
          {...register("name", { required: true })}
        />
      </label>
      {errors.name && <span>This Field id required</span>}
      <label className={styles.label}>
        {" "}
        Category
        <select
          className={styles.item}
          {...register("category", { required: true })}
        >
          <option value="">Select a category</option>
          <option value="Электроника">Electronics</option>
          <option value="Мебель">Furniture</option>
          <option value="Одежда">Clothing</option>
        </select>
      </label>
      {errors.category && <span>This Field id required</span>}
      <label className={styles.label}>
        {" "}
        Quantity:
        <input
          className={styles.item}
          type="number"
          {...register("quantity", { required: true, min: 1 })}
        />
      </label>
      {errors.quantity && <span>This Field id required</span>}
      <label className={styles.label}>
        {" "}
        Price:
        <input
          className={styles.item}
          type="number"
          {...register("price", { required: true, min: 1 })}
        />
      </label>
      {errors.price && <span>This Field id required</span>}
      <button className={styles.btn} type="submit">
        Add Item
      </button>
    </form>
  );
}
export default AddItemForm;
