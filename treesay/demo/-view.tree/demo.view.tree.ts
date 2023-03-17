namespace $ {
	export class $milis_treesay_demo extends $mol_example_large {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Say
		 * 	<= View_tree
		 * 	<= Text_view_tree
		 * 	<= Grammar
		 * ```
		 */
		sub() {
			return [
				this.Say(),
				this.View_tree(),
				this.Text_view_tree(),
				this.Grammar()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * say?event null
		 * ```
		 */
		@ $mol_mem
		say(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Icon_text_to_speach $mol_icon_text_to_speech
		 * ```
		 */
		@ $mol_mem
		Icon_text_to_speach() {
			const obj = new this.$.$mol_icon_text_to_speech()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Say $mol_button_minor
		 * 	click?event <=> say?event
		 * 	sub / <= Icon_text_to_speach
		 * ```
		 */
		@ $mol_mem
		Say() {
			const obj = new this.$.$mol_button_minor()
			
			obj.click = (event?: any) => this.say(event)
			obj.sub = () => [
				this.Icon_text_to_speach()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * view_tree_input? \
		 * ```
		 */
		@ $mol_mem
		view_tree_input(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * View_tree $mol_textarea
		 * 	hint \view.tree
		 * 	value? <=> view_tree_input?
		 * ```
		 */
		@ $mol_mem
		View_tree() {
			const obj = new this.$.$mol_textarea()
			
			obj.hint = () => "view.tree"
			obj.value = (next?: any) => this.view_tree_input(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * view_tree_parsed_show \
		 * ```
		 */
		view_tree_parsed_show() {
			return ""
		}
		
		/**
		 * ```tree
		 * Text_view_tree $mol_textarea
		 * 	hint \View Tree in text
		 * 	value <= view_tree_parsed_show
		 * 	enabled false
		 * ```
		 */
		@ $mol_mem
		Text_view_tree() {
			const obj = new this.$.$mol_textarea()
			
			obj.hint = () => "View Tree in text"
			obj.value = () => this.view_tree_parsed_show()
			obj.enabled = () => false
			
			return obj
		}
		
		/**
		 * ```tree
		 * grammar_text \
		 * ```
		 */
		grammar_text() {
			return ""
		}
		
		/**
		 * ```tree
		 * Grammar $mol_textarea
		 * 	value <= grammar_text
		 * 	hint \Граматика
		 * 	enabled \false
		 * ```
		 */
		@ $mol_mem
		Grammar() {
			const obj = new this.$.$mol_textarea()
			
			obj.value = () => this.grammar_text()
			obj.hint = () => "Граматика"
			obj.enabled = () => "false"
			
			return obj
		}
	}
	
}

