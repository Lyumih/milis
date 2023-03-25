namespace $ {
	export class $milis_skazka_hero extends $mol_list {
		
		/**
		 * ```tree
		 * rows /$mol_view
		 * 	<= Title
		 * 	<= Description
		 * 	<= Videobook
		 * 	<= Book
		 * ```
		 */
		rows() {
			return [
				this.Title(),
				this.Description(),
				this.Videobook(),
				this.Book()
			] as readonly $mol_view[]
		}
		
		/**
		 * ```tree
		 * name \
		 * ```
		 */
		name() {
			return ""
		}
		
		/**
		 * ```tree
		 * Title $mol_section
		 * 	level 4
		 * 	title <= name
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_section()
			
			obj.level = () => 4
			obj.title = () => this.name()
			
			return obj
		}
		
		/**
		 * ```tree
		 * description \
		 * ```
		 */
		description() {
			return ""
		}
		
		/**
		 * ```tree
		 * Description_text $mol_text text <= description
		 * ```
		 */
		@ $mol_mem
		Description_text() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.description()
			
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
		 * video \
		 * ```
		 */
		video() {
			return ""
		}
		
		/**
		 * ```tree
		 * Videobook $mol_embed_youtube uri <= video
		 * ```
		 */
		@ $mol_mem
		Videobook() {
			const obj = new this.$.$mol_embed_youtube()
			
			obj.uri = () => this.video()
			
			return obj
		}
		
		/**
		 * ```tree
		 * book \
		 * ```
		 */
		book() {
			return ""
		}
		
		/**
		 * ```tree
		 * Book_text $mol_text text <= book
		 * ```
		 */
		@ $mol_mem
		Book_text() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.book()
			
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
	}
	
}

