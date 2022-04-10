<template>
	<div>
		<Repository
			v-for="(repository, index) in this.$store.getters.filterArray"
			v-bind:key="index"
			v-bind:repository="repository"
		/>
	</div>
</template>

<script>
import Repository from './Repository';

export default {
	name: 'RepositoryList',
	components: { Repository }
};
</script>

<style></style>
