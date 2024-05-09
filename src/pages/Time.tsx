import React from "react";
import { useState, useEffect } from "react";

function Time() {
    const [data, setData] = useState({ time: null });

    useEffect(() => {
        const fetchTime = async () => {
          try {
            const response = await fetch('https://tp-docker-server-app-fullstack-1-0.onrender.com/server/time');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

      
        fetchTime();
      }, []);

    return (
        <div>
            <h1>This is the time page</h1>
            The time is { data.time ? (new Date(data.time)).toString() : ', wait a minute...' }
        </div>
    )
  }
  
  export default Time