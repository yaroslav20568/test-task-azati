<template>
	<div>Name: {{ repository.name }}</div>
	<div>Full name: {{ repository.full_name }}</div>
	<div>Private: {{ repository.private }}</div>
	<div>Language: {{ repository.language }}</div>
	<div>Watchers: {{ repository.watchers }}</div>
</template>

<script>
export default {
	name: 'RepositoryComp',
	props: ['repository'],
};
</script>

<style></style>
