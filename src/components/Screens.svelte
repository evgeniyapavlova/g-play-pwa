<script>
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '../css/splide_custom.css';

	export let lang;
</script>

<div class="screens-wrap">
	<Splide
		aria-label="App screenshots"
		options={{
			drag: true,
			focus: 'center',
			autoWidth: true,
			perMove: 1,
			gap: '12px',
			arrows: true,
			pagination: false,
			speed: 800,
			breakpoints: {
				1280: {
					arrows: false
				}
			}
		}}
	>
		{#each [1, 2, 3, 4, 5] as screen, index}
			<SplideSlide>
				<div
					class="screen"
					id="screen-{index}"
					style="background-image: url('{base}/images/{lang}/{lang}-{index + 1}.jpg?1');"
				></div>
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	.screens-wrap {
		margin: 0 -24px 32px 0;
		height: 195px;
	}

	.screen {
		width: 300px;
		height: 195px;
		background-size: 300px 195px;
		background-repeat: no-repeat;
		border-width: 0;
		background-color: var(--screen-bgr);
		box-shadow:
			0 1px 2px 0 rgba(60, 64, 67, 0.3),
			0 1px 3px 1px rgba(60, 64, 67, 0.15);
		border-radius: 8px;
		cursor: pointer;
	}

	@media screen and (min-width: 600px) {
		.screens-wrap {
			margin-right: -48px;
		}
	}

	@media screen and (min-width: 1280px) {
		.screens-wrap {
			margin-right: 0;
		}
		.screen {
			width: 460px;
			height: 299px;
			background-size: 460px 299px;
		}
		.screens-wrap {
			height: 299px;
		}
	}
</style>
