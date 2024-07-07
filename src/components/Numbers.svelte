<script>
	import Star from './svg/Star.svelte';
	import Info from './svg/Info.svelte';
	import content from './content/numbers';
	export let lang;
</script>

<div class="wrap wrap-numbers" id="wrap-numbers-{lang}">
	<div class="item">
		<div class="title high-font">4.8<Star /></div>
		<div class="caption medium-font">{content[lang].reviews}&nbsp;<Info /></div>
	</div>
	<div class="item plus-3">
		<div class="title high-font"></div>
		<div class="caption medium-font">{content[lang].adult}&nbsp;<Info /></div>
	</div>
	<div class="item">
		<div class="title high-font">100M+</div>
		<div class="caption medium-font">{content[lang].downloads}</div>
	</div>
</div>

<style>
	.plus-3 .title {
		background-image: url(/images/plus3.webp);
		background-repeat: no-repeat;
		width: 17px;
		height: 16px;
		margin-top: 2px;
	}
	.item:not(:first-child)::before {
		background-color: var(--numbers-divider-color);
		content: '';
		display: block;
		height: 24px;
		left: -16px;
		position: absolute;
		top: calc(50% - 12px);
		width: 1px;
	}
	.item {
		text-align: center;
		position: relative;
	}
	.caption {
		line-height: 1rem;
		font-size: 0.75rem;
		letter-spacing: 0.025em;
		font-weight: 400;
		align-items: center;
		display: flex;
		height: 20px;
		justify-content: center;
		white-space: nowrap;
		width: 100%;
		display: flex;
		align-items: center;
	}
	.wrap {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 32px;
		width: min-content;
		margin: 32px 0 0;
	}
	.title {
		letter-spacing: 0.25px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		line-height: 1.25rem;
		font-size: 0.875rem;
		letter-spacing: 0.018em;
		font-weight: 500;
		align-items: center;
		width: 100%;
		display: inline-block;
	}
</style>
