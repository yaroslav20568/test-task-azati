import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			inputValue: '',
			repositories: [],
			isLoading: false,
			currentRepository: null
		};
	},
	mutations: {
		setRepositories(state, payload) {
			state.repositories = payload;
		},

		setIsLoading(state, payload) {
			state.isLoading = payload;
		},
		
		setCurrentRepository(state, payload) {
			state.currentRepository = payload;
		}
	},
	actions: {
		setRepositories(context, payload) {
			context.commit('setRepositories', payload);
		},

		setIsLoading(context, payload) {
			context.commit('setIsLoading', payload);
		},

		setCurrentRepository(context, payload) {
			context.commit('setCurrentRepository', payload);
		}
	}
});

export default store;
