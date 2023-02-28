namespace $ {
	export class $milis_helper_toggle extends $mol_button_minor {
		
		/**
		 * ```tree
		 * hint \Start tutorial
		 * ```
		 */
		hint() {
			return "Start tutorial"
		}
		
		/**
		 * ```tree
		 * sub / <= Icon
		 * ```
		 */
		sub() {
			return [
				this.Icon()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Icon $mol_icon_comment_question_outline
		 * ```
		 */
		@ $mol_mem
		Icon() {
			const obj = new this.$.$mol_icon_comment_question_outline()
			
			return obj
		}
	}
	
}

