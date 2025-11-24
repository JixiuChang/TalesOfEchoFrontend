import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['open-login']);
function onLoginClick() {
    emit('open-login');
}
function onLangChange(e) {
    const target = e.target;
    localStorage.setItem('lang', target.value);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "main-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "float-btn lang-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.onLangChange) },
    value: (__VLS_ctx.$i18n.locale),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "zh",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "en",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "logo-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "site-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "site-subtitle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "float-btn login-btn" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onLoginClick) },
});
(__VLS_ctx.$t('loginButtonText'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bottom-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "nav-tabs" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-list" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "nav-tab" },
    to: "/",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "nav-tab" },
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
(__VLS_ctx.$t('homeTab'));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-AI-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "nav-tab nav-tab-list" },
});
(__VLS_ctx.$t('AiTab'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-dropdown" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "nav-tab" },
    to: "/AI-music",
}));
const __VLS_6 = __VLS_5({
    ...{ class: "nav-tab" },
    to: "/AI-music",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
(__VLS_ctx.$t('AiMusicTab'));
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ class: "nav-tab" },
    to: "/AI-separate",
}));
const __VLS_10 = __VLS_9({
    ...{ class: "nav-tab" },
    to: "/AI-separate",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
(__VLS_ctx.$t('AiSeparateTab'));
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_12 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: "nav-tab" },
    to: "/AI-breakdown",
}));
const __VLS_14 = __VLS_13({
    ...{ class: "nav-tab" },
    to: "/AI-breakdown",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
(__VLS_ctx.$t('AiBreakdownTab'));
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_16 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "nav-tab" },
    to: "/release",
}));
const __VLS_18 = __VLS_17({
    ...{ class: "nav-tab" },
    to: "/release",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
(__VLS_ctx.$t('releaseTab'));
var __VLS_19;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-production-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "nav-tab nav-tab-list" },
});
(__VLS_ctx.$t('productionTab'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-dropdown" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_20 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ class: "nav-tab" },
    to: "/production-original",
}));
const __VLS_22 = __VLS_21({
    ...{ class: "nav-tab" },
    to: "/production-original",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
(__VLS_ctx.$t('productionOriginalTab'));
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_24 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    ...{ class: "nav-tab" },
    to: "/production-editing",
}));
const __VLS_26 = __VLS_25({
    ...{ class: "nav-tab" },
    to: "/production-editing",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
(__VLS_ctx.$t('productionEditingTab'));
var __VLS_27;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_28 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ class: "nav-tab" },
    to: "/production-soundtrack",
}));
const __VLS_30 = __VLS_29({
    ...{ class: "nav-tab" },
    to: "/production-soundtrack",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
(__VLS_ctx.$t('productionSoundtrackTab'));
var __VLS_31;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_32 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ class: "nav-tab" },
    to: "/submission",
}));
const __VLS_34 = __VLS_33({
    ...{ class: "nav-tab" },
    to: "/submission",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
(__VLS_ctx.$t('submissionTab'));
var __VLS_35;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-proposal-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "nav-tab nav-tab-list" },
});
(__VLS_ctx.$t('proposalTab'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-dropdown" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_36 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ class: "nav-tab" },
    to: "/proposal-copyright",
}));
const __VLS_38 = __VLS_37({
    ...{ class: "nav-tab" },
    to: "/proposal-copyright",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
(__VLS_ctx.$t('proposalCopyrightTab'));
var __VLS_39;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_40 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    ...{ class: "nav-tab" },
    to: "/proposal-film",
}));
const __VLS_42 = __VLS_41({
    ...{ class: "nav-tab" },
    to: "/proposal-film",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
(__VLS_ctx.$t('proposalFilmTab'));
var __VLS_43;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_44 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    ...{ class: "nav-tab" },
    to: "/proposal-cooperation",
}));
const __VLS_46 = __VLS_45({
    ...{ class: "nav-tab" },
    to: "/proposal-cooperation",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
(__VLS_ctx.$t('proposalCooperationTab'));
var __VLS_47;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_48 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    ...{ class: "nav-tab" },
    to: "/merchandise",
}));
const __VLS_50 = __VLS_49({
    ...{ class: "nav-tab" },
    to: "/merchandise",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
(__VLS_ctx.$t('merchandiseTab'));
var __VLS_51;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-about-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#",
    ...{ class: "nav-tab nav-tab-list" },
});
(__VLS_ctx.$t('aboutTab'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "nav-dropdown" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_52 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    ...{ class: "nav-tab" },
    to: "/about-intro",
}));
const __VLS_54 = __VLS_53({
    ...{ class: "nav-tab" },
    to: "/about-intro",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
(__VLS_ctx.$t('aboutIntroTab'));
var __VLS_55;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_56 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    ...{ class: "nav-tab" },
    to: "/about-artists",
}));
const __VLS_58 = __VLS_57({
    ...{ class: "nav-tab" },
    to: "/about-artists",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
(__VLS_ctx.$t('aboutArtistsTab'));
var __VLS_59;
/** @type {__VLS_StyleScopedClasses['main-header']} */ ;
/** @type {__VLS_StyleScopedClasses['top-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['float-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['lang-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-center']} */ ;
/** @type {__VLS_StyleScopedClasses['site-title']} */ ;
/** @type {__VLS_StyleScopedClasses['site-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['float-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['login-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-AI-container']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-production-container']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-proposal-container']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-about-container']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab-list']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tab']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            onLoginClick: onLoginClick,
            onLangChange: onLangChange,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
