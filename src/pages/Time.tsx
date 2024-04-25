import { useState, useEffect } from "react";

function Time() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchTime = async () => {
          try {
            const response = await fetch('http://localhost:1992/server/time');
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
            This is time page<br />
            The time is { data? data.time as string : "" }
        </div>
    )
  }
  
  export default Time