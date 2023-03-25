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
		 * Name $mol_section
		 * 	level 4
		 * 	title <= hero_name
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_section()
			
			obj.level = () => 4
			obj.title = () => this.hero_name()
			
			return obj
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
		 * Description_text $mol_text text <= hero_description
		 * ```
		 */
		@ $mol_mem
		Description_text() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.hero_description()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Description $mol_section
		 * 	title \
		 * 	level 3
		 * 	content / <= Description_text
		 * ```
		 */
		@ $mol_mem
		Description() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => ""
			obj.level = () => 3
			obj.content = () => [
				this.Description_text()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Videobook $mol_embed_youtube uri <= hero_video
		 * ```
		 */
		@ $mol_mem
		Videobook() {
			const obj = new this.$.$mol_embed_youtube()
			
			obj.uri = () => this.hero_video()
			
			return obj
		}
		
		/**
		 * ```tree
		 * fairytale \
		 * ```
		 */
		fairytale() {
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
		 * Book_text $mol_text text <= hero_text
		 * ```
		 */
		@ $mol_mem
		Book_text() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.hero_text()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Book $mol_section
		 * 	title <= fairytale
		 * 	content / <= Book_text
		 * ```
		 */
		@ $mol_mem
		Book() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => this.fairytale()
			obj.content = () => [
				this.Book_text()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Hero $mol_list rows /$mol_view
		 * 	<= Name
		 * 	<= Description
		 * 	<= Videobook
		 * 	<= Book
		 * ```
		 */
		@ $mol_mem
		Hero() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Name(),
				this.Description(),
				this.Videobook(),
				this.Book()
			] as readonly $mol_view[]
			
			return obj
		}
	}
	
}

