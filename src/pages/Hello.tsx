import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Hello() {
    const [data, setData] = useState("");
    const {state} = useLocation()
    const { userName } = state;

          useEffect(() => {
        const fetchHello = async () => {
          if (userName) {
            try {
              const response = await fetch(`http://localhost:2023/hello/${userName}`);
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
      
        console.log(data);

        fetchHello();
      }, []);

    return (
        <div>
            <h1>This is the hello page</h1>
            <p>so, {data}!</p>
        </div>
    )
  }
  
  export default Hello