<script>
	import content from '../content/numbers';
	import RatingStars from './RatingStars.svelte';
	export let lang;
</script>

<div class="wrap">
	<div class="left-rating-block">
		<h3 class="high-font">4.8</h3>
		<RatingStars percent={70} />
		<div class="amount small-text">{content[lang].reviews}</div>
	</div>
	<div class="right-rating-block">
		{#each [5, 4, 3, 2, 1] as num}
			<div class="rating-item-wrap">
				<div class="rating-item-num">{num}</div>
				<div class="rating-item-wrap-line">
					<div class="rating-item-line" id="rating-item-line-{num}"></div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.amount {
		margin-top: 0.5rem;
	}
	#rating-item-line-5 {
		width: 88%;
	}
	#rating-item-line-4 {
		width: 10%;
	}
	#rating-item-line-3 {
		width: 4%;
	}
	#rating-item-line-2 {
		width: 2%;
	}
	#rating-item-line-1 {
		width: 5%;
	}
	.rating-item-line {
		height: 100%;
		background-color: var(--green);
		border-radius: 10px;
	}
	.rating-item-wrap-line {
		border-radius: 10px;
		background-color: var(--stars-bgr);
		height: 10px;
	}
	h3 {
		line-height: 4rem;
		font-size: 3.5rem;
		letter-spacing: 0;
		font-weight: 400;
	}
	.wrap {
		column-gap: 24px;
		display: grid;
		flex-grow: 1;
		grid-template-columns: max-content auto;
		margin-bottom: 32px;
	}
	.rating-item-wrap {
		display: grid;
		grid-template-columns: max-content auto;
		align-items: center;
	}
	.rating-item-num {
		font-family: var(--font-secondary);
		line-height: 1rem;
		font-size: 0.75rem;
		letter-spacing: 0.025em;
		font-weight: 400;
		padding-right: 16px;
	}
</style>
