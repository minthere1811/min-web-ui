import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  });

  const [activeQR, setActiveQR] = useState(null);
  const [showOutlook, setShowOutlook] = useState(false);
  const [showProjectPrompt, setShowProjectPrompt] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (window.innerWidth > 900) {
      const handleMouseMove = (e) => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  {/*页脚备案信息*/}
  const getIcpInfo = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('Your domain name')) return '你的备案号';{/*实际备案号*/}
    return '测试ICP备0000001号-1 (演示占位)'; 
  };

  const handleCommand = (type) => {
    if (type === 'github') setTimeout(() => window.open('https://github.com/minthere1811', '_blank'), 500);{/*GitHub链接*/}
    if (type === 'outlook') setTimeout(() => setShowOutlook(true), 300);{/*联系邮箱*/}
    if (type === 'wechat') setTimeout(() => setActiveQR('/qr.png'), 500);{/*微信*/}
  };

  {/*页头、页脚、主页配置*/}
  return (
    <div className="app-container v2-layout">
      <nav className="glass-nav">
        <div className="brand">MINTHERE <span className="accent-dot">.</span></div> {/*左上角logo文字*/}
        <div className="nav-ops">
          <span onClick={() => setShowProjectPrompt(true)} className="theme-trigger">
            ▣ 项目档案
          </span>
          <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-trigger">
            {theme === 'dark' ? '✦ LIGHT' : '✧ DARK'}
          </span>
        </div>
      </nav>

      {/*介绍内容*/}
      <section className="hero-v2">
        <div className="hero-main">
          <div className="hero-left">
            <div className="intro-card">
              <span className="label">WHO AM I</span>
              <h3>在代码中寻找<br/>数学诗意的<span>开发者</span></h3>
            </div>
            <div className="hero-console">
              <div className="c-dots"><span></span><span></span><span></span></div>
              <div className="btns">
                {/*下方按钮*/}
                <button onClick={() => handleCommand('wechat')}>微信联络</button>
                <button onClick={() => handleCommand('github')}>项目仓库</button>
                <button onClick={() => handleCommand('outlook')}>发送邮件</button>
              </div>
            </div>
          </div>

          {/*左边大文字*/}
          <div className="hero-right">
            <h1 className="main-title">
              DIGITAL<br/>  {/*第一行*/}
              <span className="outline-text">ARCHITECT</span><br/>  {/*第二行镂空字体*/}
              FROM CHINA  {/*第三行*/}
            </h1>
            <div className="scroll-hint">SCROLL TO EXPLORE</div>  {/*最下方灰色字*/}
          </div>
        </div>
      </section>

      <div id="project-anchor">
        <Projects />
      </div>
      
      <Skills />

      {/*页脚内容*/}
      <footer className="website-footer v2-style">
        <div className="footer-content">
          <div className="f-left">
            <p className="f-logo">your name</p>  {/*版权上方灰色字*/}
            <p>© {new Date().getFullYear()} DESIGNED BY MINTHERE IN CHINA.</p>  {/*版权信息，必须保留*/}
          </div>
          <p className="icp-info">{getIcpInfo()}</p>
        </div>
      </footer>

      {/*单击项目档案跳出的菜单*/}
      {showProjectPrompt && (
        <div className="action-overlay" onClick={(e) => e.target.className === 'action-overlay' && setShowProjectPrompt(false)}>
          <div className="action-modal">
            <h3 className="action-title">访问权限确认</h3>
            <p className="action-desc">
              即将接入核心项目档案库。<br/><br/>
              该区域包含我的前端实验与架构展示，部分动画可能会调动较多设备渲染性能。是否确认驶入？
            </p>
            <div className="action-btn-group">
              <button className="btn-cancel" onClick={() => setShowProjectPrompt(false)}>暂不访问</button>
              <a href="#project-anchor" className="btn-confirm" onClick={() => setShowProjectPrompt(false)}>确认授权</a>
            </div>
          </div>
        </div>
      )}

      {/*发送邮箱菜单*/}
      {showOutlook && (
        <div className="action-overlay" onClick={(e) => e.target.className === 'action-overlay' && setShowOutlook(false)}>
          <div className="action-modal">
            <h3 className="action-title">准备发送邮件</h3>
            <p className="action-desc">
              点击下方按钮将唤起您的本地邮箱客户端（或网页版 Outlook）如果点击时没有正确唤醒，请手动发送邮件。
              <br/><br/>
              <span style={{color: 'var(--text-muted)'}}>目标: your-name@outlook.com</span>
            </p>
            <div className="action-btn-group">
              <button className="btn-cancel" onClick={() => setShowOutlook(false)}>取消</button>
              <a href="mailto:your-name@outlook.com" className="btn-confirm">前往发送</a>
            </div>
          </div>
        </div>
      )}

      {/*二维码菜单*/}
      {activeQR && (
        <div className="qr-overlay" onClick={() => setActiveQR(null)}>
          <div className="qr-modal">
            <div className="scan-line"></div>
            <img src={activeQR} alt="qr" />
            <p>扫描二维码建立即时通信</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;