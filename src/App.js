import React, { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState(["john", "sallyy", "tammy", "jacob"]);
  const [filterString, setFilterString] = useState("");

  function handleChange(filter) {
    setFilterString(filter);
  }

  let namesToDisplay = list
    .filter((person) => {
      return person.includes(filterString);
    })
    .map((person, index) => {
      return <div key={index}>{person}</div>;
    });

  return (
    <div className="App">
      <input onChange={(e) => handleChange(e.target.value)}></input>
      {namesToDisplay}
    </div>
  );
}

export default App;
