namespace $ {
	export class $milis_helper_toggle_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \Search field with suggest
		 * ```
		 */
		title() {
			return "Search field with suggest"
		}
		
		/**
		 * ```tree
		 * sub / <= Toggle
		 * ```
		 */
		sub() {
			return [
				this.Toggle()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\milis
		 * 	\helper
		 * 	\demo
		 * ```
		 */
		tags() {
			return [
				"milis",
				"helper",
				"demo"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Toggle $milis_helper_toggle
		 * ```
		 */
		@ $mol_mem
		Toggle() {
			const obj = new this.$.$milis_helper_toggle()
			
			return obj
		}
	}
	
}

