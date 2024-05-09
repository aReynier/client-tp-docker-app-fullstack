import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Index() {
    const [name, setName] = useState("");

    const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();

        navigate(`/hello/${name}`, {state: {userName: name}});
      };

    return (
        <div>
            <h1>This is the home page</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nameInput">Please enter your name:</label><br/>
              <input type="text" id="nameInput" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
              <input type="submit" value="Validate" />
            </form>
        </div>
    )
  }
  
  export default Index