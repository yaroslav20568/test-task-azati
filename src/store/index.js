import { createStore } from 'vuex';

const moduleRepositories = {
	state() {
		return {
			items: [],
			isLoading: false
		};
	},
	mutations: {
		setRepositories(state, payload) {
			state.items = payload;
		},

		setIsLoading(state, payload) {
			state.isLoading = payload;
		}
	},
	actions: {
		setRepositories(context, payload) {
			context.commit('setRepositories', payload);
		},

		setIsLoading(context, payload) {
			context.commit('setIsLoading', payload);
		}
	},
	getters: {
		getMaxWatchers(state) {
			let maxWatchers = state.items[0]?.watchers;

			state.items.forEach(repository => {
				if(repository.watchers > maxWatchers) {
					maxWatchers = repository.watchers;
				}
			});

			return maxWatchers;
		},

		getLanguages(state) {
			const languages = state.items.map(repository => repository.language);
			const languagesWithoutDuplicates = languages.filter((language, index) => language && index === languages.indexOf(language));
			return languagesWithoutDuplicates;
		},

		filterArray(state, getters, rootState) {
			const filterRepositories = state.items.filter(repository => repository.watchers >= rootState.filterParams.watchers)
				.filter(repository => {
					if(rootState.filterParams.language === 'None') {
						return repository;
					} else {
						return rootState.filterParams.language === repository.language;
					}
				});

			return filterRepositories;
		}
	}
};

const moduleFilterParams = {
	state() {
		return {
			watchers: 0,
			language: 'None'
		};
	},
	mutations: {
		setWatchers(state, payload) {
			state.watchers = payload;
		},

		setLanguage(state, payload) {
			state.language = payload;
		}
	},
	actions: {
		setWatchers(context, payload) {
			context.commit('setWatchers', payload);
		},

		setLanguage(context, payload) {
			context.commit('setLanguage', payload);
		}
	},
	getters: {}
};

const moduleOther = {
	state() {
		return {
			inputValue: '',
			currentRepository: ''
		};
	},
	mutations: {
		setInputValue(state, payload) {
			state.inputValue = payload;
		},

		setCurrentRepository(state, payload) {
			state.currentRepository = payload;
		}
	},
	actions: {
		setInputValue(context, payload) {
			context.commit('setInputValue', payload);
		},

		setCurrentRepository(context, payload) {
			context.commit('setCurrentRepository', payload);
		}
	},
	getters: {}
};

const store = createStore({
	modules: {
		repositories: moduleRepositories,
		filterParams: moduleFilterParams,
		other: moduleOther,
	}
});

export default store;
