<template>
	<div>
		<input
			type="range"
			min="0"
			v-bind:max="this.$store.getters.getMaxWatchers + 1"
			v-bind:value="this.$store.state.filterParams.watchers"
			v-on:input="setWatchers"
		/>
		<div>Watchers: {{ this.$store.state.filterParams.watchers }}</div>

		<select v-on:change="setLanguage" v-model="this.$store.state.filterParams.language">
			<option>None</option>
			<option
				v-for="(language, index) in this.$store.getters.getLanguages"
				v-bind:key="index" 
				v-bind:value="language" 
			>
				{{ language }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'FilterComp',
	methods: {
		setWatchers(e) {
			this.$store.dispatch('setWatchers', +e.target.value);
		},

		setLanguage(e) {
			this.$store.dispatch('setLanguage', e.target.value);
			console.log(e.target.value)
		}
	},
};
</script>

<style></style>
