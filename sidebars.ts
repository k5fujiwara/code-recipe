import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  developmentSidebar: [
    {
      type: 'category',
      label: '開発フロー',
      link: {
        type: 'doc',
        id: 'development/index',
      },
      items: ['development/github-signup', 'development/accounts-and-api'],
    },
  ],
  algorithmsSidebar: [
    {
      type: 'category',
      label: 'アルゴリズム',
      link: {
        type: 'doc',
        id: 'algorithms/index',
      },
      items: [
        {
          type: 'category',
          label: 'ソートアルゴリズム',
          items: [
            'algorithms/bubble-sort',
            'algorithms/selection-sort',
            'algorithms/insertion-sort',
            'algorithms/quick-sort',
            'algorithms/heap-sort',
          ],
        },
        {
          type: 'category',
          label: '探索アルゴリズム',
          items: ['algorithms/linear-search', 'algorithms/binary-search'],
        },
        {
          type: 'category',
          label: 'グラフ探索',
          items: ['algorithms/depth-first-search', 'algorithms/breadth-first-search'],
        },
        {
          type: 'category',
          label: '数学アルゴリズム',
          items: ['algorithms/sieve-of-eratosthenes'],
        },
        {
          type: 'category',
          label: '発展',
          items: ['algorithms/dynamic-programming'],
        },
      ],
    },
  ],
};

export default sidebars;
