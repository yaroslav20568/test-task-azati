<template>
	<div>
		<InputSearch />

		<RepositoryList />
	</div>
</template>

<script>
import InputSearch from './../components/InputSearch';
import RepositoryList from './../components/RepositoryList';

export default {
	name: 'MainPage',
	components: { InputSearch, RepositoryList },
};
</script>

<style></style>
