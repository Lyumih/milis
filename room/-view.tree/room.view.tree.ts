namespace $ {
	export class $milis_room extends $mol_page {
		
		/**
		 * ```tree
		 * title \Длина и ширина комнаты по плану
		 * ```
		 */
		title() {
			return "Длина и ширина комнаты по плану"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Square_labeler
		 * 	<= A_labeler
		 * 	<= B_labeler
		 * 	<= Result
		 * 	<= Custom_labeler
		 * 	<= Custom_result
		 * ```
		 */
		body() {
			return [
				this.Square_labeler(),
				this.A_labeler(),
				this.B_labeler(),
				this.Result(),
				this.Custom_labeler(),
				this.Custom_result()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * square? 1061
		 * ```
		 */
		@ $mol_mem
		square(next?: any) {
			if ( next !== undefined ) return next as never
			return 1061
		}
		
		/**
		 * ```tree
		 * Square $mol_number value? <=> square?
		 * ```
		 */
		@ $mol_mem
		Square() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.square(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Square_labeler $mol_labeler
		 * 	title \Площадь комнаты, м2 (нужно умножить на 100, т.е. 10.61м2 = 1061)
		 * 	content / <= Square
		 * ```
		 */
		@ $mol_mem
		Square_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Площадь комнаты, м2 (нужно умножить на 100, т.е. 10.61м2 = 1061)"
			obj.content = () => [
				this.Square()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * a? 29
		 * ```
		 */
		@ $mol_mem
		a(next?: any) {
			if ( next !== undefined ) return next as never
			return 29
		}
		
		/**
		 * ```tree
		 * A $mol_number value? <=> a?
		 * ```
		 */
		@ $mol_mem
		A() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.a(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * A_labeler $mol_labeler
		 * 	title \Длина комнаты на плане, мм
		 * 	content / <= A
		 * ```
		 */
		@ $mol_mem
		A_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Длина комнаты на плане, мм"
			obj.content = () => [
				this.A()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * b? 25
		 * ```
		 */
		@ $mol_mem
		b(next?: any) {
			if ( next !== undefined ) return next as never
			return 25
		}
		
		/**
		 * ```tree
		 * B $mol_number value? <=> b?
		 * ```
		 */
		@ $mol_mem
		B() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.b(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * B_labeler $mol_labeler
		 * 	title \Ширина комнаты на плане, мм
		 * 	content / <= B
		 * ```
		 */
		@ $mol_mem
		B_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Ширина комнаты на плане, мм"
			obj.content = () => [
				this.B()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * result \
		 * ```
		 */
		result() {
			return ""
		}
		
		/**
		 * ```tree
		 * Result $mol_text text <= result
		 * ```
		 */
		@ $mol_mem
		Result() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.result()
			
			return obj
		}
		
		/**
		 * ```tree
		 * custom? 100
		 * ```
		 */
		@ $mol_mem
		custom(next?: any) {
			if ( next !== undefined ) return next as never
			return 100
		}
		
		/**
		 * ```tree
		 * Custom $mol_number value? <=> custom?
		 * ```
		 */
		@ $mol_mem
		Custom() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.custom(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Custom_labeler $mol_labeler
		 * 	title \Произвольная длина из мм плана
		 * 	content / <= Custom
		 * ```
		 */
		@ $mol_mem
		Custom_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Произвольная длина из мм плана"
			obj.content = () => [
				this.Custom()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * custom_result \
		 * ```
		 */
		custom_result() {
			return ""
		}
		
		/**
		 * ```tree
		 * Custom_result $mol_text text <= custom_result
		 * ```
		 */
		@ $mol_mem
		Custom_result() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.custom_result()
			
			return obj
		}
	}
	
}

