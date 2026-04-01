import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]); // array state
  const [input, setInput] = useState("");

  // Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(), // unique key
      text: input
    };

    setItems([...items, newItem]); // add item
    setInput(""); // reset input
  };

  // Remove item
  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h2>Item List</h2>

      {/* Input section */}
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      {/* List display */}
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => removeItem(item.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;