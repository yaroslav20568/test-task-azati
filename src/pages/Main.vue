<template>
	<div>
		<InputSearch />

		<div v-if="!this.$store.state.isLoading && this.$store.state.repositories.length">
			<Filter />
			<RepositoryList />
		</div>

		<Loader v-else-if="this.$store.state.isLoading" />
	</div>
</template>

<script>
import InputSearch from './../components/InputSearch';
import RepositoryList from './../components/RepositoryList';
import Loader from './../components/Loader';
import Filter from './../components/Filter';

export default {
	name: 'MainPage',
	components: { InputSearch, RepositoryList, Loader, Filter },
};
</script>

<style></style>
