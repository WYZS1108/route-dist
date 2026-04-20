import React, { useState, useEffect } from 'react'; // 导入 useEffect
import styles from './App.module.css'; // CSS Module 导入
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';      // 新建首页
import ArticlesPage from './pages/ArticlesPage'; // 文章列表页
import ArticleDetailPage from './pages/ArticleDetailPage'; // 文章详情

import AboutPage from './pages/AboutPage';    // 关于我
import NotFoundPage from './pages/NotFoundPage';
import MomentsPage from './pages/MomentsPage';
import GuestBookPage from './pages/GuestBookPage';

const App: React.FC = () => {

  // 在顶层组件定义一个状态，管理博客标题
  const [blogTitle] = useState<string>("欢迎来到我们的「源」宇宙");


  // 定义接收邮箱的处理函数
  const handleSubscribe = (email: string) => {
    console.log("App 组件收到了订阅邮箱:", email);
    // 这里可以添加发送到后端的逻辑
    alert(`感谢订阅！邮箱 ${email} 已收到。`);
  };


  // 内部组件，用于监听主题并修改 body 类名
  const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();

    useEffect(() => {
      // 将主题类名添加到 body 上
      document.body.className = theme;
    }, [theme]);

    return <>{children}</>;
  };

  return (
    // 使用 Grid 布局构建页面骨架
    <ThemeProvider>   {/* 包裹整个应用，让所有子组件都能访问主题 */}
      <ThemeWrapper>
        <div className={styles.pageLayout}>
          <Header title={blogTitle} />
          <Nav />

          {/* 主要内容区域：路由出口 */}
          <main className={styles.mainArea}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
              
              <Route path="/moments" element={<MomentsPage />} />
              <Route path="/guestbook" element={<GuestBookPage />} />
            </Routes>
          </main>

          <Sidebar onSubscribe={handleSubscribe} />
          {<Footer />}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default App;