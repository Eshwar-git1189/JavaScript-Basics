import React from "react";
//import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container mt-4">
        <p>© 2025 Stock Exchange Inc.</p>
        <p>All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
        <p>
          Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
