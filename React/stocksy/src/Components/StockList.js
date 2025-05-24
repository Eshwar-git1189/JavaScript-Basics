// import React from 'react';

// const StockList = () => {
//   return (
//     <div className="row">
//       <div className="col-sm-6 mb-3 mb-sm-0">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Nifty</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="btn btn-primary">Watch out</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Sensux</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="btn btn-primary">Watch out</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Tesla</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="btn btn-primary">Watch out</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Google</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="btn btn-primary">Watch out</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">IPO</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="btn btn-primary">Watch out</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Market Events</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="btn btn-primary">Watch out</a>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default StockList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const StockList = () => {
  //const [stocks, setStocks] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/data/stocks.json") // file is in public/data
  //     .then((response) => setStocks(response.data))
  //     .catch((error) => console.error("Error loading stock data:", error));
  // }, []);
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Nifty</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/nifty" className="btn btn-primary">
              Watch out
            </Link>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sensux</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/sensux" className="btn btn-primary">
              Watch out
            </Link>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Tesla</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/tesla" className="btn btn-primary">
              Watch out
            </Link>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Google</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/google" className="btn btn-primary">
              Watch out
            </Link>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">IPO</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/ipo" className="btn btn-primary">
              Watch out
            </Link>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Market Events</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/market-events" className="btn btn-primary">
              Watch out
            </Link>
          </div>
        </div>
      </div>
      {/* {stocks.map((stock) => (
        <div className="col-sm-6 mb-4" key={stock.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{stock.title}</h5>
              <p className="card-text">{stock.description}</p>
              <Link to={stock.link} className="btn btn-primary">
                Watch out
              </Link>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default StockList;
