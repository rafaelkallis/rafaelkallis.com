/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import './index.css';

export default function NavBar(props) {
  return (
    <div {...props}>
      <hr className="NavSeparator" />
      <div className="NavWrap row">
        <a
          className="one-third column NavLink"
          href="https://github.com/rafaelkallis"
          target="_blank"
          rel="noreferrer noopener">
          github
        </a>
        <a
          className="one-third column NavLink"
          href="mailto:rk [at] rafaelkallis [dot] com"
          target="_blank"
          rel="noreferrer noopener">
          email
        </a>
        <a
          className="one-third column NavLink"
          href="https://ch.linkedin.com/in/rafaelkallis"
          target="_blank"
          rel="noreferrer noopener">
          linkedin
        </a>
      </div>
      <hr className="NavSeparator" />
    </div>
  );
}
