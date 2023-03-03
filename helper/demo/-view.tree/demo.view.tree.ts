namespace $ {
	export class $milis_helper_demo extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Toggle
		 * 	<= SomeButtonForHelp
		 * 	<= SomeButtonForHelp2
		 * 	<= SomeButtonForHelp3
		 * 	<= Hint1
		 * ```
		 */
		sub() {
			return [
				this.Toggle(),
				this.SomeButtonForHelp(),
				this.SomeButtonForHelp2(),
				this.SomeButtonForHelp3(),
				this.Hint1()
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
		 * SomeButtonForHelp2 $mol_button_major
		 * ```
		 */
		@ $mol_mem
		SomeButtonForHelp2() {
			const obj = new this.$.$mol_button_major()
			
			return obj
		}
		
		/**
		 * ```tree
		 * SomeButtonForHelp3 $mol_button_major
		 * ```
		 */
		@ $mol_mem
		SomeButtonForHelp3() {
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
		
		/**
		 * ```tree
		 * Hint1 $mol_pop
		 * 	Anchor <= SomeButtonForHelp2
		 * 	showed true
		 * 	align \bottom
		 * 	bubble_content / <= Helper
		 * ```
		 */
		@ $mol_mem
		Hint1() {
			const obj = new this.$.$mol_pop()
			
			obj.Anchor = () => this.SomeButtonForHelp2()
			obj.showed = () => true
			obj.align = () => "bottom"
			obj.bubble_content = () => [
				this.Helper()
			] as readonly any[]
			
			return obj
		}
	}
	
}

