import { useEffect, useState } from "react";

function Index() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchAppointment = async () => {
          try {
            const response = await fetch('http://localhost:1992/hello/:name');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        console.log(data);
      
        fetchAppointment();
      }, []);

    return (
        <div>
            This is home page
        </div>
    )
  }
  
  export default Index