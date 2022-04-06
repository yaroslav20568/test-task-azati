<template>
	<a
		class="button-back"
		v-on:click="$router.push('/')"
	>
		Back to main page
	</a>

	<div>Not Found</div>
</template>

<script>
export default {
	name: 'NotFound',
};
</script>

<style>
.button-back {
	display: block;
	cursor: pointer;
	font-size: 17px;
	font-weight: 700;
	margin-bottom: 20px;
}
</style>
