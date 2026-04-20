<script setup>
import teamData from '@/data/members.json'

const members = teamData.members
</script>

<template>
 <div class="members-page">
  <!-- 页面标题区 -->
  <section class="hero">
   <p class="hero-sub">Our Team</p>
   <h1 class="hero-title">团队伙伴</h1>
   <p class="hero-desc">沉静之美，源于每个人的独特与协作</p>
  </section>

  <!-- 成员卡片 -->
  <section class="members-section">
   <div class="card-grid">
    <div
     v-for="(member, index) in members"
     :key="member.name"
     class="member-card"
     :style="{ animationDelay: `${index * 0.15}s` }"
    >
     <div class="card-accent"></div>
     <div class="avatar-wrap">
      <img :src="member.avatar" :alt="member.name" class="avatar" />
     </div>
     <h2 class="member-name">{{ member.name }}</h2>
     <span class="member-role">{{ member.role }}</span>
     <p class="divider"></p>
     <p class="member-bio">{{ member.bio }}</p>
     <div class="member-links" v-if="member.social">
      <a :href="member.social.github" target="_blank" class="social-link" v-if="member.social.github">
       <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
       <span>GitHub</span>
      </a>
      <a :href="'mailto:' + member.social.email" class="social-link" v-if="member.social.email">
       <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
       <span>{{ member.social.email }}</span>
      </a>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>

<style scoped>
/* ===== 莫兰迪配色 ===== */
.members-page {
 --m-bg: #f0ebe3;
 --m-bg-card: #faf8f5;
 --m-bg-accent: #e8dfd5;
 --m-text: #4a4a4a;
 --m-text-muted: #8a8580;
 --m-accent-pink: #c9a9a6;
 --m-accent-blue: #a8b5c4;
 --m-accent-green: #a8b5a0;
 --m-accent-purple: #b5a8c4;
 --m-shadow: rgba(120, 100, 80, 0.08);
}

.members-page {
 min-height: 100vh;
 background: var(--m-bg);
}

/* ===== Hero 区域 ===== */
.hero {
 text-align: center;
 padding: var(--space-xl) var(--space-md) var(--space-lg);
}

.hero-sub {
 font-size: var(--font-sm);
 letter-spacing: 4px;
 text-transform: uppercase;
 color: var(--m-text-muted);
 margin-bottom: var(--space-sm);
}

.hero-title {
 font-size: clamp(28px, 5vw, 42px);
 font-weight: 600;
 color: var(--m-text);
 margin-bottom: var(--space-sm);
 letter-spacing: 2px;
}

.hero-desc {
 font-size: var(--font-base);
 color: var(--m-text-muted);
 font-style: italic;
}

/* ===== 卡片网格 ===== */
.members-section {
 padding: 0 var(--space-lg) var(--space-xl);
 max-width: 1100px;
 margin: 0 auto;
}

.card-grid {
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: var(--space-lg);
}

/* ===== 卡片 ===== */
.member-card {
 background: var(--m-bg-card);
 border-radius: var(--radius-lg);
 padding: var(--space-xl) var(--space-lg);
 text-align: center;
 box-shadow: 0 4px 20px var(--m-shadow);
 position: relative;
 overflow: hidden;
 transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
 box-shadow 0.4s ease;
 animation: cardFadeIn 0.6s ease both;
}

.member-card:hover {
 transform: translateY(-8px);
 box-shadow: 0 12px 40px rgba(120, 100, 80, 0.15);
}

.card-accent {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 height: 4px;
}

.member-card:nth-child(1) .card-accent { background: var(--m-accent-pink); }
.member-card:nth-child(2) .card-accent { background: var(--m-accent-blue); }
.member-card:nth-child(3) .card-accent { background: var(--m-accent-green); }
.member-card:nth-child(4) .card-accent { background: var(--m-accent-purple); }

/* ===== 头像 ===== */
.avatar-wrap {
 width: 100px;
 height: 100px;
 margin: 0 auto var(--space-md);
 border-radius: 50%;
 padding: 3px;
 background: linear-gradient(135deg, var(--m-accent-pink), var(--m-accent-blue));
 transition: transform 0.3s ease;
}

.member-card:hover .avatar-wrap {
 transform: scale(1.05);
}

.avatar {
 width: 100%;
 height: 100%;
 border-radius: 50%;
 object-fit: cover;
 border: 3px solid var(--m-bg-card);
}

/* ===== 文字 ===== */
.member-name {
 font-size: var(--font-xl);
 font-weight: 600;
 color: var(--m-text);
 margin-bottom: 4px;
}

.member-role {
 display: inline-block;
 font-size: var(--font-sm);
 color: var(--m-accent-blue);
 background: rgba(168, 181, 196, 0.12);
 padding: 4px 14px;
 border-radius: 20px;
 letter-spacing: 1px;
}

.divider {
 width: 32px;
 height: 2px;
 background: var(--m-bg-accent);
 margin: var(--space-md) auto;
 border-radius: 1px;
}

.member-bio {
 font-size: var(--font-sm);
 color: var(--m-text-muted);
 line-height: 1.7;
}

/* ===== 社交链接 ===== */
.member-links {
 display: flex;
 justify-content: center;
 gap: 12px;
 margin-top: 14px;
 flex-wrap: wrap;
}

.social-link {
 display: inline-flex;
 align-items: center;
 gap: 6px;
 font-size: var(--font-sm);
 color: var(--m-text-muted);
 text-decoration: none;
 padding: 4px 12px;
 border-radius: 16px;
 background: rgba(168, 181, 196, 0.08);
 transition: color 0.2s, background 0.2s;
}

.social-link:hover {
 color: var(--m-accent-blue);
 background: rgba(168, 181, 196, 0.18);
}

/* ===== 入场动画 ===== */
@keyframes cardFadeIn {
 from {
  opacity: 0;
  transform: translateY(30px);
 }
 to {
  opacity: 1;
  transform: translateY(0);
 }
}

/* ===== 移动端 ===== */
@media (max-width: 768px) {
 .card-grid {
  grid-template-columns: 1fr;
  gap: var(--space-md);
 }

 .hero {
  padding: var(--space-lg) var(--space-md);
 }

 .members-section {
  padding: 0 var(--space-md) var(--space-lg);
 }
}
</style>