# 成员 C 任务清单

## 基本信息

| 项目 | 内容 |
|------|------|
| 负责文件 | `src/views/ProjectView.vue` |
| 页面路由 | `/project` |
| 工作量 | ⭐⭐⭐ 中等 |

---

## 任务目标

设计并实现项目介绍页，展示项目背景、目标和技术栈。

---

## 功能要求

### 1. 项目标题与简介（必做）

- **项目名称**：从 `teamData.project.name` 读取
- **项目简介**：从 `teamData.project.description` 读取
- **开始日期**：从 `teamData.project.startDate` 读取（可选展示）

### 2. 项目目标（必做）

- 从 `teamData.project.goals` 数组读取
- 展示为列表或卡片形式
- 建议：编号列表 + 简短描述

### 3. 技术栈展示（必做）

- 从 `teamData.project.techStack` 数组读取
- 展示为标签或卡片形式
- 建议：图标 + 名称（如果可用图标）

### 4. 项目背景（可选）

补充项目背景信息、为什么做这个项目等（可在 JSON 中补充）。

---

## 技术要求

### 必须使用

```vue
<script setup>
import teamData from '@/data/members.json'

const project = teamData.project
</script>

<template>
  <!-- 使用 project.name, project.description, project.goals, project.techStack -->
</template>
```

### CSS 变量

```css
/* 颜色 */
--color-primary
--color-secondary
--color-accent
--color-text
--color-text-muted
--color-bg
--color-bg-secondary

/* 间距 */
--space-md (16px)
--space-lg (24px)
--space-xl (32px)

/* 圆角 */
--radius-md (8px)
--radius-lg (12px)

/* 阴影 */
--shadow-md
```

### 响应式

```css
/* 技术栈 grid 布局 */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-md);
}

/* 移动端 */
@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 布局建议

### 页面结构

```
┌─────────────────────────────────────┐
│           [项目名称]                 │
│                                     │
│          [项目简介]                  │
│                                     │
│          [开始日期]                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│           项目目标                   │
├─────────────────────────────────────┤
│  1. 目标一                          │
│  2. 目标二                          │
│  3. 目标三                          │
└─────────────────────────────────────┘

┌──────────┬──────────┬──────────┬─────┐
│  [技术1] │  [技术2] │  [技术3] │ ... │
└──────────┴──────────┴──────────┴─────┘
```

### 技术栈卡片

```
┌─────────────┐
│   [图标]     │
│   Vue 3     │
└─────────────┘
```

---

## 参考数据

```json
{
  "project": {
    "name": "项目名称",
    "description": "项目简介",
    "startDate": "2026-03-01",
    "techStack": ["Vue 3", "Vite", "JavaScript"],
    "goals": [
      "目标1",
      "目标2",
      "目标3"
    ]
  }
}
```

---

## 验收标准

- [ ] 展示项目名称、简介
- [ ] 展示项目目标列表
- [ ] 展示技术栈（标签或卡片）
- [ ] 响应式设计（移动端正常）
- [ ] 使用 CSS 变量（无硬编码）
- [ ] 数据从 JSON 读取（无硬编码内容）
- [ ] 样式 scoped 障离

---

## 开发提示

### 给 AI 编程工具的提示

```
请帮我完成 src/views/ProjectView.vue 页面的开发。

要求：
1. 展示项目名称、简介、开始日期
2. 展示项目目标列表（从 goals 数组读取）
3. 展示技术栈（从 techStack 数组读取），使用标签或卡片形式
4. 响应式设计：适配移动端
5. 使用 CSS 变量：src/styles/variables.css
6. 数据从 src/data/members.json 的 project 对象读取

参考 README.md 的协作指南和 CSS 变量系统。
```

---

## 禁止事项

- ❌ 不要修改其他文件
- ❌ 不要硬编码颜色值
- ❌ 不要硬编码项目信息
- ❌ 不要使用全局样式（必须 scoped）
- ❌ 不要修改 members.json 的数据结构

---

## 完成后

提交 PR 到主仓库，等待监工审查。