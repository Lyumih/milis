namespace $.$$ {

	const heroItems: $milis_skazka_hero_type[] = [
		{
			hero: 'Василиса Премудрая',
			fairytale: 'МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ.',
			description: 'Иван родился в момент, когда его отца не было дома. Отец не знал, что у него родился сын, а Морской Царь воспользовался этим. Иван-царевич растет и встречает дочь морского царя, принцессу Василису Премудрую, которая помогает ему избежать наказания.',
			audioUrl: 'https://audioskazki-online.ru/narodnye/russkie/morskoj-tsar-i-vasilisa-premudraya',
			videoUrl: 'https://www.youtube.com/embed/LDqEw-M8iyE',
			textUrl: 'МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ. Русская народная сказка. За тридевять земель, в тридесятом государстве жил-был царь с царицею; детей у них не было. Поехал ...',
		},
		{
			hero: 'Три богатыря',
			fairytale: 'ТРИ БОГАТЫРЯ',
			description: '"Три богатыря" - это сказка про известных русских героев былин, сказка про богатырей Илью Муромца, Алешу Поповича и Добрыню Никитича.',
			audioUrl: 'https://audioskazki-online.ru/podborki/raznoe/tri-bogatyrya',
			// videoUrl: 'https://www.youtube.com/embed/uopfqauEz64',
			videoUrl: 'https://www.youtube.com/watch?v=uopfqauEz64&ab_channel=%D0%9A%D0%B8%D0%BD%D0%BE%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D1%80%D0%BD%22%D0%9C%D0%BE%D1%81%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%22',
			textUrl: 'Давным-давно жил один человек, не богатый не бедный. У него было три сына. Все трое красивые, подобно месяцу, грамоте обучались, уму-разуму набирались, с плохими людьми не знались. Старшему Тонгуч-батыру был двадцать один год, среднему Ортанча-батыру — восемнадцать лет, а младшему Кенджа-батыру — шестнадцать. Однажды отец позвал сыновей к себе, усадил, приласкал каждого, погладил по голове и сказал: ...',
		}
	]

	export class $milis_skazka extends $.$milis_skazka {
		constructor(){
			super()
			console.log('fetched')
			try {
				this.fetch_skazka('1')
			} catch (e: any) {
				console.error(e)
			}
		}

		hero() {
			console.log($mol_state_arg.value('id'))
			const id = $mol_state_arg.value('id')
			return heroItems[Number(id)] ?? heroItems[0]
		}

		hero_name(): string {
			return 'Персонаж: ' + this.hero().hero
		}
		hero_fairytale(): string {
			return this.hero().fairytale
		}
		hero_description(): string {
			return this.hero().description
		}
		hero_audio(): string {
			return this.hero().audioUrl
		}
		hero_video(): string {
			return this.hero().videoUrl
		}
		hero_text(): string {
			return this.hero().textUrl
		}

		fetch_skazka(id?: string) {
			const url = `http://sbook.kinsle.ru/find/one/by/id/${id}`
			const result = $mol_fetch.json(url);
			console.log(result)
		}
	}
}
