<template>
	<div>
		<InputSearch
			v-bind:repositories="repositories"
			v-on:searchReposotiryEmmit="searchRepository"
		/>

		<RepositoryList
			v-bind:repositories="repositories"
			v-bind:loading="loading"
			v-on:setLoadingEmmit="setLoading"
		/>
	</div>
</template>

<script>
import InputSearch from './../components/InputSearch';
import RepositoryList from './../components//RepositoryList';

export default {
	name: 'MainPage',
	components: { InputSearch, RepositoryList },

	data() {
		return {
			repositories: [],
			isLoaded: false,
		};
	},

	methods: {
		searchRepository(data) {
			this.repositories = [...data];
		},

		setLoading(flag) {
			this.isLoaded = flag;
		},
	},
};
</script>

<style></style>
