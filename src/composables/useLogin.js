// src/composables/useLogin.ts
import { ref } from 'vue';
export function useLogin() {
    const isLoginVisible = ref(false);
    function openLogin() {
        isLoginVisible.value = true;
    }
    function closeLogin() {
        isLoginVisible.value = false;
    }
    return {
        isLoginVisible,
        openLogin,
        closeLogin
    };
}
