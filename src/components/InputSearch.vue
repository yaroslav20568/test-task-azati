<template>
	<div>
		<input 
			class="search-input"
			placeholder="Enter a request"
			type="text" 
			name="search" 
			v-on:input="searchRepositories" 
			v-model="inputValue" 
		/>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'InputSearch',
	props: ['repositories'],

	data() {
		return {
			inputValue: '',
		};
	},

	methods: {
		searchRepositories() {
			axios
				.get(`https://api.github.com/search/repositories?q=${this.inputValue}`)
				.then(({ data }) => {
					this.$emit('searchReposotiryEmmit', data.items);
					this.$emit('setLoading', true);
				});
		},
	},
};
</script>

<style>
.search-input {
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
