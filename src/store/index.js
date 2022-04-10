import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			inputValue: '',
			repositories: [],
			isLoading: false,
			currentRepository: null,
			watchers: 0,
			language: 'None'
		};
	},
	getters: {
		getMaxWatchers(state) {
			let maxWatchers = state.repositories[0]?.watchers;

			state.repositories.forEach(repository => {
				if(repository.watchers > maxWatchers) {
					maxWatchers = repository.watchers;
				}
			});

			return maxWatchers;
		},

		getLanguages(state) {
			const languages = state.repositories.map(repository => repository.language);
			const languagesWithoutDuplicates = languages.filter((language, index) => language && index === languages.indexOf(language));
			return languagesWithoutDuplicates;
		},

		filterArray(state) {
			const filterRepositories = state.repositories.filter(repository => repository.watchers >= state.watchers)
				.filter(repository => {
					if(state.language === 'None') {
						return repository;
					} else {
						return state.language === repository.language;
					}
				});

			return filterRepositories;
		}
	},
	mutations: {
		setInputValue(state, payload) {
			state.inputValue = payload;
		},

		setWatchers(state, payload) {
			state.watchers = payload;
		},

		setLanguage(state, payload) {
			state.language = payload;
		},

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
		setInputValue(context, payload) {
			context.commit('setInputValue', payload);
		},

		setWatchers(context, payload) {
			context.commit('setWatchers', payload);
		},

		setLanguage(context, payload) {
			context.commit('setLanguage', payload);
		},

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
