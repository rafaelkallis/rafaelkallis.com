/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import './index.css';
import Abstract from './Abstract';
import Skillset from './Skillset';
import Publications from './Publications';

export default function Body(props) {
  return (
    <div {...props}>
      <Abstract className="section" />
      <Skillset className="section" />
      <Publications className="section" />
    </div>
  );
}