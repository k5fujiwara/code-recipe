import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// GitHub Actions では環境変数から自動取得します。
// ローカル確認時に固定したい場合は、このフォールバック値を変更してください。
const githubUserName = process.env.GITHUB_REPOSITORY_OWNER ?? 'k5fujiwara';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'code-recipe';

// 独自ドメイン（Cloudflare Registrar）
const customDomain = process.env.CUSTOM_DOMAIN ?? 'code-recipes.com';
const siteUrl =
  process.env.SITE_URL ??
  (customDomain
    ? `https://${customDomain}`
    : `https://${githubUserName}.github.io`);
const baseUrl =
  process.env.BASE_URL ?? (customDomain ? '/' : `/${repositoryName}/`);

const config: Config = {
  title: 'Code Recipe',
  tagline: 'マネして、学んで、作り出す。君だけの開発レシピ集。',
  favicon: 'img/favicon.svg',

  url: siteUrl,
  baseUrl,

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
          type: 'docSidebar',
          sidebarId: 'contestSidebar',
          position: 'left',
          label: '競技・対策',
        },
        {
          type: 'docSidebar',
          sidebarId: 'appsSidebar',
          position: 'left',
          label: '運営者のアプリ',
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
            {
              label: '情報オリンピック挑戦ガイド',
              to: '/docs/contest/joi-guide',
            },
            {
              label: 'AOJロードマップ',
              to: '/docs/contest/aoj-roadmap',
            },
            {
              label: 'IT1-CODE-POCKET',
              to: '/docs/apps/it1-code-pocket',
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
            {
              label: 'Google AdSense',
              to: '/docs/development/google-adsense-setup',
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
        {
          title: 'Legal',
          items: [
            {
              label: 'プライバシーポリシー',
              to: '/privacy-policy',
            },
            {
              label: '利用規約・免責事項',
              to: '/terms',
            },
            {
              label: 'お問い合わせ',
              to: '/contact',
            },
            {
              label: '運営者情報',
              to: '/operator',
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
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          wrappingWidth: 180,
        },
        themeVariables: {
          fontSize: '14px',
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
