<template>
	<cds-spacer margin-bottom="4">
		<cds-select
			v-model="value"
			:options="options"
			optionsField="name"
			label="Voz"
			placeholder="Selecione uma das vozes"
		/>
	</cds-spacer>

	<cds-spacer margin-bottom="4">
		<cds-text-input
			label="Texto"
			v-model="text"
		/>
	</cds-spacer>

	<cds-spacer margin-bottom="4">
		<cds-button
			variant="green"
			size="md"
			text="Falar"
			@click="speak()"
		/>
	</cds-spacer>
</template>

<script>
export default {
	data() {
		return {
			synth: window.speechSynthesis,
			voices: [],
			value: '',
			options: [],
			text: '',
		};
	},

	mounted() {
		setTimeout(() => {
			this.voices = window.speechSynthesis.getVoices();

			this.voices.forEach((voice, index) => {
				this.options[index] = {
					name: voice.name,
					lang: voice.lang,
				}
			});
	
			this.options = this.options.filter((option) => {
				return option.name.includes('Brazil') || option.name.includes('Brasil');
			});
		}, 10);
	},

	methods: {
		speak() {
			let toSpeak = new SpeechSynthesisUtterance(this.text);

			let selectedVoice = this.voices.find((voice) => {
				return voice.name === this.value.name;
			});

			toSpeak.voice = selectedVoice;
			this.synth.speak(toSpeak);
		},
	},
}
</script>