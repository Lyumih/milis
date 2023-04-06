namespace $ {
	export class $milis_domino extends $mol_page {
		
		/**
		 * ```tree
		 * title \Домино
		 * ```
		 */
		title() {
			return "Домино"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Dice1
		 * 	<= Dice2
		 * 	<= Dice3
		 * 	<= Dice4
		 * ```
		 */
		body() {
			return [
				this.Dice1(),
				this.Dice2(),
				this.Dice3(),
				this.Dice4()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Dice1 $milis_domino_dice
		 * 	first 0
		 * 	second 1
		 * ```
		 */
		@ $mol_mem
		Dice1() {
			const obj = new this.$.$milis_domino_dice()
			
			obj.first = () => 0
			obj.second = () => 1
			
			return obj
		}
		
		/**
		 * ```tree
		 * Dice2 $milis_domino_dice
		 * 	first 2
		 * 	second 3
		 * ```
		 */
		@ $mol_mem
		Dice2() {
			const obj = new this.$.$milis_domino_dice()
			
			obj.first = () => 2
			obj.second = () => 3
			
			return obj
		}
		
		/**
		 * ```tree
		 * Dice3 $milis_domino_dice
		 * 	first 4
		 * 	second 5
		 * ```
		 */
		@ $mol_mem
		Dice3() {
			const obj = new this.$.$milis_domino_dice()
			
			obj.first = () => 4
			obj.second = () => 5
			
			return obj
		}
		
		/**
		 * ```tree
		 * Dice4 $milis_domino_dice
		 * 	first 6
		 * 	second 6
		 * ```
		 */
		@ $mol_mem
		Dice4() {
			const obj = new this.$.$milis_domino_dice()
			
			obj.first = () => 6
			obj.second = () => 6
			
			return obj
		}
	}
	
	export class $milis_domino_dice extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= First
		 * 	<= Second
		 * ```
		 */
		sub() {
			return [
				this.First(),
				this.Second()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * first 0
		 * ```
		 */
		first() {
			return 0
		}
		
		/**
		 * ```tree
		 * First $mol_view attr * first <= first
		 * ```
		 */
		@ $mol_mem
		First() {
			const obj = new this.$.$mol_view()
			
			obj.attr = () => ({
				first: this.first()
			})
			
			return obj
		}
		
		/**
		 * ```tree
		 * second 0
		 * ```
		 */
		second() {
			return 0
		}
		
		/**
		 * ```tree
		 * Second $mol_view attr * second <= second
		 * ```
		 */
		@ $mol_mem
		Second() {
			const obj = new this.$.$mol_view()
			
			obj.attr = () => ({
				second: this.second()
			})
			
			return obj
		}
	}
	
}

