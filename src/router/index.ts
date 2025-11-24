import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/mainContents/Home.vue';
import GenericPage from '@/components/mainContents/GenericPage.vue';

const routes = [
  { path: '/', name: 'homeTab', component: Home },
  { path: '/AI-music', name: 'AiMusicTab', component: GenericPage },
  { path: '/AI-separate', name: 'AiSeparateTab', component: GenericPage },
  { path: '/AI-breakdown', name: 'AiBreakdownTab', component: GenericPage },
  { path: '/release', name: 'releaseTab', component: GenericPage },
  { path: '/production-original', name: 'productionOriginalTab', component: GenericPage },
  { path: '/production-editing', name: 'productionEditingTab', component: GenericPage },
  { path: '/production-soundtrack', name: 'productionSoundtrackTab', component: GenericPage },
  { path: '/submission', name: 'submissionTab', component: GenericPage },
  { path: '/proposal-copyright', name: 'proposalCopyrightTab', component: GenericPage },
  { path: '/proposal-film', name: 'proposalFilmTab', component: GenericPage },
  { path: '/proposal-cooperation', name: 'proposalCooperationTab', component: GenericPage },
  { path: '/merchandise', name: 'merchandiseTab', component: GenericPage },
  { path: '/about-intro', name: 'aboutIntroTab', component: GenericPage },
  { path: '/about-artists', name: 'aboutArtistsTab', component: GenericPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
