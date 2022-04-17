<template>
	<div class="current-repository">
		<a
			class="button-back"
			v-on:click="$router.push('/')"
		>
			Back to main page
		</a>
		
		<div class="current-repository__info">
			<div class="current-repository__photo">
				<img v-bind:src="this.$store.state.other.currentRepository.owner.avatar_url" />
			</div>
			<div></div>
			<div><span>Name:</span> {{this.$store.state.other.currentRepository.name}}</div>
			<div><span>Full name:</span> {{this.$store.state.other.currentRepository.full_name}}</div>
			<div><span>Private:</span> {{this.$store.state.other.currentRepository.private}}</div>
			<div><span>Description:</span> {{this.$store.state.other.currentRepository.description}}</div>
			<div><span>Language:</span> {{this.$store.state.other.currentRepository.language}}</div>
			<div><span>Watchers:</span> {{this.$store.state.other.currentRepository.watchers}}</div>
			<div><span>Owner login:</span> {{this.$store.state.other.currentRepository.owner.login}}</div>
			<div><span>Html url:</span> {{this.$store.state.other.currentRepository.html_url}}</div>
		</div>
	</div>
</template>

<script>


export default {
	name: 'CurrentRepository',
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

.current-repository__info {
	border: 1px solid #1fc;
    padding: 6px;
}

.current-repository__info span {
	font-weight: 700;
}

.current-repository__photo {
	display: flex;
	align-items: center;
	justify-content: center;
}

.current-repository__photo img {
	width: 100px;
	height: 100px;
}
</style>
