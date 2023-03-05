namespace $ {
	export class $milis_skazka extends $mol_book2_catalog {
		
		/**
		 * ```tree
		 * param \skazka
		 * ```
		 */
		param() {
			return "skazka"
		}
		
		/**
		 * ```tree
		 * title \Окно в Сказку
		 * ```
		 */
		title() {
			return "Окно в Сказку"
		}
		
		/**
		 * ```tree
		 * menu_title \Сказка
		 * ```
		 */
		menu_title() {
			return "Сказка"
		}
		
		/**
		 * ```tree
		 * spreads *
		 * 	heroes <= Button2
		 * 	map <= Button
		 * ```
		 */
		spreads() {
			return {
				heroes: this.Button2(),
				map: this.Button()
			}
		}
		
		/**
		 * ```tree
		 * VasilisaHero $milis_skazka_hero
		 * ```
		 */
		@ $mol_mem
		VasilisaHero() {
			const obj = new this.$.$milis_skazka_hero()
			
			return obj
		}
		
		/**
		 * ```tree
		 * VasilisaPage $mol_page
		 * 	title \Василиса Премудрая
		 * 	body / <= VasilisaHero
		 * ```
		 */
		@ $mol_mem
		VasilisaPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Василиса Премудрая"
			obj.body = () => [
				this.VasilisaHero()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * TriBogatirya $milis_skazka_hero
		 * ```
		 */
		@ $mol_mem
		TriBogatirya() {
			const obj = new this.$.$milis_skazka_hero()
			
			return obj
		}
		
		/**
		 * ```tree
		 * TriBogatiryaPage $mol_page
		 * 	title \Три богатыря
		 * 	body / <= TriBogatirya
		 * ```
		 */
		@ $mol_mem
		TriBogatiryaPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Три богатыря"
			obj.body = () => [
				this.TriBogatirya()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Button2 $mol_book2_catalog
		 * 	param \heroes
		 * 	menu_title \Персонажи
		 * 	spreads *
		 * 		vasilisa <= VasilisaPage
		 * 		tri_bogatirya <= TriBogatiryaPage
		 * ```
		 */
		@ $mol_mem
		Button2() {
			const obj = new this.$.$mol_book2_catalog()
			
			obj.param = () => "heroes"
			obj.menu_title = () => "Персонажи"
			obj.spreads = () => ({
				vasilisa: this.VasilisaPage(),
				tri_bogatirya: this.TriBogatiryaPage()
			})
			
			return obj
		}
		
		/**
		 * ```tree
		 * place_title \
		 * ```
		 */
		place_title() {
			return ""
		}
		
		/**
		 * ```tree
		 * place_addres \Saint-Petersburg
		 * ```
		 */
		place_addres() {
			return "Saint-Petersburg"
		}
		
		/**
		 * ```tree
		 * place_content \It is Russia's second-largest city after Moscow
		 * ```
		 */
		place_content() {
			return "It is Russia's second-largest city after Moscow"
		}
		
		/**
		 * ```tree
		 * Place $mol_map_yandex_mark
		 * 	title <= place_title
		 * 	address <= place_addres
		 * 	content <= place_content
		 * ```
		 */
		@ $mol_mem
		Place() {
			const obj = new this.$.$mol_map_yandex_mark()
			
			obj.title = () => this.place_title()
			obj.address = () => this.place_addres()
			obj.content = () => this.place_content()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Map $mol_map_yandex objects / <= Place
		 * ```
		 */
		@ $mol_mem
		Map() {
			const obj = new this.$.$mol_map_yandex()
			
			obj.objects = () => [
				this.Place()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Button $mol_page
		 * 	title \Карта
		 * 	body / <= Map
		 * ```
		 */
		@ $mol_mem
		Button() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Карта"
			obj.body = () => [
				this.Map()
			] as readonly any[]
			
			return obj
		}
	}
	
}

