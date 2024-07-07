<script>
	import { base } from '$app/paths';
	export let lang;

	const content = {
		en: { title: 'IQ Option – Trading platform' },
		es: { title: 'IQ Option – Plataforma de Trading' },
		pt: { title: 'IQ Option – Plataforma de negociação' },
		my: { title: 'IQ Option – Platform dagangan' },
		th: { title: 'IQ Option - แพลต์ฟอร์มเทรด' },
		vi: { title: 'IQ Option – Nền tảng giao dịch' }
	};
</script>

<div class="wrap">
	<img
		src="{base}/images/logo-1.webp"
		srcset="{base}/images/logo-2.webp 2x"
		class="T75of cN0oRe fFmL2e"
		aria-hidden="true"
		alt="Icon image"
		itemprop="image"
		data-atf="true"
		data-iml="2602.3000000002794"
	/>
	<div>
		<h1 class="high-font">{content[lang].title}</h1>
		<div class="caption">IQ Option</div>
	</div>
</div>

<style>
	.wrap {
		margin-top: 24px;
		align-items: flex-start;
		display: flex;
	}
	img {
		border-width: 0;
		box-shadow:
			0 1px 2px 0 rgba(60, 64, 67, 0.3),
			0 1px 3px 1px rgba(60, 64, 67, 0.15);
		border-radius: 4px;
		margin: 7px 24px 0 0;
		width: 72px;
		border-radius: 20%;
	}
	.caption {
		margin-top: 2px;
		font-family: 'Google Sans', Roboto, Arial, sans-serif;
		line-height: 1.5rem;
		font-size: 1rem;
		letter-spacing: 0.00625em;
		font-weight: 500;
		color: var(--green);
		fill: var(--green);
		stop-color: var(--green);
	}
	h1 {
		line-height: 2rem;
		font-size: 1.5rem;
		letter-spacing: 0;
		font-weight: 400;
		font-weight: 500;
		align-items: flex-end;
		display: flex;
		overflow-wrap: anywhere;
		width: 100%;
		word-break: keep-all;
	}

	@media screen and (min-width: 600px) {
		h1 {
			line-height: 2.75rem;
			font-size: 2.25rem;
			font-weight: 500;
		}
	}

	@media screen and (min-width: 840px) {
		h1 {
			width: 560px;
		}

		.caption {
			margin-top: 16px;
		}

		.wrap {
			position: relative;
		}

		img {
			position: absolute;
			right: 0;
			width: 180px;
			margin: 0;
		}
	}

	@media screen and (min-width: 960px) {
		h1 {
			width: 636px;
		}
	}

	@media screen and (min-width: 1280px) {
		h1 {
			width: 800px;
			line-height: 4rem;
			font-size: 3.5rem;
		}
		img {
			width: 240px;
		}
	}
</style>
