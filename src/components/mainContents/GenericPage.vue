<template>
  <div class="generic-page">
    <h1>{{ $t(routeName) }}</h1>
    <p>Content coming soon...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeName = computed(() => route.name as string || '');
</script>

<style scoped>
.generic-page {
  padding: 120px 20px;
  text-align: center;
  min-height: 60vh;
  color: #fff; /* Assuming dark theme based on style.css usually found in such sites */
}
</style>
