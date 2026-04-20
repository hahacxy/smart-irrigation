<script setup>
import teamData from '@/data/members.json'
</script>

<template>
  <footer class="footer">
    <div class="footer-inner container">
      <!-- 团队信息 -->
      <div class="footer-info">
        <p class="footer-name">{{ teamData.team.name }}</p>
        <p class="footer-slogan">{{ teamData.team.slogan }}</p>
      </div>

      <!-- 快速链接 -->
      <nav class="footer-nav">
        <a href="/" class="footer-link">首页</a>
        <a href="/members" class="footer-link">成员</a>
        <a href="/project" class="footer-link">项目</a>
        <a href="/timeline" class="footer-link">时间线</a>
      </nav>

      <!-- 版权信息 -->
      <div class="footer-copyright">
        <p>&copy; 2026 {{ teamData.team.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: var(--space-2xl) 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  text-align: center;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.footer-name {
  font-size: var(--font-xl);
  font-weight: 600;
}

.footer-slogan {
  font-size: var(--font-sm);
  color: var(--color-text-muted);
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
}

.footer-link {
  color: var(--color-text-light);
  font-size: var(--font-sm);
  transition: color var(--transition-base);
}

.footer-link:hover {
  color: var(--color-primary-light);
}

.footer-copyright {
  font-size: var(--font-xs);
  color: var(--color-text-light);
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer-nav {
    flex-wrap: wrap;
    gap: var(--space-md);
  }
}
</style>