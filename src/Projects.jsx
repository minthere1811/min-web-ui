{/*
  
  此文件是配置项目区域的文件 如果不想要 可以把这个文件和project.css文件删除
  
  */}
import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: '01', title: "你的项目01", category: "AI / TOUR", link: "#" },  
  { id: '02', title: "你的项目02", category: "AI / LIVE", link: "#" },
  { id: '03', title: "你的项目03", category: "FREEDOM / LIVE", link: "#" }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="v3-projects" id="project-anchor">
      <div className="v3-header">
        <span className="label">PORTFOLIO</span>
        <h2>核心项目库</h2>
      </div>
      
      <div className="v3-list">
        {projectsData.map((project) => (
          <div 
            className="v3-card" 
            key={project.id}
            onClick={() => setActiveProject(project)}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(5, 17, 5, 0.95) 0%, rgba(5, 17, 5, 0.2) 100%), url("/${project.id}.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="v3-content">
              <span className="v3-id">{project.id}</span>
              <h3>{project.title}</h3>
              <div className="v3-tags">{project.category}</div>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="action-overlay" onClick={(e) => e.target.className === 'action-overlay' && setActiveProject(null)}>
          <div className="action-modal">
            <h3 className="action-title">外部链路警告</h3>
            <p className="action-desc">
              您即将离开 XXXXX 的个人站点，前往外部沙盒查看项目：<br/><br/>
              <strong style={{color: 'var(--text-main)', fontSize: '15px'}}>{activeProject.title}</strong><br/><br/>
              外部环境可能存在未知的加载延迟，是否继续前往？
            </p>
            <div className="action-btn-group">
              <button className="btn-cancel" onClick={() => setActiveProject(null)}>取消</button>
              <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="btn-confirm" onClick={() => setActiveProject(null)}>继续前往</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}