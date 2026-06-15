# 句子讲解 · 5.6 寸长条屏交互 Demo

英语句子讲解设备的前端交互演示，物理屏 **1640×348**。由 Figma Make 导出的 React 项目忠实还原为**纯 HTML/CSS/JS**，无构建步骤，双击即开。

## 本地运行

任意静态服务器即可，例如：

```bash
python3 -m http.server 8791
# 浏览器打开 http://127.0.0.1:8791
```

> 直接用 `file://` 打开也能跑，但部分浏览器对本地文件的字体/资源加载有限制，推荐起服务器。

## 屏幕与滚动

- 物理屏固定 `1640×348`，外层容器裁剪（`overflow:hidden`）。
- 每页有自己的 Figma 帧高（见 `js/state.js` 的 `FRAME_HEIGHTS`）；超过 348 的长页面纵向滚动。
- 内容帧设显式高度，使源稿的 `calc(50%)` / 百分比定位 1:1 解析。

## 目录结构

```
index.html          屏幕容器 + 脚本加载顺序
styles.css          reset / 字体 / 通用动画
js/state.js         屏幕尺寸、帧高、共享 SVG 路径与蒙版、全局 state、PAGES 注册表
js/app.js           路由(历史栈)、render 生命周期、事件委托(只绑一次)
js/pages/*.js       12 个页面，各自向 window.PAGES 注册 render()
assets/images/      去重后的源图(28 张)
```

## 页面与跳转

首页 `juzi-shouye` 为入口，热区跳转：

| 入口 | 目标 |
|------|------|
| 去扫描 | `scan` → 3s 自动跳 `result-book` |
| 教材选择图标 | `chooes-3`（选年级/出版社/册别，确定回写首页教材信息）|
| 历史图标 | `lishi`（5 条记录，分别跳 result-the / result-AI / result-book / hunhe / yinwen-chaci）|
| 简介图标 | `jianjie` |

`result-the` 为三页详解流（`result-the1/2/3`），顶部页码、左右箭头、键盘 ←/→ 切换。所有非首页左上角为返回热区。

## 架构要点

- **页面注册表**：每个 `js/pages/*.js` 是一个 IIFE，向 `window.PAGES[key]` 注册 `{ render(), mount?, unmount? }`。
- **事件委托**：`app.js` 在 `contentFrame` 上只绑一次 click，按 `data-action` 分发——切页不累加监听器。
- **生命周期**：切页先调上一页 `unmount()` 清理定时器/键盘监听（`scan` 的自动跳转、`result-the` 的键盘切换），再渲染新页。
