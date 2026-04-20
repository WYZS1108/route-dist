import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';

// 修复：更新接口定义
interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  summary?: string; // 新增可选属性
  images?: string[]; // 新增可选属性
  contentSections: {
    title: string;
    text: string;
    code?: string;
  }[];
  tags: string[];
}

const MainContent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // 新增错误状态

  useEffect(() => {
    let isMounted = true; // 用于防止组件卸载后更新状态

    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 缩短加载时间

        // 修复：移除未定义的images变量
        const mockArticles: Article[] = [
          {
            id: 1,
            title: "💌 十二封信",
            date: "2025-07-01",
            author: "WYZS",
            summary: "王源出道12周年自白式创作...",
            contentSections: [
              { title: "创作灵感", text: "《十二封信》源于王源出道十二周年的成长复盘..." },
              { title: "歌曲内核", text: "《十二封信》是一封跨越十二年的成长自白书..." }
            ],
            tags: ["王源", "十二封信", "成长自白", "情书", "在星穹下狂奔"]
          }
        ];

        if (isMounted) {
          setArticles(mockArticles);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch articles');
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // 修复：添加清理函数
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <main className={styles.main}><p>加载文章中...</p></main>;
  }

  if (error) {
    return <main className={styles.main}><p>Error: {error}</p></main>; // 新增错误状态UI
  }

  return (
    <main className={styles.main}>
      {articles.map((article) => (
        <article key={article.id} className={styles.article}>
          <header className={styles.articleHeader}>
            <h2>{article.title}</h2>
            <p>发布于 <time dateTime={article.date}>{article.date}</time> by {article.author}</p>
          </header>

          {article.contentSections.map((section, index) => (
            <section key={index} className={styles.section}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              {section.code && (
                <pre className={styles.codeBlock}>{section.code}</pre>
              )}
            </section>
          ))}

          <footer className={styles.articleFooter}>
            <p>
              标签:{' '}
              {article.tags.map((tag) => (
                // 修复：使用tag作为key，添加实际链接
                <span key={tag}>
                  <a href={`/tags/${tag}`}>{tag}</a>
                  {article.tags.indexOf(tag) < article.tags.length - 1 && ', '}
                </span>
              ))}
            </p>
          </footer>
        </article>
      ))}

      <div className={styles.highlightCta}>
          <p><mark className={styles.mark}>🔥 小汤圆专区：</mark> 想要了解更多《在星穹下狂奔》歌曲细节？
          <a href="#">点击这里订阅我的音乐专栏</a>，一起奔赴属于我们的星穹之下！！</p>
        </div>
    </main>
  );
};

export default MainContent;