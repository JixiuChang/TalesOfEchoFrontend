function getAboutImage(n) {
    return new URL(`@/assets/images/home/about${n}.jpg`, import.meta.url).href;
}
function getCoverImage(n) {
    return new URL(`@/assets/images/home/cover${n}.jpg`, import.meta.url).href;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-header-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-header-grid" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/vinyl.jpg",
    alt: "Vinyl Record",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.$t('homeHeaderText'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-about" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "about-title" },
});
(__VLS_ctx.$t('homeAboutTitleText'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "about-subtitle" },
});
(__VLS_ctx.$t('homeAboutSubtitleText1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "about-description" },
});
(__VLS_ctx.$t('homeAboutSubtitleText2'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about-columns" },
});
for (const [n] of __VLS_getVForSourceType((3))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "about-column" },
        key: (n),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "about-image" },
        ...{ style: (`background-image: url(${__VLS_ctx.getAboutImage(n)})`) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t(`homeAboutTitle${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t(`homeAboutContent${n}`));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-top-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "top3-title" },
});
(__VLS_ctx.$t('homeTop3Title'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top3-albums" },
});
for (const [n] of __VLS_getVForSourceType((3))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "album-card" },
        key: (n),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.getCoverImage(n)),
        alt: (`Cover ${n}`),
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top3-infos" },
});
for (const [n] of __VLS_getVForSourceType((3))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "info-card" },
        key: (n),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (__VLS_ctx.$t(`homeTop3ArtistName${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t(`homeTop3CoverTitle${n}`));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-highlight" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "highlight-container" },
});
for (const [n] of __VLS_getVForSourceType((3))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "highlight-box" },
        key: (n),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "highlight-number" },
    });
    (n);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t(`homeHighlightTitle${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t(`homeHighlightContent${n}`));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: "highlight-btn" },
    });
    (__VLS_ctx.$t(`homeHighlightButton${n}`));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "home-hero" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-image-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home/hero.jpg",
    alt: "Hero Image",
    ...{ class: "hero-image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "hero-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.$t('heroTextTitle'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
(__VLS_ctx.$t('heroTextContent1'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.$t('heroTextContent2'));
/** @type {__VLS_StyleScopedClasses['home-header']} */ ;
/** @type {__VLS_StyleScopedClasses['home-header-container']} */ ;
/** @type {__VLS_StyleScopedClasses['home-header-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['home-image']} */ ;
/** @type {__VLS_StyleScopedClasses['home-text']} */ ;
/** @type {__VLS_StyleScopedClasses['home-about']} */ ;
/** @type {__VLS_StyleScopedClasses['about-container']} */ ;
/** @type {__VLS_StyleScopedClasses['about-title']} */ ;
/** @type {__VLS_StyleScopedClasses['about-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['about-description']} */ ;
/** @type {__VLS_StyleScopedClasses['about-columns']} */ ;
/** @type {__VLS_StyleScopedClasses['about-column']} */ ;
/** @type {__VLS_StyleScopedClasses['about-image']} */ ;
/** @type {__VLS_StyleScopedClasses['home-top-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top3-title']} */ ;
/** @type {__VLS_StyleScopedClasses['top3-albums']} */ ;
/** @type {__VLS_StyleScopedClasses['album-card']} */ ;
/** @type {__VLS_StyleScopedClasses['top3-infos']} */ ;
/** @type {__VLS_StyleScopedClasses['info-card']} */ ;
/** @type {__VLS_StyleScopedClasses['home-highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-container']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-box']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-number']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['home-hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-image']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            getAboutImage: getAboutImage,
            getCoverImage: getCoverImage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
