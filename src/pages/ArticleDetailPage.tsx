import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';
import { getArticleById } from '../data/articles';
import styles2 from "../components/MainContent.module.css";

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(Number(id));

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title}专辑存档 | 「源」宇宙 · 专辑存档</title>
        <meta name="description" content={article.summary || article.contentSections[0]?.text.slice(0, 150)} />
      </Helmet>
      <div className={styles.articleDetail}>

        <h1>{article.title}</h1>
        <div className={styles.meta}>{article.date} · {article.author}</div>

        {/* 文章内容 */}
        {article.contentSections.map((section, idx) => (
          <section key={idx} className={styles.section}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            {section.code && <pre className={styles.codeBlock}>{section.code}</pre>}
          </section>
        ))}

        {/* 👇 多张图片（支持 1 张 / 多张，自动识别） */}
        {article.images && article.images.length > 0 && (
          <div className={styles.imageGallery}>
            {article.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`图片 ${index + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        )}

        {/* 底部标签（不受浮动影响） */}
        <footer className={styles2.articleFooter}>
          <p>
            标签:{" "}
            {article.tags.map((tag, tagIndex) => (
              <span key={tagIndex}>
                <a href="#">{tag}</a>
                {tagIndex < article.tags.length - 1 && ", "}
              </span>
            ))}
          </p>
        </footer>
      </div>
    </>
  );
};

export default ArticleDetailPage;