import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// GitHub Actions では環境変数から自動取得します。
// ローカル確認時に固定したい場合は、このフォールバック値を変更してください。
const githubUserName = process.env.GITHUB_REPOSITORY_OWNER ?? 'YOUR_GITHUB_USERNAME';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'code-recipe';

const config: Config = {
  title: 'Code Recipe',
  tagline: 'マネして、学んで、作り出す。君だけの開発レシピ集。',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here.
  // Example: https://your-github-user.github.io
  url: `https://${githubUserName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${repositoryName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: githubUserName,
  projectName: repositoryName,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card when you prepare an OGP image.
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Code Recipe',
      logo: {
        alt: 'Code Recipe Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developmentSidebar',
          position: 'left',
          label: '開発フロー',
        },
        {
          type: 'docSidebar',
          sidebarId: 'algorithmsSidebar',
          position: 'left',
          label: 'アルゴリズム',
        },
        {
          href: `https://github.com/${githubUserName}/${repositoryName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '開発フロー',
              to: '/docs/development/',
            },
            {
              label: 'アルゴリズム',
              to: '/docs/algorithms/',
            },
          ],
        },
        {
          title: 'Setup',
          items: [
            {
              label: 'GitHubの登録方法',
              to: '/docs/development/github-signup',
            },
            {
              label: 'SNSやAPI連携',
              to: '/docs/development/accounts-and-api',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${githubUserName}/${repositoryName}`,
            },
            {
              label: 'BeEngineer公式サイト',
              href: 'https://be-engineer.tech/',
            },
            {
              label: 'AIZU ONLINE JUDGE',
              href: 'https://judge.u-aizu.ac.jp/onlinejudge/index.jsp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Code Recipe. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
