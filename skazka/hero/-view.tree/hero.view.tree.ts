namespace $ {
	export class $milis_skazka_hero extends $mol_list {
		
		/**
		 * ```tree
		 * rows /$mol_view
		 * 	<= Title
		 * 	<= TitleBook
		 * 	<= Audiobook
		 * 	<= Description
		 * 	<= Book
		 * ```
		 */
		rows() {
			return [
				this.Title(),
				this.TitleBook(),
				this.Audiobook(),
				this.Description(),
				this.Book()
			] as readonly $mol_view[]
		}
		
		/**
		 * ```tree
		 * Title $mol_section
		 * 	level 2
		 * 	title \Василиса Премудрая
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_section()
			
			obj.level = () => 2
			obj.title = () => "Василиса Премудрая"
			
			return obj
		}
		
		/**
		 * ```tree
		 * TitleBook $mol_section
		 * 	level 3
		 * 	title \Сказка: МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ.
		 * ```
		 */
		@ $mol_mem
		TitleBook() {
			const obj = new this.$.$mol_section()
			
			obj.level = () => 3
			obj.title = () => "Сказка: МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ."
			
			return obj
		}
		
		/**
		 * ```tree
		 * Audiobook $mol_link
		 * 	title \Слушать сказку онлайн
		 * 	uri \https://audioskazki-online.ru/narodnye/russkie/morskoj-tsar-i-vasilisa-premudraya
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		Audiobook() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Слушать сказку онлайн"
			obj.uri = () => "https://audioskazki-online.ru/narodnye/russkie/morskoj-tsar-i-vasilisa-premudraya"
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Description $mol_section
		 * 	title \Описание
		 * 	level 3
		 * 	content / \Иван родился в момент, когда его отца не было дома. Отец не знал, что у него родился сын, а Морской Царь воспользовался этим. Иван-царевич растет и встречает дочь морского царя, принцессу Василису Премудрую, которая помогает ему избежать наказания.
		 * ```
		 */
		@ $mol_mem
		Description() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Описание"
			obj.level = () => 3
			obj.content = () => [
				"Иван родился в момент, когда его отца не было дома. Отец не знал, что у него родился сын, а Морской Царь воспользовался этим. Иван-царевич растет и встречает дочь морского царя, принцессу Василису Премудрую, которая помогает ему избежать наказания."
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Book $mol_section
		 * 	title \Сказка
		 * 	content / \МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ. Русская народная сказка. За тридевять земель, в тридесятом государстве жил-был царь с царицею; детей у них не было. Поехал ...
		 * ```
		 */
		@ $mol_mem
		Book() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Сказка"
			obj.content = () => [
				"МОРСКОЙ ЦАРЬ И ВАСИЛИСА ПРЕМУДРАЯ. Русская народная сказка. За тридевять земель, в тридесятом государстве жил-был царь с царицею; детей у них не было. Поехал ..."
			] as readonly any[]
			
			return obj
		}
	}
	
}

