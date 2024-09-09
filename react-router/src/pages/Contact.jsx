import React from 'react'
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div>
      <h2>Contact page</h2>
      <Link to={`/`}>Home</Link>&nbsp;
      <Link to={`/about`}>About</Link>&nbsp;
      <Link to={`/contact`}>Contact</Link>
    </div>
  );
}

export default Contact
