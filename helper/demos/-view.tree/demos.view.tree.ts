namespace $ {
	export class $milis_helper_demos extends $mol_book2_catalog {
		
		/**
		 * ```tree
		 * Empty $mol_status
		 * ```
		 */
		@ $mol_mem
		Empty() {
			const obj = new this.$.$mol_status()
			
			return obj
		}
		
		/**
		 * ```tree
		 * menu_title \Components
		 * ```
		 */
		menu_title() {
			return "Components"
		}
		
		/**
		 * ```tree
		 * spreads *
		 * 	milis_helper_demo <= MilisHelperPageDemo
		 * 	milis_helper <= HelperPage
		 * 	milis_helper_toggle <= TogglePage
		 * ```
		 */
		spreads() {
			return {
				milis_helper_demo: this.MilisHelperPageDemo(),
				milis_helper: this.HelperPage(),
				milis_helper_toggle: this.TogglePage()
			}
		}
		
		/**
		 * ```tree
		 * MilisToggle $milis_helper_demo
		 * ```
		 */
		@ $mol_mem
		MilisToggle() {
			const obj = new this.$.$milis_helper_demo()
			
			return obj
		}
		
		/**
		 * ```tree
		 * MilisHelperPageDemo $mol_page
		 * 	title \$milis_helper_demo
		 * 	body / <= MilisToggle
		 * ```
		 */
		@ $mol_mem
		MilisHelperPageDemo() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "$milis_helper_demo"
			obj.body = () => [
				this.MilisToggle()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * MilisHelper $milis_helper
		 * ```
		 */
		@ $mol_mem
		MilisHelper() {
			const obj = new this.$.$milis_helper()
			
			return obj
		}
		
		/**
		 * ```tree
		 * HelperPage $mol_page
		 * 	title \$milis_helper
		 * 	body / <= MilisHelper
		 * ```
		 */
		@ $mol_mem
		HelperPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "$milis_helper"
			obj.body = () => [
				this.MilisHelper()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * MilisHelperToggle $milis_helper_toggle
		 * ```
		 */
		@ $mol_mem
		MilisHelperToggle() {
			const obj = new this.$.$milis_helper_toggle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * TogglePage $mol_page
		 * 	title \$milis_helper_toggle
		 * 	body / <= MilisHelperToggle
		 * ```
		 */
		@ $mol_mem
		TogglePage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "$milis_helper_toggle"
			obj.body = () => [
				this.MilisHelperToggle()
			] as readonly any[]
			
			return obj
		}
	}
	
}

