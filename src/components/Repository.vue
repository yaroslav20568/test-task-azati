<template>
	<div class="repository" v-on:click="setCurrentRepository">
		<router-link v-bind:to="'/repository/' + repository.id">
			<div><span>Name:</span> {{ repository.name }}</div>
			<div><span>Full name:</span> {{ repository.full_name }}</div>
			<div><span>Private:</span> {{ repository.private }}</div>
			<div><span>Language:</span> {{ repository.language }}</div>
			<div><span>Description:</span> {{ repository.description }}</div>
			<div><span>Watchers:</span> {{ repository.watchers }}</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'RepositoryComp',
	props: ['repository'],

	methods: {
		setCurrentRepository() {
			this.$store.dispatch('setCurrentRepository', this.repository);
		}
	},
};
</script>

<style>
	.repository {
		border: 1px solid #1fc;
		margin: 20px 0;
		padding: 6px;
		text-align: left;
	}

	.repository a {
		text-decoration: none;
		color: #000;
	}

	.repository span {
		font-weight: 700;
	}
</style>
