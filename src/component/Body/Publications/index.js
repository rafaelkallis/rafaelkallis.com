/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

import React from 'react';
import vertiefungsArbeit from './detecting_volatile_index_nodes_in_apache_jackrabbit_oak_Rafael_Kallis_2017.pdf';
import bscThesis from './an_adaptive_index_for_hierarchical_database_systems_Rafael_Kallis_2018.pdf';
import art from './the_adaptive_radix_tree_rafael_kallis.pdf';
import ticketTagger from './ticket_tagger_tool_demo.pdf';

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
      'Ticket Tagger: Machine Learning Driven Issue Classification (IEEE ICSME, 2019)',
    abstract: [
      "Software maintenance is crucial for software projects evolution and success: code should be kept up-to-date and error-free, this with little effort and continuous updates for the end-users. In this context, issue trackers are  essential tools for creating, managing and addressing the several (often hundreds of) issues that occur in software systems.",
      "A critical aspect for handling and prioritizing issues involves the assignment of labels to them (e.g., for projects hosted on GitHub), in order to determine the type (e.g., bug report, feature request and so on) of each specific issue. Although this labeling process has a positive impact on the effectiveness of issue processing, the current labeling mechanism is scarcely used on GitHub.",
      "In this demo, we introduce a tool, called Ticket Tagger, which leverages machine learning strategies on issue titles and descriptions for automatically labeling GitHub issues.",
      "Ticket Tagger automatically predicts the labels to assign to issues, with the aim of stimulating the use of labeling mechanisms in software projects, this to facilitate the issue management and prioritization processes. Along with the presentation of the tool's architecture and usage, we also evaluate its effectiveness in performing the issue labeling/classification process, which is critical to help maintainers to keep control of their workloads by focusing on the most critical issue tickets."
    ],
    date: new Date(2019, 5),
    link: ticketTagger,
  },
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
