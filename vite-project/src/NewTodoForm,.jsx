import { useState } from "react";

export function NewTodoform(props) {
  const [newItem, setNewItem] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handlerSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
