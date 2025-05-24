// import logo from "./logo.svg";
// import "./App.css";

// import Footer from "./Components/Footer";
// import StockDetails from "./Components/StockDetails";

// import React, { useState } from "react";

// import StockList from "./Components/StockList";
// const [stocks] = useState([
//   { symbol: "AAPL", name: "Apple Inc.", price: 175 },
//   { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800 },
//   { symbol: "TSLA", name: "Tesla Inc.", price: 700 },
//   { symbol: "MSFT", name: "Microsoft Corp.", price: 320 },
// ]);

// const handleStockSelect = (symbol) => {
//   console.log("Selected stock:", symbol);
//   // You can add logic here to display details
// };
import Header from "./Components/Header";
import StockList from "./Components/StockList";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import TeslaPage from "./Components/TeslaPage";
import NiftyPage from "./Components/NiftyPage";
import SensuxPage from "./Components/SensuxPage";
import GooglePage from "./Components/GooglePage";
import IpoPage from "./Components/IpoPage";
import MarketEventsPage from "./Components/MarketEventPage";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <main className="container mt-4">
                <h2>Welcome to the Stock Exchange Platform</h2>
                <p>Track, analyze, and search for your favorite stocks.</p>
              </main>
              <div className="container mt-4">
                <h1 className="mb-4">Stock Exchange Dashboard</h1>
                <StockList />
              </div>
            </>
          }
        />
        {/* Future routes like /tesla, /nifty can go here */}
        <Route path="/tesla" element={<TeslaPage />} />
        <Route path="/nifty" element={<NiftyPage />} />
        <Route path="/sensux" element={<SensuxPage />} />
        <Route path="/google" element={<GooglePage />} />
        <Route path="/ipo" element={<IpoPage />} />
        <Route path="/market-events" element={<MarketEventsPage />} />
        <Route
          path="*"
          element={
            <div className="container mt-4">
              <h2>Page Not Found</h2>
            </div>
          }
        />
      </Routes>
      <div className="container mt-4">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
