import React from 'react';
import styles from './Header.module.css';
import { useTheme } from '../context/ThemeContext';

// 定义组件接收的 Props 类型
interface HeaderProps {
  title: string; // 接收一个字符串类型的 title
}

// 使用解构赋值从 props 中取出 title
const Header: React.FC<HeaderProps> = ({ title }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>一起成为宇宙里超级无敌快乐的人</p>
      <button onClick={toggleTheme} className={styles.themeButton}>
        {theme === 'light' ? '🌙 黑夜模式' : '☀️ 明亮模式'}
      </button>
    </header>
  );
};

export default Header;