import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>首页</NavLink></li>
        <li><NavLink to="/articles" className={({ isActive }) => isActive ? styles.active : undefined}>专辑存档</NavLink></li>
        {/* 新增：星穹随笔 */}
        <li><NavLink to="/moments" className={({ isActive }) => isActive ? styles.active : undefined}>星穹随笔</NavLink></li>
        {/* 新增：访客留言 */}
        <li><NavLink to="/guestbook" className={({ isActive }) => isActive ? styles.active : undefined}>访客留言</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>自述</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;