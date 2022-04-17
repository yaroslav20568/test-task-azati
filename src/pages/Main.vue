<template>
	<div>
		<InputSearch />

		<div v-if="!this.$store.state.repositories.isLoading && this.$store.state.repositories.items.length">
			<Filter />
			<RepositoryList />
		</div>

		<Loader v-else-if="this.$store.state.repositories.isLoading" />
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
