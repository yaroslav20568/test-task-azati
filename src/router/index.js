import { createWebHistory, createRouter } from 'vue-router';
import Main from './../pages/Main.vue';
import CurrentRepository from './../pages/CurrentRepository.vue';

const NotFound = { template: '<h2>Page Not Found</h2>' };

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/repository/:id',
		name: 'CurrentRepository',
		component: CurrentRepository,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
