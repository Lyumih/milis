namespace $ {
	export class $milis_hello extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Name
		 * 	<= message
		 * 	<= Test
		 * 	<= Helper
		 * ```
		 */
		sub() {
			return [
				this.Name(),
				this.message(),
				this.Test(),
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
		 * Test $mol_view
		 * ```
		 */
		@ $mol_mem
		Test() {
			const obj = new this.$.$mol_view()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Helper $milis_helper
		 * ```
		 */
		@ $mol_mem
		Helper() {
			const obj = new this.$.$milis_helper()
			
			return obj
		}
	}
	
}

