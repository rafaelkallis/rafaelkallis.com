/**
 * @file index.js
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import image from './rafaelkallis.png';
import './index.css';
import Autogram from './Autogram';
import NavBar from './NavBar';
import Body from './Body';

export default function App() {
  return (
    <div>
      <img className="Image" src={image} alt="profile" />
      <Autogram className="Autogram" />
      <NavBar className="NavBar" />
      <Body className="container Body" />
    </div>
  );
}
