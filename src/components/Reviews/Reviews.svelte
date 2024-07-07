<script>
	import Rating from './Rating.svelte';
	import ArrowForward from '../svg/ArrowForward.svelte';
	import Info from '../svg/Info.svelte';
	import ReviewsData from './ReviewsData.svelte';
	import content from '../content/reviews';

	export let lang;
</script>

<div class="wrap">
	<div class="header">
		<h2 class="high-font">
			{content[lang].title}
			<div class="icon-wrap"><ArrowForward /></div>
		</h2>
		<div class="caption medium-font">
			<p>{content[lang].caption}</p>
			&nbsp;<Info />
		</div>
	</div>
	<Rating {lang} />
	<ReviewsData {lang} />
</div>

<style>
	h2 {
		width: -webkit-fill-available;
	}
	.header {
		margin-bottom: 40px;
	}
	.caption {
		display: flex;
		align-items: center;
	}

	@media screen and (min-width: 600px) {
		h2 {
			margin-bottom: 0;
		}
		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	@media screen and (min-width: 700px) {
		.caption {
			flex-grow: 1;
		}
		h2,
		p {
			white-space: nowrap;
		}
	}
</style>
