namespace $.$$ {

	const HeroDTO = $mol_data_record({
		id: $mol_data_number,
		city: $mol_data_optional($mol_data_string),
		place: $mol_data_optional($mol_data_string),
		hero: $mol_data_optional($mol_data_string),
		fairytale: $mol_data_optional($mol_data_string),
		description: $mol_data_optional($mol_data_string),
		audiobook: $mol_data_optional($mol_data_string),
		videobook: $mol_data_optional($mol_data_string),
		book: $mol_data_optional($mol_data_string),
	})

	const heroItems: typeof HeroDTO.Value[] = [
		{
			id: 0,
			hero: 'Три богатыря',
			fairytale: 'ТРИ БОГАТЫРЯ',
			description: '"Три богатыря" - это сказка про известных русских героев былин, сказка про богатырей Илью Муромца, Алешу Поповича и Добрыню Никитича.',
			audiobook: 'https://audioskazki-online.ru/podborki/raznoe/tri-bogatyrya',
			videobook: 'https://www.youtube.com/watch?v=uopfqauEz64&ab_channel=%D0%9A%D0%B8%D0%BD%D0%BE%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D1%80%D0%BD%22%D0%9C%D0%BE%D1%81%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%22',
			book: 'Давным-давно жил один человек, не богатый не бедный. У него было три сына. Все трое красивые, подобно месяцу, грамоте обучались, уму-разуму набирались, с плохими людьми не знались. Старшему Тонгуч-батыру был двадцать один год, среднему Ортанча-батыру — восемнадцать лет, а младшему Кенджа-батыру — шестнадцать. Однажды отец позвал сыновей к себе, усадил, приласкал каждого, погладил по голове и сказал: ...',
		},
		{
			id: 1,
			hero: 'Василиса Премудрая',
			fairytale: 'МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ.',
			description: 'Иван родился в момент, когда его отца не было дома. Отец не знал, что у него родился сын, а Морской Царь воспользовался этим. Иван-царевич растет и встречает дочь морского царя, принцессу Василису Премудрую, которая помогает ему избежать наказания.',
			audiobook: 'https://audioskazki-online.ru/narodnye/russkie/morskoj-tsar-i-vasilisa-premudraya',
			videobook: 'https://www.youtube.com/embed/LDqEw-M8iyE',
			book: 'МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ. Русская народная сказка. За тридевять земель, в тридесятом государстве жил-был царь с царицею; детей у них не было. Поехал ...',
		}
	]

	export class $milis_skazka extends $.$milis_skazka {

		@$mol_mem
		hero_id() {
			// return Number($mol_state_arg.value( 'id' )) || 1
			return 1
		}

		@$mol_mem
		hero(){
			const url = `https://sbook.kinsle.ru/find/one/by/id/${ this.hero_id() }`
			try {
				const data = $mol_fetch.json( url ) as any | null
				return data ?? heroItems[ 0 ]
			} catch( e ) {
				if( e instanceof Promise ) $mol_fail_hidden( e )
				return heroItems[ this.hero_id() ] ?? heroItems[ 0 ]
			}
		}

		hero_name(): string {
			return 'Персонаж: ' + this.hero().hero
		}
		hero_fairytale(): string {
			return this.hero().fairytale ?? ''
		}
		hero_description(): string {
			return this.hero().description ?? ''
		}
		hero_audio(): string {
			return this.hero().audiobook ?? ''
		}
		hero_video(): string {
			return this.hero().videobook ?? ''
		}
		hero_text(): string {
			return this.hero().book ?? ''
		}
	}
}
