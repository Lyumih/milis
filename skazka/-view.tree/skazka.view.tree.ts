namespace $ {
	export class $milis_skazka extends $mol_page {
		
		/**
		 * ```tree
		 * title \Сказка в Лесу
		 * ```
		 */
		title() {
			return "Сказка в Лесу"
		}
		
		/**
		 * ```tree
		 * tools /
		 * 	<= Audio_tool
		 * 	<= Video_tool
		 * 	<= Menu
		 * ```
		 */
		tools() {
			return [
				this.Audio_tool(),
				this.Video_tool(),
				this.Menu()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body / <= Hero
		 * ```
		 */
		body() {
			return [
				this.Hero()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * foot /
		 * ```
		 */
		foot() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * hero_audio \
		 * ```
		 */
		hero_audio() {
			return ""
		}
		
		/**
		 * ```tree
		 * Audio_tool $mol_link
		 * 	title \Слушать
		 * 	uri <= hero_audio
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		Audio_tool() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Слушать"
			obj.uri = () => this.hero_audio()
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * hero_video \
		 * ```
		 */
		hero_video() {
			return ""
		}
		
		/**
		 * ```tree
		 * Video_tool $mol_link
		 * 	title \Смотреть
		 * 	uri <= hero_video
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		Video_tool() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Смотреть"
			obj.uri = () => this.hero_video()
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Menu_trigger_icon $mol_icon_dots_vertical
		 * ```
		 */
		@ $mol_mem
		Menu_trigger_icon() {
			const obj = new this.$.$mol_icon_dots_vertical()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Conact_link $mol_link
		 * 	title \Есть неточность?
		 * 	uri \https://t.me/mikhail_eco_coach
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		Conact_link() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Есть неточность?"
			obj.uri = () => "https://t.me/mikhail_eco_coach"
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * LinkMol $mol_link
		 * 	title \Сделано на $mol
		 * 	uri \https://mol.hyoo.ru/
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		LinkMol() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Сделано на $mol"
			obj.uri = () => "https://mol.hyoo.ru/"
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Options_content $mol_list rows /
		 * 	<= Conact_link
		 * 	<= LinkMol
		 * ```
		 */
		@ $mol_mem
		Options_content() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Conact_link(),
				this.LinkMol()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Menu $mol_pick
		 * 	trigger_content / <= Menu_trigger_icon
		 * 	bubble_content / <= Options_content
		 * ```
		 */
		@ $mol_mem
		Menu() {
			const obj = new this.$.$mol_pick()
			
			obj.trigger_content = () => [
				this.Menu_trigger_icon()
			] as readonly any[]
			obj.bubble_content = () => [
				this.Options_content()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * hero_name \
		 * ```
		 */
		hero_name() {
			return ""
		}
		
		/**
		 * ```tree
		 * hero_fairytale \
		 * ```
		 */
		hero_fairytale() {
			return ""
		}
		
		/**
		 * ```tree
		 * hero_description \
		 * ```
		 */
		hero_description() {
			return ""
		}
		
		/**
		 * ```tree
		 * hero_text \
		 * ```
		 */
		hero_text() {
			return ""
		}
		
		/**
		 * ```tree
		 * Hero $milis_skazka_hero
		 * 	name <= hero_name
		 * 	fairytale <= hero_fairytale
		 * 	description <= hero_description
		 * 	video <= hero_video
		 * 	book <= hero_text
		 * ```
		 */
		@ $mol_mem
		Hero() {
			const obj = new this.$.$milis_skazka_hero()
			
			obj.name = () => this.hero_name()
			obj.fairytale = () => this.hero_fairytale()
			obj.description = () => this.hero_description()
			obj.video = () => this.hero_video()
			obj.book = () => this.hero_text()
			
			return obj
		}
	}
	
}

