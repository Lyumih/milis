namespace $ {
	export class $milis_helper extends $mol_list {
		
		/**
		 * ```tree
		 * rows /
		 * 	<= Title
		 * 	<= Content
		 * 	<= Buttons
		 * ```
		 */
		rows() {
			return [
				this.Title(),
				this.Content(),
				this.Buttons()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * currentItemTitle \
		 * ```
		 */
		currentItemTitle() {
			return ""
		}
		
		/**
		 * ```tree
		 * Title $mol_text text <= currentItemTitle
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.currentItemTitle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * currentItemContent \
		 * ```
		 */
		currentItemContent() {
			return ""
		}
		
		/**
		 * ```tree
		 * Content $mol_text text <= currentItemContent
		 * ```
		 */
		@ $mol_mem
		Content() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.currentItemContent()
			
			return obj
		}
		
		/**
		 * ```tree
		 * prevStep?val null
		 * ```
		 */
		@ $mol_mem
		prevStep(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * prevStepDisabled false
		 * ```
		 */
		prevStepDisabled() {
			return false
		}
		
		/**
		 * ```tree
		 * Preview $mol_button_major
		 * 	title @ \<< Prev
		 * 	event_click?val <=> prevStep?val
		 * 	disabled <= prevStepDisabled
		 * ```
		 */
		@ $mol_mem
		Preview() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.$.$mol_locale.text( '$milis_helper_Preview_title' )
			obj.event_click = (val?: any) => this.prevStep(val)
			obj.disabled = () => this.prevStepDisabled()
			
			return obj
		}
		
		/**
		 * ```tree
		 * nextStep?val null
		 * ```
		 */
		@ $mol_mem
		nextStep(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * nextStepDisabled false
		 * ```
		 */
		nextStepDisabled() {
			return false
		}
		
		/**
		 * ```tree
		 * Next $mol_button_major
		 * 	title @ \Next >>
		 * 	event_click?val <=> nextStep?val
		 * 	disabled <= nextStepDisabled
		 * ```
		 */
		@ $mol_mem
		Next() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.$.$mol_locale.text( '$milis_helper_Next_title' )
			obj.event_click = (val?: any) => this.nextStep(val)
			obj.disabled = () => this.nextStepDisabled()
			
			return obj
		}
		
		/**
		 * ```tree
		 * endTour?val null
		 * ```
		 */
		@ $mol_mem
		endTour(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * End $mol_button_major
		 * 	title @ \End Tour
		 * 	event_click?val <=> endTour?val
		 * ```
		 */
		@ $mol_mem
		End() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.$.$mol_locale.text( '$milis_helper_End_title' )
			obj.event_click = (val?: any) => this.endTour(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Buttons $mol_view sub /
		 * 	<= Preview
		 * 	<= Next
		 * 	<= End
		 * ```
		 */
		@ $mol_mem
		Buttons() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Preview(),
				this.Next(),
				this.End()
			] as readonly any[]
			
			return obj
		}
	}
	
}

