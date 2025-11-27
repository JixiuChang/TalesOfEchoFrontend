<template>
  <header class="main-header">
    <!-- Top bar. Lang left, Logo middle, Login right -->
    <div class="top-bar">
      <div class="float-btn lang-btn">
        <select v-model="$i18n.locale" @change="onLangChange">
          <option value="zh">简体中文</option>
          <option value="en">English</option>
        </select>
      </div>

      <div class="logo-center">
        <h1 class="site-title">Tales of Echo</h1>
        <p class="site-subtitle">— Attitude・Innovate・Stories —</p>
      </div>

      <div class="float-btn login-btn">
        <button @click="onLoginClick">{{ $t('loginButtonText') }}</button>
      </div>
    </div>

    <!-- Bottom bar with nav & user actions -->
    <div class="bottom-bar">
      <nav class="nav-tabs">
        <ul class="nav-list">
          <li>
            <RouterLink class="nav-tab" to="/">{{ $t('homeTab') }}</RouterLink>
          </li>

          <li class="nav-AI-container">
            <a href="#" class="nav-tab nav-tab-list">{{ $t('AiTab') }}</a>
            <ul class="nav-dropdown">
              <li><RouterLink class="nav-tab" to="/AI-music">{{ $t('AiMusicTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/AI-separate">{{ $t('AiSeparateTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/AI-breakdown">{{ $t('AiBreakdownTab') }}</RouterLink></li>
            </ul>
          </li>

          <li><RouterLink class="nav-tab" to="/release">{{ $t('releaseTab') }}</RouterLink></li>

          <li class="nav-production-container">
            <a href="#" class="nav-tab nav-tab-list">{{ $t('productionTab') }}</a>
            <ul class="nav-dropdown">
              <li><RouterLink class="nav-tab" to="/production-original">{{ $t('productionOriginalTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/production-editing">{{ $t('productionEditingTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/production-soundtrack">{{ $t('productionSoundtrackTab') }}</RouterLink></li>
            </ul>
          </li>

          <li><RouterLink class="nav-tab" to="/submission">{{ $t('submissionTab') }}</RouterLink></li>

          <li class="nav-proposal-container">
            <a href="#" class="nav-tab nav-tab-list">{{ $t('proposalTab') }}</a>
            <ul class="nav-dropdown">
              <li><RouterLink class="nav-tab" to="/proposal-copyright">{{ $t('proposalCopyrightTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/proposal-cooperation">{{ $t('proposalCooperationTab') }}</RouterLink></li>
            </ul>
          </li>

          <li><RouterLink class="nav-tab" to="/merchandise">{{ $t('merchandiseTab') }}</RouterLink></li>

          <li class="nav-about-container">
            <a href="#" class="nav-tab nav-tab-list">{{ $t('aboutTab') }}</a>
            <ul class="nav-dropdown">
              <li><RouterLink class="nav-tab" to="/about-intro">{{ $t('aboutIntroTab') }}</RouterLink></li>
              <li><RouterLink class="nav-tab" to="/about-artists">{{ $t('aboutArtistsTab') }}</RouterLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function onLoginClick() {
  // 这里你可以触发登录弹窗或者跳转到登录页
  console.log('Login button clicked');
}

function onLangChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  localStorage.setItem('lang', target.value);
}
</script>
