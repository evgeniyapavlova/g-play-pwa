<script>
	import { onMount } from 'svelte';
	import './styles.css';
	import { reg_link } from '../lib/stores/reg_link';

	function getURLParameters() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return Object.fromEntries(urlParams.entries());
	}

	function updateLinks() {
		const parameters = getURLParameters();
		const linkHref = $reg_link;
		const [url, query] = linkHref.split('?');
		const queryParams = new URLSearchParams(query);

		for (const [key, value] of Object.entries(parameters)) {
			let tempKey = key;
			if (tempKey === 'aff') {
				tempKey = 'pid';
			} else if (tempKey === 'afftrack') {
				tempKey = 'c';
			}
			queryParams.set(tempKey, value);
		}
		const updatedHref = url + '?' + queryParams.toString();
		reg_link.set(updatedHref);
	}

	onMount(() => {
		updateLinks();
	});
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
