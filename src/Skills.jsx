{/*
  
  此文件是配置下方跑马灯的文件 如果不想要 可以把这个文件和project.css文件删除
  
  */}
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

{/*右侧进度条的内容 可根据实际内容按需修改*/}
const skillsData = [
  { name: 'GSAP 动画库', desc: '强大的前端网页交互动画引擎', percent: 85, icon: '❁' },
  { name: 'VS Code', desc: '极其优秀的代码开发环境', percent: 100, icon: '⌨' },
  { name: 'Photoshop', desc: 'Adobe 像素图形与UI设计工具', percent: 60, icon: 'Ps' }
];

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      barsRef.current.forEach((bar, index) => {
        gsap.fromTo(bar, 
          { width: '0%' }, 
          {
            width: `${skillsData[index].percent}%`, duration: 1.5, ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 85%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-text">
          <span className="section-tag">工具与技能</span>
          <h2>我的创意<br/>工具箱</h2>
        </div>

        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-info">
                <div className="skill-title">
                  <span className="skill-icon">{skill.icon}</span>
                  <div>
                    <h4>{skill.name}</h4>
                    <p>{skill.desc}</p>
                  </div>
                </div>
                <span className="skill-percent-text">{skill.percent}%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" ref={el => barsRef.current[index] = el}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*下方跑马灯内容*/}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span>❁ 极客精神</span><span>❁ 自由</span><span>❁ 无限进步</span><span>❁ 智能生态</span><span>❁ 科技爱好者</span>
        </div>
        <div className="marquee-track" aria-hidden="true">
          <span>❁ 极客精神</span><span>❁ 自由</span><span>❁ 无限进步</span><span>❁ 智能生态</span><span>❁ 科技爱好者</span>
        </div>
      </div>
    </section>
  );
}