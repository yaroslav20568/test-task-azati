<template>
	<div>
		<Repository
			v-for="(repository, index) in this.$store.state.repositories"
			:key="index"
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
