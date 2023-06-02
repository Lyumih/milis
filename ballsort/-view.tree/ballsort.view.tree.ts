namespace $ {
	export class $milis_ballsort extends $mol_page {
		
		/**
		 * ```tree
		 * title \BALL SORT
		 * ```
		 */
		title() {
			return "BALL SORT"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Start
		 * 	<= Game
		 * ```
		 */
		body() {
			return [
				this.Start(),
				this.Game()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * foot /
		 * 	<= Mol
		 * 	<= Source
		 * ```
		 */
		foot() {
			return [
				this.Mol(),
				this.Source()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * start_game? null
		 * ```
		 */
		@ $mol_mem
		start_game(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Start $mol_button_major
		 * 	title \Start game
		 * 	click? <= start_game?
		 * ```
		 */
		@ $mol_mem
		Start() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Start game"
			obj.click = (next?: any) => this.start_game()
			
			return obj
		}
		
		/**
		 * ```tree
		 * back? null
		 * ```
		 */
		@ $mol_mem
		back(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Back $mol_button_minor
		 * 	title \<-
		 * 	click? <= back?
		 * ```
		 */
		@ $mol_mem
		Back() {
			const obj = new this.$.$mol_button_minor()
			
			obj.title = () => "<-"
			obj.click = (next?: any) => this.back()
			
			return obj
		}
		
		/**
		 * ```tree
		 * restart? null
		 * ```
		 */
		@ $mol_mem
		restart(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Restart $mol_button_minor click? <= restart?
		 * ```
		 */
		@ $mol_mem
		Restart() {
			const obj = new this.$.$mol_button_minor()
			
			obj.click = (next?: any) => this.restart()
			
			return obj
		}
		
		/**
		 * ```tree
		 * moves_text \
		 * ```
		 */
		moves_text() {
			return ""
		}
		
		/**
		 * ```tree
		 * Moves $mol_text text <= moves_text
		 * ```
		 */
		@ $mol_mem
		Moves() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.moves_text()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Info $mol_hor sub /
		 * 	<= Back
		 * 	<= Restart
		 * 	<= Moves
		 * ```
		 */
		@ $mol_mem
		Info() {
			const obj = new this.$.$mol_hor()
			
			obj.sub = () => [
				this.Back(),
				this.Restart(),
				this.Moves()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * click_cup? null
		 * ```
		 */
		@ $mol_mem
		click_cup(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Cup $milis_ballsort_cup click_cup? <= click_cup?
		 * ```
		 */
		@ $mol_mem
		Cup() {
			const obj = new this.$.$milis_ballsort_cup()
			
			obj.click_cup = (next?: any) => this.click_cup()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cup2 $milis_ballsort_cup click_cup? <= click_cup?
		 * ```
		 */
		@ $mol_mem
		Cup2() {
			const obj = new this.$.$milis_ballsort_cup()
			
			obj.click_cup = (next?: any) => this.click_cup()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cup3 $milis_ballsort_cup click_cup? <= click_cup?
		 * ```
		 */
		@ $mol_mem
		Cup3() {
			const obj = new this.$.$milis_ballsort_cup()
			
			obj.click_cup = (next?: any) => this.click_cup()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cup4 $milis_ballsort_cup click_cup? <= click_cup?
		 * ```
		 */
		@ $mol_mem
		Cup4() {
			const obj = new this.$.$milis_ballsort_cup()
			
			obj.click_cup = (next?: any) => this.click_cup()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cup5 $milis_ballsort_cup click_cup? <= click_cup?
		 * ```
		 */
		@ $mol_mem
		Cup5() {
			const obj = new this.$.$milis_ballsort_cup()
			
			obj.click_cup = (next?: any) => this.click_cup()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cup6 $milis_ballsort_cup click_cup? <= click_cup?
		 * ```
		 */
		@ $mol_mem
		Cup6() {
			const obj = new this.$.$milis_ballsort_cup()
			
			obj.click_cup = (next?: any) => this.click_cup()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Table $mol_view sub /
		 * 	<= Cup
		 * 	<= Cup2
		 * 	<= Cup3
		 * 	<= Cup4
		 * 	<= Cup5
		 * 	<= Cup6
		 * ```
		 */
		@ $mol_mem
		Table() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Cup(),
				this.Cup2(),
				this.Cup3(),
				this.Cup4(),
				this.Cup5(),
				this.Cup6()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Game $mol_list sub /
		 * 	<= Info
		 * 	<= Table
		 * ```
		 */
		@ $mol_mem
		Game() {
			const obj = new this.$.$mol_list()
			
			obj.sub = () => [
				this.Info(),
				this.Table()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Mol $mol_link_iconed
		 * 	title \$mol
		 * 	uri \https://mol.hyoo.ru/
		 * ```
		 */
		@ $mol_mem
		Mol() {
			const obj = new this.$.$mol_link_iconed()
			
			obj.title = () => "$mol"
			obj.uri = () => "https://mol.hyoo.ru/"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Source $mol_link_iconed
		 * 	title \Source Code
		 * 	uri \https://github.com/Lyumih/milis//tree/main/ballsort
		 * ```
		 */
		@ $mol_mem
		Source() {
			const obj = new this.$.$mol_link_iconed()
			
			obj.title = () => "Source Code"
			obj.uri = () => "https://github.com/Lyumih/milis//tree/main/ballsort"
			
			return obj
		}
	}
	
	export class $milis_ballsort_cup extends $mol_button_minor {
		
		/**
		 * ```tree
		 * click? <= click_cup?
		 * ```
		 */
		click(next?: any) {
			return this.click_cup()
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Ball1
		 * 	<= Ball2
		 * 	<= Ball3
		 * 	<= Ball4
		 * ```
		 */
		sub() {
			return [
				this.Ball1(),
				this.Ball2(),
				this.Ball3(),
				this.Ball4()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * click_cup? null
		 * ```
		 */
		@ $mol_mem
		click_cup(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Ball1 $milis_ballsort_ball
		 * ```
		 */
		@ $mol_mem
		Ball1() {
			const obj = new this.$.$milis_ballsort_ball()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Ball2 $milis_ballsort_ball
		 * ```
		 */
		@ $mol_mem
		Ball2() {
			const obj = new this.$.$milis_ballsort_ball()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Ball3 $milis_ballsort_ball
		 * ```
		 */
		@ $mol_mem
		Ball3() {
			const obj = new this.$.$milis_ballsort_ball()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Ball4 $milis_ballsort_ball
		 * ```
		 */
		@ $mol_mem
		Ball4() {
			const obj = new this.$.$milis_ballsort_ball()
			
			return obj
		}
	}
	
	export class $milis_ballsort_ball extends $mol_view {
	}
	
}

