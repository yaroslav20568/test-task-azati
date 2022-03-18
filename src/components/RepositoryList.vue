<template>
	<div v-if="!loading">
		<div class="repository" v-for="(repository, index) in repositories" :key="index">
			<Repository v-bind:repository="repository" />
		</div>
	</div>

	<div v-else>Загрузка</div>
</template>

<script>
import Repository from './Repository';

export default {
	name: 'RepositoryList',
	components: { Repository },
	props: ['repositories'],
};
</script>

<style>
.repository {
	border: 1px solid #1fc;
    margin: 20px 0;
    padding: 6px;
    text-align: left;
}
</style>
