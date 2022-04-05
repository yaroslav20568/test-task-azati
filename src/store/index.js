import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			repositories: [],
			isLoaded: false,
			currentRepository: null,
			inputValue: ''
		};
	},
	mutations: {
		setRepositories(state, payload) {
			state.repositories = payload;
		},
		
		setCurrentRepository(state, payload) {
			state.currentRepository = payload;
		}
	},
	actions: {
		setRepositories(context, payload) {
			context.commit('setRepositories', payload);
		},

		setCurrentRepository(context, payload) {
			context.commit('setCurrentRepository', payload);
		}
	}
});

export default store;
