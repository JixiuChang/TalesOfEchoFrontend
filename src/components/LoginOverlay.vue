<template>
  <div id="loginOverlay">
    <button id="closeOverlay" class="close-btn" @click="$emit('close')">✕</button>
    <div class="login-box">
      <h2>登录 Login</h2>
      <input type="text" placeholder="用户名 / Username">
      <input type="password" placeholder="密码 / Password">
      <button class="submit-btn">登录</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
