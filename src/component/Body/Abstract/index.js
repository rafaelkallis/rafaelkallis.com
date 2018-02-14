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
        Doing my Master's degree in Computer Science at the{' '}
        <a
          href="http://www.ifi.uzh.ch/en.html"
          target="_blank"
          rel="noreferrer noopener">
          University of Zurich
        </a>.
      </p>
      <p>
        Self motivated Software Engineer currently working on an enterprise
        social network with 4000 users build using state of the art
        Typescript/React on the front-end and a Node.js/PostgreSQL stack on the
        back-end.
      </p>
    </div>
  );
}
