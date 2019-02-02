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
        Blockchain engineer at <a
          href="https://heroesgroup.ch"
          target="_blank"
          rel="noreferrer noopener">
          Heroes Group
        </a> (present, 2019).
      </p>
      <p>
        Data scientist and engineer at{' '}
        <a
          href="https://valdon.de"
          target="_blank"
          rel="noreferrer noopener">
          Valdon Mesh
        </a> (2 months, 2018).
      </p>
      <p>
        Software engineer at{' '}
        <a
          href="https://covee.network"
          target="_blank"
          rel="noreferrer noopener">
          Covee Network
        </a> (4 months, 2018).
      </p>
      <p>
        Pursuing Master's degree in Computer Science at the{' '}
        <a
          href="http://www.ifi.uzh.ch/en.html"
          target="_blank"
          rel="noreferrer noopener">
          University of Zurich
        </a>.
      </p>
      <h3>Side Gigs</h3>
      <p>
        <a
          href="https://github.com/rafaelkallis/ticket-tagger"
          target="_blank"
          rel="noreferrer noopener">
          Ticket Tagger
        </a>, machine learning driven issue classification bot for GitHub.
      </p>
      <p>
        <a
          href="https://github.com/rafaelkallis/adaptive-radix-tree"
          target="_blank"
          rel="noreferrer noopener">
          The Adaptive Radix Tree
        </a>, an adaptive radix tree for efficient indexing in main memory.
      </p>
    </div>
  );
}
