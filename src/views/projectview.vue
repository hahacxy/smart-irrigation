<script setup>
/**
 * ProjectView.vue - 项目介绍页
 * 
 * 任务：设计并实现项目介绍页
 * 
 * 要求：
 * 1. 展示项目背景、目标、技术栈
 * 2. 清晰的项目信息结构
 * 3. 响应式设计（移动端适配）
 * 4. 使用 CSS 变量（src/styles/variables.css）
 * 5. 数据从 members.json 读取
 * 
 * 参考：
 * - teamData.project.name（项目名称）
 * - teamData.project.description（项目简介）
 * - teamData.project.startDate（开始日期）
 * - teamData.project.techStack（技术栈数组）
 * - teamData.project.goals（目标数组）
 */

import teamData from '@/data/members.json'

const project = teamData.project

// TODO: 在此处添加你的逻辑
</script>

<template>
  <section class="project">
    <div class="container">
      <!-- TODO: 实现项目介绍内容 -->
      
      <!-- 建议结构：
        1. 项目标题 + 简介
        2. 项目目标列表
        3. 技术栈展示
        4. 项目时间信息
      -->
      
      <div class="placeholder">
        <h1>项目介绍页待实现</h1>
        <p>展示项目的背景、目标和技术栈</p>
        <pre>project 数据：{{ project }}</pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
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