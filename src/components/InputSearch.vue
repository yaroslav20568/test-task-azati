<template>
	<div>
		<input 
			class="search-input"
			placeholder="Enter a request"
			type="text" 
			name="search" 
			v-on:input="searchRepositories" 
			v-model="this.$store.state.inputValue"
		/>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'InputSearch',

	methods: {
		searchRepositories() {
			this.$store.dispatch('setIsLoading', true);
			axios.get(`https://api.github.com/search/repositories?q=${this.$store.state.inputValue}`)
				.then(({ data }) => {
					this.$store.dispatch('setRepositories', data.items);
					this.$store.dispatch('setIsLoading', false);
				});
		},
	},
};
</script>

<style>
.search-input {
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 0.3px;
	width: 100%;
	height: 25px;
	border: 1px solid #999;
	transition: 0.2s linear border;
	margin-bottom: 10px;
}

.search-input:focus {
	outline: none;
	border: 1px solid red;
}
</style>
