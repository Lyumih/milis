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
		 * Column* $milis_ballsort_column sub <= column_balls*
		 * ```
		 */
		@ $mol_mem_key
		Column(id: any) {
			const obj = new this.$.$milis_ballsort_column()
			
			obj.sub = () => this.column_balls(id)
			
			return obj
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
		 * columns /
		 * ```
		 */
		columns() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Table $mol_view sub <= columns
		 * ```
		 */
		@ $mol_mem
		Table() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.columns()
			
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
		 * ball_color* \
		 * ```
		 */
		ball_color(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Ball* $milis_ballsort_ball attr * color <= ball_color*
		 * ```
		 */
		@ $mol_mem_key
		Ball(id: any) {
			const obj = new this.$.$milis_ballsort_ball()
			
			obj.attr = () => ({
				color: this.ball_color(id)
			} as Record< string, any >)
			
			return obj
		}
		
		/**
		 * ```tree
		 * column_balls* / <= Ball*
		 * ```
		 */
		column_balls(id: any) {
			return [
				this.Ball(id)
			] as readonly any[]
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
	
	export class $milis_ballsort_column extends $mol_button_minor {
		
		/**
		 * ```tree
		 * click? <= click_column?
		 * ```
		 */
		click(next?: any) {
			return this.click_column()
		}
		
		/**
		 * ```tree
		 * click_column? null
		 * ```
		 */
		@ $mol_mem
		click_column(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
	}
	
	export class $milis_ballsort_ball extends $mol_view {
	}
	
}

