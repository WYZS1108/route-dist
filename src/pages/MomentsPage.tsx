import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const MomentsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>星穹随笔 | 「源」宇宙音乐博客</title>
        <meta name="description" content="旋律为笺，心事为字，收录成长感悟、歌词治愈语录、陪伴手记与星穹下的温柔随笔。" />
      </Helmet>

      <div className={styles.page}>
        <h1 className={styles.pageTitle}>星穹随笔</h1>
        <div className={styles.aboutContent}>
          <p>🌌 旋律为笺，心事为字</p>
          <p>收纳听歌感悟、成长手记、岁月心语，在音符与文字里，共赴星穹，慢慢狂奔。</p>
          <p>在这里珍藏每一句真诚独白，记录时光里的奔赴与自愈，留存所有浪漫相逢。</p>
        </div>

        <div className={styles.blockSplit}></div>

        <div className={styles.aboutContent}>
          <div><p>这一路尽管艰险，但从未惧怕过，愿每个人都能成为自己生活的主宰💪。——2020.3.14</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>前途就像一条通往远方的路，不走出去，怎么会看到远方呢？每当我面临选择，感到迷茫时，我就会告诉自己：不要去想怎么做才能有前途，而是去想自己想做什么，想成为谁，想留下什么。——2020.9.23</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>预约花开的时间，种出一个夏天。——2021.12.9</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>“失去”这件事永恒得这样确凿，我该如何，同时拥抱我的现在和年少呢？没有答案。世界的谜题很多。但我的羚羊，仍在轰隆。——2025.8.18</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>我们要如何在宇宙里去表达浪漫呢？有时候很笨拙，但期待在宇宙里遇到下一个浪漫的时刻。——2025.8.27</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>人生的轨迹海浪般流动，当几万双眼睛注视我，狂欢就在发生着。——2025.10.3</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>海风吹来的狂欢，快乐不会结束。——2025.10.21</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>奔赴冬天尾声最美的约，记住这无法复刻的感受。——2026.2.7</p></div>
          <div className={styles.blockSplit}></div>

          <div><p>泡泡折射出宇宙的光景，让每一次共振都有迹可循。荆棘之上向外绽放，光芒之中向内沉淀，重力之外共同狂欢。——2026.4.18</p></div>
        </div>
      </div>
    </>
  );
};

export default MomentsPage;