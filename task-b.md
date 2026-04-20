# 成员 B 任务清单

## 基本信息

| 项目 | 内容 |
|------|------|
| 负责文件 | `src/views/MembersView.vue` |
| 页面路由 | `/members` |
| 工作量 | ⭐⭐⭐ 中等 |

---

## 任务目标

设计并实现成员展示页，展示四位团队成员的详细信息。

---

## 功能要求

### 1. 页面标题（必做）

- 标题："团队成员" 或类似
- 简短描述："我们的团队成员" 等

### 2. 成员卡片（必做核心）

每位成员一张卡片，包含：

| 元素 | 数据来源 | 说明 |
|------|----------|------|
| 头像 | `member.avatar` | 圆形或方形，建议 120-150px |
| 姓名 | `member.name` | 卡片标题 |
| 角色 | `member.role` | 如"前端开发" |
| 简介 | `member.bio` | 1-2 句话 |
| 技能标签 | `member.skills` | 数组，展示为标签列表 |
| 负责模块 | `member.responsibility` | 可选展示 |
| GitHub 链接 | `member.social.github` | 可点击图标/链接 |
| Email | `member.social.email` | 可点击图标/链接 |

### 3. 卡片布局（必做）

- **桌面端**：4 张卡片并排（grid，每行 2-4 列）
- **移动端**：单列排列

### 4. 卡片交互（可选）

- hover 效果（阴影、缩放）
- 点击跳转到个人详情页（未来扩展）

---

## 技术要求

### 必须使用

```vue
<script setup>
import teamData from '@/data/members.json'

const members = teamData.members
</script>

<template>
  <div v-for="member in members" :key="member.id">
    <!-- 卡片内容 -->
  </div>
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
--color-bg-card

/* 间距 */
--space-md (16px)
--space-lg (24px)

/* 圆角 */
--radius-lg (12px)
--radius-full (圆形头像)

/* 阴影 */
--shadow-md
--shadow-lg
```

### 响应式

```css
/* Grid 布局示例 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

/* 移动端 */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 布局建议

### 页面结构

```
┌─────────────────────────────────────┐
│           [页面标题]                 │
│          [简短描述]                  │
└─────────────────────────────────────┘

┌──────────┬──────────┬──────────┬──────────┐
│ [头像]    │ [头像]    │ [头像]    │ [头像]    │
│ [姓名]    │ [姓名]    │ [姓名]    │ [姓名]    │
│ [角色]    │ [角色]    │ [角色]    │ [角色]    │
│ [简介]    │ [简介]    │ [简介]    │ [简介]    │
│ [技能]    │ [技能]    │ [技能]    │ [技能]    │
│ [社交]    │ [社交]    │ [社交]    │ [社交]    │
└──────────┴──────────┴──────────┴──────────┘
```

### 卡片内部布局

```
┌─────────────────────┐
│     ┌─────┐         │
│     │头像 │         │
│     └─────┘         │
│                     │
│     [姓名]          │
│     [角色]          │
│                     │
│     [简介]          │
│                     │
│  [标签][标签][标签] │
│                     │
│  [GitHub] [Email]   │
└─────────────────────┘
```

---

## 参考数据

```json
{
  "members": [
    {
      "id": "member-1",
      "name": "姓名",
      "role": "角色",
      "avatar": "/images/members/avatar-1.jpg",
      "bio": "简介",
      "skills": ["Vue", "React", "Node.js"],
      "responsibility": "负责首页",
      "social": {
        "github": "https://github.com/xxx",
        "email": "xxx@example.com"
      }
    }
  ]
}
```

---

## 验收标准

- [ ] 展示四位成员的完整信息
- [ ] 每张卡片包含：头像、姓名、角色、简介、技能、社交链接
- [ ] 桌面端：卡片并排显示（grid）
- [ ] 移动端：卡片单列显示
- [ ] hover 效果（可选）
- [ ] 使用 CSS 变量（无硬编码）
- [ ] 数据从 JSON 循环渲染（无硬编码内容）
- [ ] 样式 scoped 障离

---

## 开发提示

### 给 AI 编程工具的提示

```
请帮我完成 src/views/MembersView.vue 页面的开发。

要求：
1. 展示四位团队成员，使用卡片式布局
2. 每张卡片包含：头像、姓名、角色、简介、技能标签、社交链接
3. 使用 grid 响应式布局：桌面端 2-4 列，移动端单列
4. 卡片有 hover 效果（阴影变化）
5. 使用 CSS 变量：src/styles/variables.css
6. 数据从 src/data/members.json 的 members 数组读取

参考 README.md 的协作指南和 CSS 变量系统。
```

---

## 禁止事项

- ❌ 不要修改其他文件
- ❌ 不要硬编码颜色值
- ❌ 不要硬编码成员信息
- ❌ 不要使用全局样式（必须 scoped）
- ❌ 不要修改 members.json 的数据结构

---

## 完成后

提交 PR 到主仓库，等待监工审查。