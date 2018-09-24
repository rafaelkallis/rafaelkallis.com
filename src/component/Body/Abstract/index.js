/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import './index.css';

export default function Abstract(props) {
  return (
    <div
      {...props}
      className={'abstract-text ' + (props.className ? props.className : '')}>
      <h3>Abstract</h3>
      <p>
        Software engineer at{' '}
        <a
          href="https://covee.network"
          target="_blank"
          rel="noreferrer noopener">
          Covee Network
        </a>.
      </p>
      <p>
        Master's degree in Computer Science at the{' '}
        <a
          href="http://www.ifi.uzh.ch/en.html"
          target="_blank"
          rel="noreferrer noopener">
          University of Zurich
        </a>.
      </p>
      <p>
        I work on a daily basis on a node.js backend with
        relational databases and solidity smart contracts.
        I love designing large scale system/blockchain architectures.
      </p>
      <p>
        During the weekend, I'm building  my own database system (from scratch).
        Occasionaly, I read some database and distributed systems literature.
      </p>
    </div>
  );
}
