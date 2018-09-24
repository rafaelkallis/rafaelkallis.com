/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import './index.css';

export default function Skillset() {
  return (
    <div className="Skillset">
      {shuffle(skills).map(skill => (
        <Skill key={skill} primary={primarySkills.has(skill)}>
          {skill}
        </Skill>
      ))}
    </div>
  );
}

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const skills = [
  'software engineering',
  'java',
  'design patterns',
  'web',
  'javascript',
  'typescript',
  'react',
  'node.js',
  'python',
  'c++',
  'blockchain technology',
  'p2p networks',
  'databases',
  'relational db',
  'hierarchical db',
  'key-value stores',
  'sql',
  'nosql',
  'algorithms',
  'data structures',
  'solidity',
  'distributed systems',
  'scalability',
  'smart contracts',
  'dbms',
  'architecture'
];

const primarySkills = new Set(['web', 'databases', 'smart contracts', 'javascript', 'dbms', 'architecture']);

function Skill({children, primary}) {
  return (
    <div className={'button Skill ' + (primary ? 'button-primary' : '')}>
      {children}
    </div>
  );
}
