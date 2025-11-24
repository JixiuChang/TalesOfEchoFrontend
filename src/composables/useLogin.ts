// src/composables/useLogin.ts
import { Ref, ref } from 'vue';

export function useLogin() {
  const isLoginVisible: Ref<boolean> = ref(false);

  function openLogin(): void {
    isLoginVisible.value = true;
  }

  function closeLogin(): void {
    isLoginVisible.value = false;
  }

  return {
    isLoginVisible,
    openLogin,
    closeLogin
  };
}
