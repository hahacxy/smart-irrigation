<script setup>
/**
 * TimelineView.vue - 时间线页
 * 
 * 任务：设计并实现项目时间线页
 * 
 * 要求：
 * 1. 展示项目里程碑和进度
 * 2. 时间线可视化（垂直或水平）
 * 3. 每个里程碑包含：日期、标题、描述、状态
 * 4. 状态区分：已完成 / 进行中 / 待开始
 * 5. 响应式设计（移动端适配）
 * 6. 使用 CSS 变量（src/styles/variables.css）
 * 7. 数据从 members.json 读取
 * 
 * 参考：
 * - teamData.timeline（里程碑数组）
 *   - milestone.date（日期）
 *   - milestone.title（标题）
 *   - milestone.description（描述）
 *   - milestone.status（状态：completed / in-progress / pending）
 */

import teamData from '@/data/members.json'

const timeline = teamData.timeline

// TODO: 在此处添加你的逻辑

// 建议添加状态样式计算函数
function getStatusClass(status) {
  return {
    'status-completed': status === 'completed',
    'status-in-progress': status === 'in-progress',
    'status-pending': status === 'pending'
  }
}
</script>

<template>
  <section class="timeline">
    <div class="container">
      <!-- TODO: 实现时间线内容 -->
      
      <!-- 建议结构：
        1. 页面标题："项目时间线"
        2. 时间线可视化：
           - 垂直时间线（推荐）：从上到下按时间顺序
           - 每个节点：日期 + 标题 + 描述 + 状态指示
        3. 状态指示：
           - 已完成：绿色圆点 + 实线连接
           - 进行中：蓝色圆点 + 虚线连接
           - 待开始：灰色圆点 + 虚线连接
      -->
      
      <div class="placeholder">
        <h1>时间线页待实现</h1>
        <p>展示项目的里程碑和进度</p>
        <pre>timeline 数据：{{ timeline }}</pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  min-height: calc(100vh - 60px);
  padding: var(--space-3xl) 0;
}

/* TODO: 实现你的样式 */

.placeholder {
  text-align: center;
  padding: var(--space-2xl);
  color: var(--color-text-muted);
}

.placeholder h1 {
  font-size: var(--font-3xl);
  margin-bottom: var(--space-md);
}

.placeholder p {
  font-size: var(--font-lg);
  margin-bottom: var(--space-lg);
}

.placeholder pre {
  font-size: var(--font-sm);
  text-align: left;
  background: var(--color-bg-secondary);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
}

/* 响应式断点参考：
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1200px
*/
</style>