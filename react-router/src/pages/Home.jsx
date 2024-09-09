import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to={`/`}>Home</Link>&nbsp;
      <Link to={`/about`}>About</Link>&nbsp;
      <Link to={`/contact`}>Contact</Link>
    </div>
  );
}

export default Home
