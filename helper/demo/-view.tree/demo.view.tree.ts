namespace $ {
	export class $milis_helper_demo extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Toggle
		 * 	<= SomeButtonForHelp
		 * 	<= Helper
		 * ```
		 */
		sub() {
			return [
				this.Toggle(),
				this.SomeButtonForHelp(),
				this.Helper()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * toggleTutorial?val null
		 * ```
		 */
		@ $mol_mem
		toggleTutorial(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Toggle $milis_helper_toggle event_click?val <=> toggleTutorial?val
		 * ```
		 */
		@ $mol_mem
		Toggle() {
			const obj = new this.$.$milis_helper_toggle()
			
			obj.event_click = (val?: any) => this.toggleTutorial(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * SomeButtonForHelp $mol_button_major
		 * ```
		 */
		@ $mol_mem
		SomeButtonForHelp() {
			const obj = new this.$.$mol_button_major()
			
			return obj
		}
		
		/**
		 * ```tree
		 * tutorialItems /
		 * ```
		 */
		tutorialItems() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tutorial?next false
		 * ```
		 */
		@ $mol_mem
		tutorial(next?: any) {
			if ( next !== undefined ) return next as never
			return false
		}
		
		/**
		 * ```tree
		 * Helper $milis_helper
		 * 	items <= tutorialItems
		 * 	show?next <=> tutorial?next
		 * ```
		 */
		@ $mol_mem
		Helper() {
			const obj = new this.$.$milis_helper()
			
			obj.items = () => this.tutorialItems()
			obj.show = (next?: any) => this.tutorial(next)
			
			return obj
		}
	}
	
}

