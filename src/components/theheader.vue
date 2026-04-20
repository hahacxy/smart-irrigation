<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import teamData from '@/data/members.json'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { path: '/', name: '首页' },
  { path: '/members', name: '成员' },
  { path: '/project', name: '项目' },
  { path: '/timeline', name: '时间线' }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header-inner container">
      <!-- Logo / 团队名称 -->
      <RouterLink to="/" class="logo" @click="closeMenu">
        <img 
          v-if="teamData.team.logo" 
          :src="teamData.team.logo" 
          :alt="teamData.team.name"
          class="logo-img"
        />
        <span class="logo-text">{{ teamData.team.name }}</span>
      </RouterLink>

      <!-- 导航链接 -->
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ 'nav-link-active': route.path === link.path }"
          @click="closeMenu"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button 
        class="menu-toggle" 
        @click="toggleMenu"
        :aria-label="isMenuOpen ? '关闭菜单' : '打开菜单'"
      >
        <span class="menu-icon" :class="{ 'menu-icon-open': isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text);
  font-weight: 600;
  font-size: var(--font-lg);
}

.logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.logo-text {
  transition: color var(--transition-base);
}

.logo:hover .logo-text {
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: var(--space-lg);
}

.nav-link {
  color: var(--color-text-muted);
  font-weight: 500;
  font-size: var(--font-base);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-bg-secondary);
}

.nav-link-active {
  color: var(--color-primary);
  background-color: var(--color-bg-secondary);
}

/* ===== 移动端 ===== */
.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  padding: var(--space-sm);
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  position: relative;
  transition: background-color var(--transition-base);
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: transform var(--transition-base);
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

.menu-icon-open {
  background-color: transparent;
}

.menu-icon-open::before {
  transform: rotate(45deg) translate(5px, 6px);
}

.menu-icon-open::after {
  transform: rotate(-45deg) translate(5px, -6px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-md);
    gap: var(--space-sm);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    display: block;
    padding: var(--space-md);
    text-align: center;
  }
}
</style>