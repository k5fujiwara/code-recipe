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
      items: [
        'development/github-signup',
        'development/project-setup-and-token',
        'development/quiz-code-template',
        'development/accounts-and-api',
        'development/google-adsense-setup',
      ],
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
            'algorithms/merge-sort',
            'algorithms/heap-sort',
          ],
        },
        {
          type: 'category',
          label: 'データ構造',
          items: [
            'algorithms/stack',
            'algorithms/queue',
            'algorithms/priority-queue',
            'algorithms/prefix-sum',
            'algorithms/union-find',
            'algorithms/segment-tree',
            'algorithms/binary-indexed-tree',
            'algorithms/reverse-polish-notation',
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
          items: [
            'algorithms/depth-first-search',
            'algorithms/breadth-first-search',
            'algorithms/dijkstra',
            'algorithms/bellman-ford',
            'algorithms/warshall-floyd',
            'algorithms/tree-diameter',
            'algorithms/topological-sort',
            'algorithms/kruskal',
            'algorithms/prim',
          ],
        },
        {
          type: 'category',
          label: '数学アルゴリズム',
          items: [
            'algorithms/prime-guide',
            'algorithms/sieve-of-eratosthenes',
            'algorithms/euclidean-algorithm',
            'algorithms/prime-factorization',
            'algorithms/fast-power',
            'algorithms/combination',
          ],
        },
        {
          type: 'category',
          label: '文字列・データ変換',
          items: ['algorithms/hash-function', 'algorithms/string-search', 'algorithms/rolling-hash'],
        },
        {
          type: 'category',
          label: 'ゲームAI',
          items: ['algorithms/monte-carlo', 'algorithms/minimax'],
        },
        {
          type: 'category',
          label: 'セキュリティ',
          items: ['algorithms/public-key-cryptography'],
        },
        {
          type: 'category',
          label: '戦略・典型解法',
          items: [
            'algorithms/bit-bruteforce',
            'algorithms/eight-queens',
            'algorithms/recursion',
            'algorithms/dynamic-programming',
            'algorithms/zero-one-knapsack',
            'algorithms/longest-increasing-subsequence',
            'algorithms/sliding-window',
            'algorithms/imos',
            'algorithms/greedy',
            'algorithms/meet-in-the-middle',
            'algorithms/coordinate-compression',
          ],
        },
      ],
    },
  ],
  appsSidebar: [
    {
      type: 'category',
      label: '運営者のアプリ',
      link: {
        type: 'doc',
        id: 'apps/index',
      },
      items: ['apps/it1-code-pocket'],
    },
  ],
  contestSidebar: [
    {
      type: 'category',
      label: '競技・対策',
      link: {
        type: 'doc',
        id: 'contest/index',
      },
      items: ['contest/joi-guide', 'contest/aoj-roadmap'],
    },
  ],
};

export default sidebars;
