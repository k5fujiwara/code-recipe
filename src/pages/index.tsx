import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const recipeCards = [
  {
    title: '開発方法を学ぶ',
    badge: 'Development',
    description: 'GitHub、Web公開、チーム開発の流れを、手を動かしながら身につけよう。',
    to: '/docs/development/',
  },
  {
    title: 'アルゴリズムを学ぶ',
    badge: 'Algorithms',
    description: '並び替えや探索を、身近なたとえと図解で「なるほど」に変えていこう。',
    to: '/docs/algorithms/',
  },
  {
    title: '登録・連携を準備する',
    badge: 'Setup',
    description: 'GitHubの登録方法や、SNS・API連携に必要な準備をまとめて確認しよう。',
    to: '/docs/development/github-signup/',
  },
  {
    title: '情報オリンピックに挑戦',
    badge: 'Contest',
    description: 'JOIの公式フローと、AOJ・AtCoderでの練習の進め方をまとめて確認しよう。',
    to: '/docs/contest/joi-guide/',
  },
  {
    title: 'IT1-CODE-POCKET',
    badge: 'Apps',
    description: '共通テスト「情報Ⅰ」第3問対策の学習クイズ Web アプリを試そう。',
    to: '/docs/apps/it1-code-pocket/',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <p className={styles.eyebrow}>Programming recipes for students</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/development/">
            開発方法を学ぶ
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/algorithms/">
            アルゴリズムを学ぶ
          </Link>
        </div>
      </div>
    </header>
  );
}

function RecipeCards() {
  return (
    <section className={styles.recipeSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">今日の学びを選ぼう</Heading>
          <p>BeEn_HW のように、迷わず入口を選べるカード型ナビゲーションです。</p>
        </div>
        <div className={styles.cardGrid}>
          {recipeCards.map((card) => (
            <Link className={styles.recipeCard} to={card.to} key={card.title}>
              <span>{card.badge}</span>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <RecipeCards />
      </main>
    </Layout>
  );
}
