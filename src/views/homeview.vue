<script setup>
/**
 * HomeView.vue - 首页
 * 
 * 任务：设计并实现首页内容
 * 
 * 要求：
 * 1. 展示团队介绍、核心亮点
 * 2. 提供清晰的导航入口
 * 3. 响应式设计（移动端适配）
 * 4. 使用 CSS 变量（src/styles/variables.css）
 * 5. 数据从 members.json 读取
 * 
 * 参考：
 * - teamData.team.name（团队名称）
 * - teamData.team.slogan（团队口号）
 * - teamData.team.description（团队简介）
 */

import teamData from '@/data/members.json'

// TODO: 在此处添加你的逻辑
</script>

<template>
  <section class="home">
    <div class="container">
      <!-- TODO: 实现首页内容 -->
      
      <!-- 建议结构：
        1. Hero 区域：团队名称 + 口号 + 简介
        2. 核心亮点：展示团队的 3-4 个特点
        3. 导航入口：引导用户进入其他页面
        4. 成员预览：简短展示四位成员
      -->
      
      <div class="placeholder">
        <h1>首页内容待实现</h1>
        <p>请参考 README.md 中的任务清单完成此页面</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 60px);
  padding: var(--space-3xl) 0;
}

/* TODO: 实现你的样式 */

/* 示例：使用 CSS 变量 */
.container {
  /* 已在 variables.css 中定义 */
}

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
}

/* 响应式断点参考：
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1200px
*/
</style>