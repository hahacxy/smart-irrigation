# TeamVerse - 团队宇宙

## 项目概述

TeamVerse 是一个 Vue 3 + Vite 的团队介绍网站，展示团队成员、项目信息和时间线。

**名字含义**：宇宙（Verse）包容一切——成员、项目、历程，都在这个"团队宇宙"中呈现。

## 技术栈

- **Vue 3**：前端框架
- **Vite**：构建工具
- **Vue Router**：页面路由
- **纯 CSS**：样式（使用 CSS 变量系统）

---

## 任务分配

| 成员 | 文件 | 聟责 |
|------|------|------|
| 成员 A | `src/views/HomeView.vue` | 首页：团队介绍 + 核心亮点 + 导航入口 |
| 成员 B | `src/views/MembersView.vue` | 成员展示：四位成员卡片式布局 |
| 成员 C | `src/views/ProjectView.vue` | 项目介绍：背景 + 目标 + 技术栈 |
| 成员 D | `src/views/TimelineView.vue` | 时间线：里程碑 + 进度可视化 |

---

## 开发流程

### 1. 环境准备

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 2. Fork → 开发 → PR

1. Fork 本仓库到你的账号
2. 创建分支：`git checkout -b feature/你的模块名`
3. 开发你负责的页面（见任务清单）
4. 提交 PR 到主仓库

---

## 必须遵守的规则

### ✅ 使用 CSS 变量

**禁止硬编码颜色/间距！**

```css
/* ✅ 正确 */
.card {
  background: var(--color-bg-card);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
}

/* ❌ 错误 */
.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
}
```

可用变量见 `src/styles/variables.css`。

### ✅ 数据从 JSON 读取

**禁止硬编码内容！**

```vue
<script setup>
import teamData from '@/data/members.json'
const members = teamData.members
</script>

<template>
  <!-- ✅ 正确：从数据渲染 -->
  <h1>{{ teamData.team.name }}</h1>
  
  <!-- ❌ 错误：硬编码 -->
  <h1>我们的团队</h1>
</template>
```

### ✅ 样式隔离

使用 `<style scoped>`，确保样式只作用于当前页面：

```vue
<style scoped>
/* scoped 会自动添加唯一属性，不会影响其他页面 */
.card {
  background: var(--color-bg-card);
}
</style>
```

### ✅ 响应式设计

必须适配移动端（768px 及以下）：

```css
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr; /* 移动端单列 */
  }
}
```

---

## 文件结构

```
src/
├── views/           # 页面（你负责的区域）
│   ├── HomeView.vue       ← 成员 A
│   ├── MembersView.vue    ← 成员 B
│   ├── ProjectView.vue    ← 成员 C
│   └── TimelineView.vue   ← 成员 D
├── components/      # 公共组件（已完成，不要修改）
│   ├── TheHeader.vue
│   └── TheFooter.vue
├── data/
│   └── members.json  # 数据文件（可修改内容，不要修改结构）
├── styles/
│   └── variables.css # CSS 变量（不要修改）
├── router/
│   └── index.js      # 路由配置（不要修改）
├── App.vue           # 根组件（不要修改）
└── main.js           # 入口文件（不要修改）
```

---

## 可修改的文件

| 文件 | 可修改内容 |
|------|-----------|
| `src/views/*.vue` | 完全自由修改（你的页面） |
| `src/data/members.json` | 可修改数据内容（姓名、简介等），不要改结构 |
| `public/images/*` | 可添加图片 |

---

## 不要修改的文件

| 文件 | 原因 |
|------|------|
| `src/components/*` | 公共组件，影响全站 |
| `src/styles/variables.css` | 样式系统，修改会破坏一致性 |
| `src/router/index.js` | 路由配置 |
| `src/App.vue` | 根组件 |
| `src/main.js` | 入口文件 |

---

## PR 检查清单

提交 PR 前，请确认：

- [ ] 使用了 CSS 变量，无硬编码颜色/间距
- [ ] 数据从 `members.json` 读取，无硬编码内容
- [ ] 样式写在 `<style scoped>` 内
- [ ] 移动端（768px 及以下）正常显示
- [ ] 图片有 `alt` 属性
- [ ] 无 `console.log` 残留
- [ ] 只修改了允许修改的文件

---

## 调试建议

### Vue DevTools

安装 Vue DevTools 浏览器扩展，可实时查看组件状态。

### 查看数据

在页面中临时显示数据（调试用）：

```vue
<template>
  <pre>{{ teamData }}</pre>
</template>
```

### 检查样式

在 DevTools 中查看 CSS 变量是否生效：

```css
/* 在 Elements 面板中应该看到 */
background: var(--color-bg-card);
/* 而不是 */
background: #ffffff;
```

---

## 常见问题

### Q: 如何引用图片？

```vue
<template>
  <!-- public 目录下的图片直接用绝对路径 -->
  <img src="/images/members/avatar-1.jpg" alt="成员头像" />
</template>
```

### Q: 如何链接到其他页面？

```vue
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/members">查看成员</RouterLink>
</template>
```

### Q: CSS 变量有哪些？

见 `src/styles/variables.css`，常用：

```css
/* 颜色 */
--color-primary
--color-secondary
--color-text
--color-text-muted
--color-bg
--color-bg-secondary

/* 间距 */
--space-sm (8px)
--space-md (16px)
--space-lg (24px)
--space-xl (32px)

/* 字号 */
--font-sm (14px)
--font-base (16px)
--font-lg (18px)
--font-xl (20px)
--font-2xl (24px)

/* 圆角 */
--radius-md (8px)
--radius-lg (12px)

/* 阴影 */
--shadow-sm
--shadow-md
--shadow-lg
```

---

## 联系监工

有问题在 GitHub Issue 或 PR 评论中提出。

Happy Coding! 🚀