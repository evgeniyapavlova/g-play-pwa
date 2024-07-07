<script>
	import ArrowForward from './svg/ArrowForward.svelte';
	export let lang;

	const content = {
		en: {
			about: 'About this app',
			text1:
				'IQ Option is an award-winning mobile trading platform. It has a clean and intuitive interface and offers various assets for trading: currencies, indices, commodities, stocks, and many more.',
			text2:
				'You don’t need large amounts of money to start investing. The minimum deposit is $10.',
			finance: 'Finance'
		},
		es: {
			about: 'Sobre este app',
			text1:
				'IQ Option es una plataforma de trading móvil galardonada. Tiene una interfaz limpia e intuitiva y ofrece varios activos para operar: divisas, índices, materias primas, acciones y muchos más.',
			text2:
				'No necesitas grandes cantidades de dinero para empezar a invertir. El depósito mínimo es de $10.',
			finance: 'Operar'
		},
		pt: {
			about: 'Sobre este aplicativo',
			text1:
				'A IQ Option é uma premiada plataforma de negociação para dispositivos móveis. Ela possui uma interface limpa e intuitiva e oferece diversos ativos para negociação: moedas, índices, commodities, ações e muito mais.',
			text2:
				'Você não precisa de muito dinheiro para começar a investir. O depósito mínimo é de $ 10.',
			finance: 'Finanças'
		},
		th: {
			about: 'เกี่ยวกับแอปนี้',
			text1:
				'IQ Option เป็นแพลตฟอร์มเทรดบนมือถือที่ได้รับรางวัล ระบบไม่ซับซ้อน ใช้งานง่าย มีสินทรัพย์ให้เทรดหลากหลาย ได้แก่ สกุลเงิน ดัชนี สินค้าโภคภัณฑ์ หุ้น และอื่นๆ อีกมากมาย',
			text2: 'ไม่ต้องใช้เงินเยอะเพื่อเริ่มลงทุน เงินฝากขั้นต่ำ $10',
			finance: 'การเงิน'
		},
		my: {
			about: 'Tentang aplikasi ini',
			text1:
				'IQ Option ialah platform dagangan mudah alih yang memenangi anugerah. Ia mempunyai antara muka yang bersih dan intuitif serta menawarkan pelbagai aset untuk berdagang: mata wang, indeks, komoditi, saham dan banyak lagi.',
			text2:
				'Anda tidak memerlukan jumlah wang yang besar untuk mula melabur. Deposit minimum ialah $10.',
			finance: 'Kewangan'
		},
		vi: {
			about: 'Giới thiệu ứng dụng',
			text1:
				'IQ Option là nền tảng giao dịch trên thiết bị di động từng đoạt giải thưởng. Nền tảng có giao diện rõ ràng và trực quan, cho phép giao dịch nhiều tài sản khác nhau: tiền tệ, chỉ số, hàng hóa, cổ phiếu, v.v..',
			text2: 'Bạn không cần phải bỏ ra số tiền lớn để bắt đầu đầu tư. Tiền nạp tối thiểu là $10.',
			finance: 'Tài chính'
		}
	};
</script>

<div class="wrap-about">
	<h2 class="high-font">
		{content[lang].about}
		<div class="icon-wrap"><ArrowForward /></div>
	</h2>
	<div class="text-content medium-font">{content[lang].text1}</div>
	<div class="text-content medium-font">{content[lang].text2}</div>
	<div class="tag medium-font">{content[lang].finance}</div>
</div>

<style>
	.wrap-about {
		margin-top: 38px;
	}
	.tag {
		display: inline-block;
		border: 1px solid var(--tag-border-color);
		margin-top: 24px;
		padding: 10px 16px;
		border-radius: 8px;
	}
</style>
