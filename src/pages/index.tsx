import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const audienceItems = [
  {
    title: 'プログラミングをこれから始める中高生',
    description:
      '専門用語を身近なたとえに置き換えて説明します。最初の1歩は、コードをコピペして動かすところからで大丈夫です。',
  },
  {
    title: '共通テスト「情報Ⅰ」や情報オリンピックに挑む人',
    description:
      'アルゴリズムを図解とPythonコードで学び、情報オリンピック（JOI）の公式フローやAOJの進め方まで確認できます。',
  },
  {
    title: '自分の作品を公開してみたい人',
    description:
      'GitHubの登録から、独自ドメイン設定、サイト公開、収益化の準備まで、実際に運用している手順を公開しています。',
  },
];

const featureItems = [
  {
    title: 'コピペで動くPythonコード',
    description:
      'すべてのアルゴリズム記事に、そのまま実行できる短いコードと、1行ずつの読み方解説を用意しています。',
  },
  {
    title: '図解ファースト',
    description:
      '文章だけで理解しにくい動きは、フローチャートで「データがどう動くか」を先に見せてから、コードに入ります。',
  },
  {
    title: '現役講師の実体験ベース',
    description:
      '塾で長年指導している運営者が、実際の質問やつまずきをもとに記事を作っています。AOJ 429問の実践経験も反映しています。',
  },
  {
    title: '作って公開するところまで',
    description:
      '文法の学習で終わらず、GitHub Pages での公開、独自ドメイン、実際に動くアプリの実例まで扱います。',
  },
];

const learningSteps = [
  {
    step: '1',
    title: 'まねして動かす',
    description: 'コピペ用コードをそのまま実行して、動く体験から始めます。',
  },
  {
    step: '2',
    title: '少し変えて試す',
    description: '数値や条件を変えて、結果がどう変わるかを観察します。',
  },
  {
    step: '3',
    title: '自分の言葉で説明する',
    description: '図解を見ながら、仕組みを人に説明できるか確かめます。',
  },
  {
    step: '4',
    title: '自分の作品を作る',
    description: '学んだレシピを組み合わせて、公開できる作品に育てます。',
  },
];

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
          <p>目的別に入口を用意しています。気になるカードから読み始めてください。</p>
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

function AudienceSection() {
  return (
    <section className={styles.plainSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Code Recipe はこんな人のためのサイトです</Heading>
          <p>
            プログラミング塾の現役講師が、初学者のつまずきポイントに合わせて作っている学習サイトです。
          </p>
        </div>
        <div className={styles.audienceGrid}>
          {audienceItems.map((item) => (
            <div className={styles.audienceItem} key={item.title}>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">このサイトの特徴</Heading>
          <p>「読んで終わり」にならないことを大切にしています。</p>
        </div>
        <div className={styles.featureGrid}>
          {featureItems.map((item) => (
            <div className={styles.featureItem} key={item.title}>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningStepsSection() {
  return (
    <section className={styles.plainSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">レシピの進め方</Heading>
          <p>
            料理のレシピと同じで、最初は手順どおりに作り、慣れたら自分の味に変えていきます。
          </p>
        </div>
        <div className={styles.stepGrid}>
          {learningSteps.map((item) => (
            <div className={styles.stepItem} key={item.step}>
              <span className={styles.stepNumber}>{item.step}</span>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.sectionFootnote}>
          サイトの運営目的は<Link to="/about/">このサイトについて</Link>、運営者の経歴は
          <Link to="/operator/">運営者情報</Link>で公開しています。
        </p>
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
        <AudienceSection />
        <RecipeCards />
        <FeatureSection />
        <LearningStepsSection />
      </main>
    </Layout>
  );
}
