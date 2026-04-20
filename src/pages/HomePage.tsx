import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';
import { getArticles } from '../data/articles.ts';
import Jainjie from '../assets/jianjie.jpg';
import changPian from '../assets/changpian.jpg';

const HomePage: React.FC = () => {
  const articles = getArticles().slice(0, 2);

  return (
    <>
      <Helmet>
        <title>首页 | 欢迎来到我们的「源」宇宙</title>
        <meta name="description" content="王源专属音乐博客，记录《在星穹下狂奔》全专解析、成长故事与旋律温柔" />
      </Helmet>

      <div className={styles.page}>
        <div className={styles.introBlock}>
          <h1 className={styles.pageTitle}>个人介绍</h1>
          <div className={styles.introWrap}>
            <div className={styles.introLeftImg}>
              <img src={Jainjie} alt="王源" />
              <img src={changPian} alt="王源" />
            </div>
            <div className={styles.introText}>
              <h1>王源</h1>
              <h4>2000年11月8日出生于重庆市</h4>
              <h4>中国内地男歌手、演员、主持人、作家。</h4>
              <p>2011年底，成为时代峰峻TF家族练习生，2013年8月，以TFBOYS组合一员正式出道。</p>
              <p>2016年，发行个人首支音乐单曲《因为遇见你》,此后几年，相继推出《十七》《骄傲》《滚烫的青春》等多首原创音乐单曲。</p>
              <p>2017年，入选美国《时代》杂志“30位全球最具影响力青少年”</p>
              <p>2018年，成为中文核心时政类期刊《环球人物》的首位“00后”专栏作家，开设个人专属专栏「王源说」。</p>
              <p>2019年，发行个人首张音乐专辑《源》；8月，在南京举办个人首场演唱会「源」。</p>
              <p>2021年，发行个人第二张音乐专辑《夏野了》；</p>
              <p>2022年，发行个人第三张音乐专辑《客厅狂欢》；</p>
              <p>2023年，开启个人首次全国巡回演唱会「客厅狂欢」；</p>
              <p>2024年，领衔主演悬疑谍战片《孤星计划》，并为该片献唱主题曲《别丢了你的勇敢》</p>
              <p>2025年，开启「宇宙超级无敌大狂欢」全国巡回演唱会，8月，在鸟巢连续举行两场演唱会，成为鸟巢最年轻的场巡歌手。</p>
              <p>同年，发行个人第四张原创专辑《在星穹下狂奔》。</p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className={styles.blockSplit}></div>

        {/* ========== 专辑歌曲内容区 ========== */}
        <h1 className={styles.pageTitle}>《在星穹下狂奔》专辑歌曲介绍</h1>
        {articles.map(article => (
          <article key={article.id} className={styles.articleCard}>
            <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
            <div className={styles.meta}>{article.date} · {article.author}</div>
            <p>{article.summary || article.contentSections[0]?.text.substring(0, 100)}...</p>
            <Link to={`/articles/${article.id}`} className={styles.readMore}>阅读全文 →</Link>
          </article>
        ))}
      </div>

      <div className={styles.highlightCta}>
        <p><mark className={styles.mark}>🔥 小汤圆专区：</mark> 想要了解更多《在星穹下狂奔》歌曲细节？
          <a href="#">点击这里订阅我的音乐专栏</a>，一起奔赴属于我们的星穹之下！</p>
      </div>
    </>
  );
};

export default HomePage;