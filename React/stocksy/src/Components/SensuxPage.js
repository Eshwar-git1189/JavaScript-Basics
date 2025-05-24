import React, { useEffect, useState } from "react";
import axios from "axios";

const SensuxPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/data/stocks.json")
      .then((response) => {
        setData(response.data.sensux);
      })
      .catch((error) => {
        console.error("Error fetching Tesla data:", error);
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{data.id}</h2>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <p>Price: {data.price}</p>
    </div>
  );
};

export default SensuxPage;
