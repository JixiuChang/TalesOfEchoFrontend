<template>
  <!-- Home Header -->
  <section class="home-header">
    <div class="home-header-container">
      <div class="home-header-grid">
        <div class="home-image">
          <img src="@/assets/images/home/vinyl.jpg" alt="Vinyl Record" />
        </div>
        <div class="home-text">
          <h1>{{ $t('homeHeaderText') }}</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="home-about">
    <div class="about-container">
      <h2 class="about-title">{{ $t('homeAboutTitleText') }}</h2>
      <p class="about-subtitle">{{ $t('homeAboutSubtitleText1') }}</p>
      <p class="about-description">{{ $t('homeAboutSubtitleText2') }}</p>

      <div class="about-columns">
        <div class="about-column" v-for="n in 3" :key="n">
          <div
            class="about-image"
            :style="`background-image: url(${getAboutImage(n)})`"
          ></div>
          <h3>{{ $t(`homeAboutTitle${n}`) }}</h3>
          <p>{{ $t(`homeAboutContent${n}`) }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Top 3 -->
  <section class="home-top-3">
    <h2 class="top3-title">{{ $t('homeTop3Title') }}</h2>

    <div class="top3-albums">
      <div class="album-card" v-for="n in 3" :key="n">
        <img :src="getCoverImage(n)" :alt="`Cover ${n}`" />
      </div>
    </div>

    <div class="top3-infos">
      <div class="info-card" v-for="n in 3" :key="n">
        <h4>{{ $t(`homeTop3ArtistName${n}`) }}</h4>
        <p>{{ $t(`homeTop3CoverTitle${n}`) }}</p>
      </div>
    </div>
  </section>

  <!-- Highlights -->
  <section class="home-highlight">
    <div class="highlight-container">
      <div class="highlight-box" v-for="n in 3" :key="n">
        <div class="highlight-number">{{ n }}</div>
        <h3>{{ $t(`homeHighlightTitle${n}`) }}</h3>
        <p>{{ $t(`homeHighlightContent${n}`) }}</p>
        <button class="highlight-btn">
          {{ $t(`homeHighlightButton${n}`) }}
        </button>
      </div>
    </div>
  </section>

  <!-- Hero -->
  <section class="home-hero">
    <div class="hero-content">
      <div class="hero-image-container">
        <img
          src="@/assets/images/home/hero.jpg"
          alt="Hero Image"
          class="hero-image"
        />
      </div>
      <div class="hero-text">
        <h2>{{ $t('heroTextTitle') }}</h2>
        <h4>{{ $t('heroTextContent1') }}</h4>
        <p>{{ $t('heroTextContent2') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function getAboutImage(n: number) {
  return new URL(`@/assets/images/home/about${n}.jpg`, import.meta.url).href;
}

function getCoverImage(n: number) {
  return new URL(`@/assets/images/home/cover${n}.jpg`, import.meta.url).href;
}
</script>
