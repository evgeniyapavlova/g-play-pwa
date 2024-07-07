<script>
	import meta__img__tw from '$lib/images/meta__img__tw.jpeg';
	import meta__img__fb from '$lib/images/meta__img__fb.jpeg';
	import AllBlocks from '../../AllBlocks.svelte';

	const title = 'IQ Option - Nền tảng g.dịch';
	const desc = 'Giao dịch, Đầu tư cổ phiếu, Ngoại tệ, ETF, hàng hóa. Quản lý giao dịch';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta__img__fb} />

	<meta name="twitter:site" content="iqoption.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta__img__tw} />
</svelte:head>

<AllBlocks lang="vi" />
