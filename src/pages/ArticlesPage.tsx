import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';
import { getArticles } from '../data/articles.ts';

const ArticlesPage: React.FC = () => {
  const articles = getArticles();

  return (
    <>
      <Helmet>
        <title>专辑存档 | 《在星穹下狂奔》专辑歌曲介绍</title>
        <meta name="description" content="王源最新专辑《在星穹下狂奔》歌曲介绍" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>《在星穹下狂奔》专辑歌曲介绍</h1>
        {articles.map(article => (
          <article key={article.id} className={styles.articleCard}>
            <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
            <div className={styles.meta}>{article.date} · {article.author}</div>
            <p>{article.summary || article.contentSections[0]?.text.substring(0, 120)}</p>
            <Link to={`/articles/${article.id}`} className={styles.readMore}>阅读全文</Link>
          </article>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;