<template>
	<div>
		<InputSearch />

		<RepositoryList v-if="!this.$store.state.isLoading && this.$store.state.repositories.length" />

		<Loader v-else-if="this.$store.state.isLoading" />
	</div>
</template>

<script>
import InputSearch from './../components/InputSearch';
import RepositoryList from './../components/RepositoryList';
import Loader from './../components//Loader';

export default {
	name: 'MainPage',
	components: { InputSearch, RepositoryList, Loader },
};
</script>

<style></style>
