import  { useEffect, useState, useCallback } from "react";

const useFetchItineraryData = () => {
    const [status, setStatus] = useState('idle');
    const [itineraries, setItineraries]=useState([{
        user:"",
        
      }]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3000/itineraries";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setItineraries(incomingData);
        setStatus('fetched');
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { status, itineraries };
};
export default useFetchItineraryData;