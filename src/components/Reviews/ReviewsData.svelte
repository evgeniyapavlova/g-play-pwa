<script>
	import MoreVert from '../svg/MoreVert.svelte';
	import RatingStars from './RatingStars.svelte';
	import content, { reviwers } from '../content/reviews';
	export let lang;
</script>

<div class="wrap">
	{#each content[lang].reviews as reviewText, idx}
		<div class="review-wrap">
			<div class="name">
				<div class="avatar" id="avatar-{idx}">{reviwers[idx][0]}</div>
				<div class="name-text">{reviwers[idx]}</div>
				<MoreVert />
			</div>
			<div class="rating-date">
				<RatingStars percent={idx === 2 ? 0 : 100} />
				<div class="small-text">
					{content[lang].dates[idx]}
				</div>
			</div>
			<div class="text-content">
				{reviewText}
			</div>
		</div>
	{/each}
</div>

<style>
	.name-text {
		flex-grow: 2;
	}
	.review-wrap:not(:last-child) {
		margin-bottom: 32px;
	}
	.name {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 16px;
	}
	#avatar-0 {
		background-color: #f75019;
	}
	#avatar-1 {
		background-color: #008c7d;
	}
	#avatar-2 {
		background-color: #512da9;
	}
	.avatar {
		color: var(--white);
		width: 32px;
		height: 32px;
		border-radius: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.wrap {
		font-family: var(--font-secondary);
	}
	.rating-date {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-top: 24px;
		margin-bottom: 8px;
	}
	.small-text {
		margin-left: 1ch;
	}
</style>
