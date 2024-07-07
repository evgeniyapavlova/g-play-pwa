<script>
	import { reg_link } from '../lib/stores/reg_link';
	export let lang;

	const content = {
		en: 'Install',
		es: 'Instalar',
		pt: 'Instalar',
		my: 'Pasang',
		th: 'ติดตั้ง',
		vi: 'Cài đặt'
	};
</script>

<a href={$reg_link}>{content[lang]}</a>

<style>
	a {
		background-color: var(--green);
		color: var(--page-bgr);
		text-decoration: none;
		width: 100%;
		max-width: 500px;
		display: inline-block;
		text-align: center;
		padding: 17px;
		border-radius: 24px;
		font-weight: 500;
		transition: opacity 0.2s ease-out;
		margin: 40px 0;
	}
	a:hover,
	a:active {
		opacity: 0.8;
	}
	a:active,
	a:focus-visible {
		outline: none;
		color: var(--page-bgr);
	}

	@media screen and (min-width: 550px) {
		a {
			max-width: 250px;
		}
	}
</style>
