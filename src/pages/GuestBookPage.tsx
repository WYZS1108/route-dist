import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';
import xingqiong from '../assets/xingqiong.jpg';

const GuestBookPage: React.FC = () => {
  // 表单状态管理
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  // 发布留言提交事件
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里后续可以接留言存储接口，现在先做表单交互提示
    if (!nickname.trim() || !message.trim()) {
      alert('请填写昵称与留言内容~');
      return;
    }
    alert(`感谢 ${nickname} 的留言！星穹之下，奔赴相遇✨`);
    // 提交后清空表单
    setNickname('');
    setMessage('');
  };

  return (
    <>
      <Helmet>
        <title>访客留言 | 「源」宇宙音乐博客</title>
        <meta name="description" content="星穹留言板，欢迎留下你的足迹、听歌感想与温柔寄语。" />
      </Helmet>
      <div>
        <img src={xingqiong} alt="在星穹下狂奔" className={styles.bannerImg} />
      </div>

      <div className={styles.page}>
        <h1 className={styles.pageTitle}>访客留言</h1>
        <div className={styles.aboutContent}>
          <p>📝 欢迎来到星穹留言板</p>
          <p>这里是属于所有小汤圆的温柔角落。</p>
          <p>你可以留下听歌感想、成长寄语、岁月打卡，或是随手写下的温柔短句。</p>
          <p>风遇星穹，人赴热爱，每一条留言，都是一次温柔相遇。</p>
        </div>

        {/* ========== 完整留言表单 ========== */}
        <form onSubmit={handleSubmit} className={styles.messageForm}>
          {/* 昵称输入框 */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>你的昵称</label>
            <input type="text" value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="请留下你的名字/小汤圆专属昵称"
              className={styles.formInput}
            />
          </div>

          {/* 留言内容文本域 */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>你的留言</label>
            <textarea value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="写下你的听歌感想、成长寄语、温柔心语..."
              className={styles.formTextarea}
            />
          </div>

          {/* 发布提交按钮 */}
          <button type="submit" className={styles.formBtn}>发布留言</button>
        </form>
      </div>
    </>
  );
};

export default GuestBookPage;