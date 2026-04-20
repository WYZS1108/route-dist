import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>自述 | 「源」宇宙 · 我的博客自述</title>
        <meta name="description" content="八年小汤圆专属音乐博客，记录王源《在星穹下狂奔》全专歌曲解析、成长随笔与旋律里的温柔。" />
      </Helmet>

      <div className={styles.page}>
        <h1 className={styles.pageTitle}>博客简介</h1>
        <div className={styles.aboutContent}>
          <p>🌌 欢迎来到我们的「源」宇宙</p>
          <p>这里是专属王源《在星穹下狂奔》专辑的音乐自留地。</p>
          <p>我们循着旋律溯游，打捞词曲里藏住的温柔与旷野，珍藏王源笔下独有的浪漫与赤诚。</p>
          <p>这里没有喧嚣的碎片闲谈，只专注于音乐本身；以一字一句回应星穹之下，每一场盛大的奔赴与同行。</p>
          <p>愿每一位踏入此处的读者，都能在旋律与文字里，接住王源藏在歌里的所有温柔。
          <p>本博客以文字为舟，以音乐为岸，收录专辑全曲目深度解析、创作内核解读、歌词氛围感感悟。</p></p>
        </div>

    
        <div className={styles.blockSplit}></div>

        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
          <p>👋 你好，我是一名喜欢了王源八年的小汤圆。</p>
          <p>八年时光，他的音乐一直是我生活中不可或缺的一部分。</p>
          <p>这个博客是专门用来记录和分享王源的歌曲背后的故事与情感。</p>
          <p>做这个博客，从来不是狂热的追逐，只是长久的偏爱与记录。</p>
          <p>我希望能用文字留住每一个音符的温度，与同样热爱王源的你，在文字与音乐的交汇点相遇，共同见证那份属于我们的“星穹”。</p>
          <p>📧 联系我：ZhuSu26aizyty@outlook.com</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;