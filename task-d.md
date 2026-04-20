# 成员 D 任务清单

## 基本信息

| 项目 | 内容 |
|------|------|
| 负责文件 | `src/views/TimelineView.vue` |
| 页面路由 | `/timeline` |
| 工作量 | ⭐⭐⭐ 中等 |

---

## 任务目标

设计并实现项目时间线页，展示项目里程碑和进度可视化。

---

## 功能要求

### 1. 页面标题（必做）

- 标题："项目时间线" 或类似
- 简短描述："我们的项目历程" 等

### 2. 时间线可视化（必做核心）

每位里程碑一个节点，包含：

| 元素 | 数据来源 | 说明 |
|------|----------|------|
| 日期 | `milestone.date` | 格式化显示（如 "2026年3月1日"） |
| 标题 | `milestone.title` | 里程碑名称 |
| 描述 | `milestone.description` | 简短描述 |
| 状态 | `milestone.status` | completed / in-progress / pending |

### 3. 状态区分（必做）

三种状态需要视觉区分：

| 状态 | 中文名 | 视觉建议 |
|------|--------|----------|
| `completed` | 已完成 | 绿色圆点 + 实线 |
| `in-progress` | 进行中 | 蓝色圆点 + 虚线/动画 |
| `pending` | 待开始 | 灰色圆点 + 虚线 |

### 4. 布局方式（推荐垂直时间线）

```
  ●  里程碑1（已完成）
  │
  ●  里程碑2（已完成）
  │
  ◐  里程碑3（进行中）
  │
  ○  里程碑4（待开始）
```

---

## 技术要求

### 必须使用

```vue
<script setup>
import teamData from '@/data/members.json'

const timeline = teamData.timeline

// 状态样式计算
function getStatusClass(status) {
  return {
    'status-completed': status === 'completed',
    'status-in-progress': status === 'in-progress',
    'status-pending': status === 'pending'
  }
}

// 日期格式化（可选）
function formatDate(dateStr) {
  const date = new Date(dateStr)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}
</script>

<template>
  <div 
    v-for="milestone in timeline" 
    :key="milestone.id"
    :class="getStatusClass(milestone.status)"
  >
    <!-- 时间线节点 -->
  </div>
</template>
```

### CSS 变量

```css
/* 状态色 */
--color-success (#22c55e)  /* 已完成 */
--color-primary (#3b82f6)  /* 进行中 */
--color-text-light (#9ca3af)  /* 待开始 */

/* 间距 */
--space-md (16px)
--space-lg (24px)

/* 圆角 */
--radius-full (圆形节点)

/* 阴影 */
--shadow-md
```

### 响应式

```css
/* 时间线布局 */
.timeline-container {
  position: relative;
  padding-left: var(--space-xl); /* 左侧留空间给时间线 */
}

/* 移动端 */
@media (max-width: 768px) {
  .timeline-container {
    padding-left: var(--space-lg);
  }
}
```

---

## 布局建议

### 垂直时间线结构

```
┌─────────────────────────────────────┐
│           [页面标题]                 │
└─────────────────────────────────────┘

        ┌──── 时间线主体 ────┐
        
    ●───┬─── 2026年3月1日
    │   │    [里程碑标题]
    │   │    [描述]
    │   │    ✓ 已完成
    │   │
    ●───┬─── 2026年3月15日
    │   │    [里程碑标题]
    │   │    [描述]
    │   │    ✓ 已完成
    │   │
    ◐───┬─── 2026年4月1日
    │   │    [里程碑标题]
    │   │    [描述]
    │   │    ⟳ 进行中
    │   │
    ○───┬─── 2026年4月15日
    │   │    [里程碑标题]
    │   │    [描述]
    │   │    ○ 待开始
```

### 时间线节点样式

```
左边：垂直连接线
中间：状态圆点
右边：里程碑信息卡片
```

---

## 参考数据

```json
{
  "timeline": [
    {
      "id": "milestone-1",
      "date": "2026-03-01",
      "title": "项目启动",
      "description": "团队组建，确定项目方向",
      "status": "completed"
    },
    {
      "id": "milestone-2",
      "date": "2026-03-15",
      "title": "需求分析完成",
      "description": "完成用户调研和需求文档",
      "status": "completed"
    },
    {
      "id": "milestone-3",
      "date": "2026-04-01",
      "title": "设计阶段",
      "description": "UI设计和技术架构设计",
      "status": "in-progress"
    },
    {
      "id": "milestone-4",
      "date": "2026-04-15",
      "title": "开发阶段",
      "description": "核心功能开发",
      "status": "pending"
    },
    {
      "id": "milestone-5",
      "date": "2026-05-01",
      "title": "测试上线",
      "description": "测试、修复bug、正式发布",
      "status": "pending"
    }
  ]
}
```

---

## 验收标准

- [ ] 展示所有里程碑节点
- [ ] 每个节点包含：日期、标题、描述、状态
- [ ] 三种状态有明显的视觉区分
- [ ] 时间线有连接线（实线/虚线）
- [ ] 响应式设计（移动端正常）
- [ ] 使用 CSS 变量（无硬编码）
- [ ] 数据从 JSON 循环渲染（无硬编码内容）
- [ ] 样式 scoped 障离

---

## 开发提示

### 给 AI 编程工具的提示

```
请帮我完成 src/views/TimelineView.vue 页面的开发。

要求：
1. 展示项目时间线，使用垂直时间线布局
2. 每个里程碑包含：日期、标题、描述、状态
3. 三种状态（completed/in-progress/pending）有视觉区分：
   - completed：绿色圆点 + 实线连接
   - in-progress：蓝色圆点 + 虚线连接
   - pending：灰色圆点 + 虚线连接
4. 日期格式化为 "YYYY年M月D日" 格式
5. 响应式设计：适配移动端
6. 使用 CSS 变量：src/styles/variables.css
7. 数据从 src/data/members.json 的 timeline 数组读取

参考 README.md 的协作指南和 CSS 变量系统。
```

---

## 禁止事项

- ❌ 不要修改其他文件
- ❌ 不要硬编码颜色值
- ❌ 不要硬编码里程碑信息
- ❌ 不要使用全局样式（必须 scoped）
- ❌ 不要修改 members.json 的数据结构

---

## 完成后

提交 PR 到主仓库，等待监工审查。