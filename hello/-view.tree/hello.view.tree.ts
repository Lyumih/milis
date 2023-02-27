namespace $ {
	export class $milis_hello extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Name
		 * 	<= message
		 * 	<= ShowTutorial
		 * 	<= tutorial
		 * 	<= Helper
		 * ```
		 */
		sub() {
			return [
				this.Name(),
				this.message(),
				this.ShowTutorial(),
				this.tutorial(),
				this.Helper()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * name?val \
		 * ```
		 */
		@ $mol_mem
		name(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Name $mol_string
		 * 	hint @ \Name
		 * 	value?val <=> name?val
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => this.$.$mol_locale.text( '$milis_hello_Name_hint' )
			obj.value = (val?: any) => this.name(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * message \
		 * ```
		 */
		message() {
			return ""
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
		 * ShowTutorial $mol_button_major
		 * 	title @ \Show
		 * 	event_click?val <=> toggleTutorial?val
		 * ```
		 */
		@ $mol_mem
		ShowTutorial() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.$.$mol_locale.text( '$milis_hello_ShowTutorial_title' )
			obj.event_click = (val?: any) => this.toggleTutorial(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * tourItems /$milis_helper_TourItem
		 * ```
		 */
		tourItems() {
			return [
			] as readonly $milis_helper_TourItem[]
		}
		
		/**
		 * ```tree
		 * tutorial false
		 * ```
		 */
		tutorial() {
			return false
		}
		
		/**
		 * ```tree
		 * Helper $milis_helper
		 * 	items <= tourItems
		 * 	show <= tutorial
		 * 	endTour?val <=> toggleTutorial?val
		 * ```
		 */
		@ $mol_mem
		Helper() {
			const obj = new this.$.$milis_helper()
			
			obj.items = () => this.tourItems()
			obj.show = () => this.tutorial()
			obj.endTour = (val?: any) => this.toggleTutorial(val)
			
			return obj
		}
	}
	
}

