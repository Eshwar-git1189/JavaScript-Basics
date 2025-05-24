// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MarketEventsPage = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/data/stocks.json")
//       .then((response) => {
//         setData(response.data.market-events);
//       })
//       .catch((error) => {
//         console.error("Error fetching Market data:", error);
//       });
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div className="container mt-4">
//       <h2>{data.id}</h2>
//       <p>{data.name}</p>
//       <p>{data.description}</p>
//       <p>Price: {data.price}</p>
//     </div>
//   );
// };

// export default MarketEventsPage;
import React, { useEffect, useState } from "react";
import axios from "axios";

const MarketEventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/data.json")
      .then((res) => setEvents(res.data.marketEvents)) // assuming the file has a `marketEvents` array
      .catch((err) => console.error("Error fetching market events:", err));
  }, []);
  
  return (
    <div className="container mt-4">
      <h2>Market Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketEventPage;
