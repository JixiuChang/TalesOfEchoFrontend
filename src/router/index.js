import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/mainContents/Home.vue';
import AiMusic from '@/components/mainContents/AiMusic.vue';
import AiSeparate from '@/components/mainContents/AiSeparate.vue';
import AiBreakdown from '@/components/mainContents/AiBreakdown.vue';
import Release from '@/components/mainContents/Release.vue';
import ProductionOriginal from '@/components/mainContents/ProductionOriginal.vue';
import ProductionEditing from '@/components/mainContents/ProductionEditing.vue';
import ProductionSoundtrack from '@/components/mainContents/ProductionSoundtrack.vue';
import Submission from '@/components/mainContents/Submission.vue';
import ProposalCopyright from '@/components/mainContents/ProposalCopyright.vue';
import ProposalCooperation from '@/components/mainContents/ProposalCooperation.vue';
import Merchandise from '@/components/mainContents/Merchandise.vue';
import AboutIntro from '@/components/mainContents/AboutIntro.vue';
import AboutArtists from '@/components/mainContents/AboutArtists.vue';
const routes = [
    { path: '/', component: Home },
    { path: '/AI-music', component: AiMusic },
    { path: '/AI-separate', component: AiSeparate },
    { path: '/AI-breakdown', component: AiBreakdown },
    { path: '/release', component: Release },
    { path: '/production-original', component: ProductionOriginal },
    { path: '/production-editing', component: ProductionEditing },
    { path: '/production-soundtrack', component: ProductionSoundtrack },
    { path: '/submission', component: Submission },
    { path: '/proposal-copyright', component: ProposalCopyright },
    { path: '/proposal-cooperation', component: ProposalCooperation },
    { path: '/merchandise', component: Merchandise },
    { path: '/about-intro', component: AboutIntro },
    { path: '/about-artists', component: AboutArtists },
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { top: 0 };
        }
    },
});
