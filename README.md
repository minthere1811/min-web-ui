# Min-web-ui

> **一个基于React 18 / Vite构建的一个网站UI** > A futuristic, high-interaction portfolio built with React & Vite.

## 鸣谢 (Acknowledgements)
本项目的顺利完成，离不开以下优秀开源项目与技术的驱动：
<br>[React](https://react.dev/) - 用于构建用户界面的核心框架。<br/>
<br>[Vite](https://vite.dev/) - 提供极速开发体验的下一代前端构建工具。<br/>
<br>[Node.js](https://nodejs.org/) - 支撑整个前端开发环境的运行运行时。<br/>
<br>[Nginx](https://nginx.org/) - 驱动生产环境的高性能 Web 服务器。<br/>
<br>[宝塔面板](https://www.bt.cn/new/index.html) - 让运维变得极其简单的服务器管理面板。<br/>
<br>**排名不分先后**<br/>

## 预览图 (Screenshots)
| 主页(暗) | 主页(亮) |
| :---: | :---: |
| ![01](public/zh-N.png) | ![02](public/zh-L.png) |
| 项目展示(暗) | 项目展示(亮) |
| ![03](public/zo-N.png) | ![04](public/zo-L.png) |
| 页脚(暗) | 页脚(亮) |
| ![05](public/di-N.png) | ![06](public/di-L.png) |
---

## 项目亮点 (Features)

* **极致双色模式**：支持深色（Dark）与浅色（Light）模式的平滑切换，适配不同光线环境。
* **动态交互体验**：自研基于 CSS 变量的鼠标追踪光晕效果，增强视觉沉浸感。
* **核心项目展示**：
* **响应式架构**：完美适配从 4K 超宽屏到移动端的全设备访问。

## 技术栈 (Tech Stack)

| 类别 | 技术 |
| :--- | :--- |
| **框架** | React 18 / Vite |
| **样式** | 原生 CSS (Custom Properties) / Glassmorphism |
| **工具** | Git / Node.js / Pagoda Panel |

## 快速开始 (Quick Start)

一、如果想要在本地运行这个项目

1. **克隆仓库**
```
git clone https://github.com/minthere1811/minthere-portfolio.git
```
2. **安装依赖**
```
cd your-repo-name
npm install
```
3. **启动开发服务器**
```
npm run dev
```
二、部署到服务器中

1. **按照一线保存到本地**
2. **本地生成优化的静态资源文件**
```
npm run build
```
**执行后，项目根目录下会生成一个 dist 文件夹，这就是我们需要上传到服务器的核心文件。**

3. **通过 Nginx/宝塔面板部署**
<br>①上传文件：将本地生成的 dist 文件夹内的所有内容上传到服务器的目标目录<br/>
<br>②创建站点：在宝塔面板中新建站点，并将域名指向该目录。<br/>
<br>③**配置伪静态**必做：由于项目可能使用前端路由，为了防止刷新页面出现 404，请在 Nginx 配置文件中添加以下代码：<br/>
```
location / {
  root   /www/wwwroot/your-portfolio; # 你的项目路径
  index  index.html index.htm;
  try_files $uri $uri/ /index.html; # 支持 React Router 模式
}
```

## 常见问题排查 (Troubleshooting)
1. **图片不显示** 请确保 public 文件夹下的图片（如 01.png 等）已正确上传至服务器根目录对应的位置。
2. **HTTPS 配置** 建议通过宝塔面板一键申请 Let's Encrypt SSL 证书，以开启网站的 HTTPS 访问，提升安全性。

## 联络方式 (Contact)
如果您对我的项目感兴趣，或有意见，欢迎通过以下方式联系，由于本人是学生，回复不仅是请谅解：
| GitHub: @minthere1811 | Email: s138159@outlook.com | WeChat：Minthere0714（备注Github）|
| :--- | :--- | :--- |
