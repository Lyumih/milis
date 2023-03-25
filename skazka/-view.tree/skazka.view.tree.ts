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
		 * 	<= Conact_link
		 * 	<= LinkMol
		 * ```
		 */
		foot() {
			return [
				this.Conact_link(),
				this.LinkMol()
			] as readonly any[]
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
		 * hero_audio \
		 * ```
		 */
		hero_audio() {
			return ""
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
		 * 	audio <= hero_audio
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
			obj.audio = () => this.hero_audio()
			obj.video = () => this.hero_video()
			obj.book = () => this.hero_text()
			
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
		 * 	uri \https://t.me/mam_mol
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		LinkMol() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Сделано на $mol"
			obj.uri = () => "https://t.me/mam_mol"
			obj.target = () => "_blank"
			
			return obj
		}
	}
	
}

