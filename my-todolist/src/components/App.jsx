import React, { useState } from "react";

function App() {
  const [item, setitem] = useState(" ");
  const [list, setlist] = useState([]);

  function update(e) {
    const { value } = e.target;
    setitem(value);
  }
  function Submit() {
    setlist((prev) => [...prev, item]);
    setitem(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={update} type="text" />
        <button onClick={Submit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
