import React from "react";
import { useState, useEffect } from "react";

function Index() {
    const [nameInput, setNameInput] = useState("");
    const [nameSubmit, setNameSubmit] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
      const fetchHello = async () => {
        if (nameSubmit) {
          try {
            const response = await fetch(`https://tp-docker-server-app-fullstack-1-0.onrender.com/hello/${nameSubmit}`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result.message as string);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };

      fetchHello();
    }, [nameSubmit]);

      const handleSubmit = (event) => {
        event.preventDefault();
        setNameSubmit(nameInput);
      };

    return (
        <div>
            <h1>This is the home page</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nameInput">Please enter your name:</label><br/>
              <input type="text" id="nameInput" name="name" value={nameInput} onChange={(event) => setNameInput(event.target.value)} required />
              <input type="submit" value="Validate" />
              {data && <p>{data}</p>}
            </form>
        </div>
    )
  }
  
  export default Index