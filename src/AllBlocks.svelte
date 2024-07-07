<script>
	export let lang;
	import Header from './components/Header.svelte';
	import Intro from './components/Intro.svelte';
	import Numbers from './components/Numbers.svelte';
	import Button from './components/Button.svelte';
	import Screens from './components/Screens.svelte';
	import About from './components/About.svelte';
	import DataSafety from './components/DataSafety.svelte';
	import Reviews from './components/Reviews/Reviews.svelte';
</script>

<section>
	<Header />
	<Intro {lang} />
	<Numbers {lang} />
	<Button {lang} />
	<div class="content">
		<Screens {lang} />
		<About {lang} />
		<DataSafety {lang} />
		<Button {lang} />
		<Reviews {lang} />
		<Button {lang} />
	</div>
</section>

<style>
	section {
		margin: 0 auto;
		min-height: 56px;
		position: relative;
		width: calc(100% - 48px);
		max-width: 1296px;
	}

	.content {
		padding-bottom: 40px;
	}

	@media screen and (min-width: 600px) {
		section {
			width: calc(100% - 96px);
		}
	}
	@media screen and (min-width: 960px) {
		.content {
			width: calc(100% - 348px);
		}
	}
	@media screen and (min-width: 1280px) {
		section {
			width: calc(100% - 144px);
		}
	}
</style>
