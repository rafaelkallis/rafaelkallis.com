/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import onTheEffectsOf from './on_the_effects_of_cognitive_bias_and_test_driven_development_Rafael_Kallis_2017.pdf';
import vertiefungsArbeit from './detecting_volatile_index_nodes_in_apache_jackrabbit_oak_Rafael_Kallis_2017.pdf';
import bscThesis from './an_adaptive_index_for_hierarchical_database_systems_Rafael_Kallis_2018.pdf';
import art from './the_adaptive_radix_tree_rafael_kallis.pdf';

export default function Publications(props) {
  return (
    <div {...props}>
      <h3>Publications</h3>
      <div>
        {publications.map(publication => (
          <Publication key={publication.title} {...publication} />
        ))}
      </div>
    </div>
  );
}

function Publication({title, abstract, link, date}) {
  return (
    <div>
      <h5>{title}</h5>
      <p>
        {date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}
      </p>
      {abstract.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <a href={link} target="_blank" rel="noreferrer noopener">
        Read
      </a>
      <hr />
    </div>
  );
}

const publications = [
  {
    title:
      'The Adaptive Radix Tree',
    abstract: [
      `The goal of this project is to study and implement 
      the Adaptive Radix Tree (ART), as proposed by Leis et al.`,
      `ART, which is a trie based data structure, achieves its 
      performance, and space efficiency, by compressing the tree 
      both vertically, i.e., if a node has no siblings it is 
      merged with its parent, and horizontally, i.e., uses an 
      array which grows as the number of children increases. 
      Vertical compression reduces the tree height and horizontal 
      compression decreases a node’s size.`,
    ],
    date: new Date(2018, 8),
    link: art,
  },
  {
    title:
      'An Adaptive Index for Hierarchical Distributed Database Systems (BSc Thesis)',
    abstract: [
      `The workload-aware property index is a hierarchical 
    index which adapts to the database’s recent transactional workload 
    by not pruning volatile index nodes, i.e. nodes which are frequently 
    inserted or deleted, in order to increase update performance. When 
    the workload changes, these nodes cease to be volatile and become 
    unproductive if they and their descendants, neither contribute to 
    a query match, nor are volatile.`,
      `Unproductive nodes in hierarchical indexes waste space and slow 
      down queries. We propose periodic Garbage Collection and Query-Time 
      Pruning in order to clean unproductive nodes in the index. We 
      implement the techniques in Apache Jackrabbit Oak and provide 
      an extensive experimental evaluation to stress test the algorithms 
      and show that the database throughput increases considerably when 
      periodic Garbage Collection or Query-Time Pruning are applied.`,
    ],
    date: new Date(2018, 1),
    link: bscThesis,
  },
  {
    title: 'Confirmation Bias in Software Engineering',
    abstract: [
      `In this paper, an overview of related work 
    reasoning how confirmation bias and test driven development 
    affects software quality will be presented. Specifically, I 
    will reason how confirmation bias is present in software engineering 
    and where it emerges from.`,
      `Additionally, we will see if test driven 
    development shows any impact on confirmation bias or productivity 
    levels. With respect to the found conclusions, some suggestions 
    will be made on how software quality can be increased.`,
    ],
    date: new Date(2017, 4),
    link: onTheEffectsOf,
  },
  {
    title: 'Detecting Volatile Index Nodes in a Hierarchical Database System',
    abstract: [
      `The goal of this project is to implement a hierarchical 
    index in Apache Jackrabbit Oak which identifies and 
    does not remove volatile, i.e. frequently updated, index 
    nodes in order to improve the transactional throughput 
    of the database system.`,
      `Volatile nodes deteriorate index update 
    performance due to two reasons. First, frequent structural index 
    modifications are expensive since they cause many disk accesses. 
    Second, frequent structural index modifications also increase 
    the likelihood of conflicting index updates by concurrent 
    transactions. Conflicting index updates further deteriorate 
    update performance since concurrency control protocols need 
    to resolve the conflict.`,
    ],
    link: vertiefungsArbeit,
    date: new Date(2017, 9),
  },
].sort((a, b) => b.date - a.date);
