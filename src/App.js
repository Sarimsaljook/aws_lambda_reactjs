import './App.css';
import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [userID, setUserID] = useState(""); 

  const fetchDataWithId = async () => {
      await axios.get(`https://n9cj0xxi0f.execute-api.us-east-1.amazonaws.com/test/`).then((response) => {
    console.log(response);
  }).catch((err) => console.error('Error fetching data:', err));
  };

  return (
   <div className="App">
      <h1>Validate Your ID:</h1>
         <input value={userID} onChange={(e) => setUserID(e.target.value)} />
         <button onClick={fetchDataWithId}>Validate</button>
    </div>
  );
}

export default App;
