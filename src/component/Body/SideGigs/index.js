/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import './index.css';

export default function SideGigs(props) {
  return (
    <div
      {...props}
      className={'abstract-text ' + (props.className ? props.className : '')}>
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
