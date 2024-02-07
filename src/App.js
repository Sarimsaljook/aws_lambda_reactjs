import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [userID, setUserID] = useState(""); 

  const fetchDataWithId = () => { 

        axios.post('https://n9cj0xxi0f.execute-api.us-east-1.amazonaws.com/primary/', {
          "routeKey": "POST /",
          "pathParameters": {
            "id": userID
          }
      }).then((res) => {

        // Assuming res.data holds the string
        const resData = res.data;

        // Find the start index of the "body" field
        const bodyStartIndex = resData.indexOf('{"id":"') + '{"id":"'.length;

        // Find the end index of the "body" field
        const bodyEndIndex = resData.indexOf('"}"', bodyStartIndex);

        // Extract the "body" field substring
        const bodySubstring = resData.substring(bodyStartIndex, bodyEndIndex);

        if (bodySubstring === userID) { 
          alert("User Found ✅!");
          // Display the extracted body substring
          console.log('User' + bodySubstring + ' found!');

          setUserID("");
      } else {
         alert("No User Found With The ID "+userID+" ❌");
         console.log('User' + bodySubstring + 'not found!');

         setUserID("");
         }
      
      }).catch((err) => console.log(err));

  };

  return (
    <div className="App">
      <h1>Validate Your ID:</h1>
      <input value={userID} onChange={(e) => setUserID(e.target.value)} />
      <button style={{ marginLeft: 10 }} onClick={fetchDataWithId}>Validate</button>
    </div>
  );
}

export default App;
