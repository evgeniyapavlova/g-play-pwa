<script>
	import Share from './svg/Share.svelte';
	import Upload from './svg/Upload.svelte';
	import Lock from './svg/Lock.svelte';
	import Delete from './svg/Delete.svelte';
	import content from './content/data_safety';
	import ArrowForward from './svg/ArrowForward.svelte';
	export let lang;

	const icons = [Share, Upload, Lock, Delete];
</script>

<div class="data-safety-wrap">
	<h2 class="high-font">
		{content[lang].title}
		<div class="icon-wrap"><ArrowForward /></div>
	</h2>
	<div class="text-content medium-font">
		{content[lang].text}
	</div>

	<div class="data-safety-points">
		{#each content[lang].items as item, index}
			<div class="item medium-font">
				<svelte:component this={icons[index]} />
				<div style="margin-left: 20px;">
					<div class="text-content">{item.title}</div>

					<div class="small-text">{item.text || ''}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.data-safety-wrap {
		margin-top: 38px;
	}
	.data-safety-points {
		margin-top: 32px;
		border: 1px solid var(--tag-border-color);
		padding: 20px 20px 0;
		border-radius: 8px;
	}

	.item {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
</style>
