<script>
	import ArrowBack from './svg/ArrowBack.svelte';
	import Search from './svg/Search.svelte';
	import MoreVert from './svg/MoreVert.svelte';
</script>

<header>
	<ArrowBack />
	<div class="search">
		<Search />
	</div>
	<MoreVert />
</header>

<style>
	header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 0;
		gap: 24px;
	}
	.search {
		flex-grow: 1;
		text-align: right;
		display: flex;
		justify-content: flex-end;
	}
</style>
