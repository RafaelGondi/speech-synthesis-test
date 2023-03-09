<template>
	<div class="container">
		<speech-form />
	</div>
</template>

<script>
import SpeechForm from './components/SpeechForm.vue'

export default {
	name: 'App',
	components: {
		SpeechForm,
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

.container {
	margin: auto;
	width: fit-content;
}
</style>
