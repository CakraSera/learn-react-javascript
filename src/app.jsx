import React, { useState } from "react";

let nextId = 300; // To generate unique IDs for new items

// This component represents one item in our list.
// CRUCIALLY, it has its own internal state for the input field.
const TodoItem = ({ key, text }) => {
  console.log("🚀 ~ TodoItem ~ key:", key);
  const [note, setNote] = useState("");

  return (
    <div
      style={{
        padding: "10px",
        margin: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <span>{key}</span>
      <span>{text}</span>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a personal note..."
        style={{ marginLeft: "20px" }}
      />
    </div>
  );
};

// Main App Component
export function App() {
  const initialTodos = [
    { id: 101, text: "Buy groceries" },
    { id: 102, text: "Walk the dog" },
  ];

  const [todosForIndexKey, setTodosForIndexKey] = useState(initialTodos);
  const [todosForIdKey, setTodosForIdKey] = useState(initialTodos);

  const handleAdd_IndexKey = () => {
    const newItemText = `New Item #${nextId}`;
    const newItem = { id: nextId++, text: newItemText };
    // Add the new item to the BEGINNING of the array
    setTodosForIndexKey([newItem, ...todosForIndexKey]);
  };

  const handleAdd_IdKey = () => {
    const newItemText = `New Item #${nextId}`;
    const newItem = { id: nextId++, text: newItemText };
    // Add the new item to the BEGINNING of the array
    setTodosForIdKey([newItem, ...todosForIdKey]);
  };

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "sans-serif",
        gap: "40px",
        padding: "20px",
      }}>
      {/* ⚠️ DANGEROUS: Using index as key */}
      <div style={{ flex: 1 }}>
        <h2>⚠️ Dangerous: Using `index` as key</h2>
        <button onClick={handleAdd_IndexKey}>Add New Item to Start</button>
        <div style={{ marginTop: "10px" }}>
          {todosForIndexKey.map((todo, index) => (
            <TodoItem
              key={index} // Using index as the key
              text={todo.text}
            />
          ))}
        </div>
      </div>

      {/* ✅ CORRECT: Using stable ID as key */}
      <div style={{ flex: 1 }}>
        <h2>✅ Correct: Using stable `id` as key</h2>
        <button onClick={handleAdd_IdKey}>Add New Item to Start</button>
        <div style={{ marginTop: "10px" }}>
          {todosForIdKey.map((todo) => (
            <TodoItem
              key={todo.id} // Using the stable ID as the key
              text={todo.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
