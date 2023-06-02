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
		 * Column* $mol_button_minor
		 * 	attr * active <= active*
		 * 	click? <= click_column*?
		 * 	sub <= column_balls*
		 * ```
		 */
		@ $mol_mem_key
		Column(id: any) {
			const obj = new this.$.$mol_button_minor()
			
			obj.attr = () => ({
				active: this.active(id)
			} as Record< string, any >)
			obj.click = (next?: any) => this.click_column(id)
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
		 * Scene $mol_view sub <= columns
		 * ```
		 */
		@ $mol_mem
		Scene() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.columns()
			
			return obj
		}
		
		/**
		 * ```tree
		 * win_content / \You are win!
		 * ```
		 */
		win_content() {
			return [
				"You are win!"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Win $mol_view sub <= win_content
		 * ```
		 */
		@ $mol_mem
		Win() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.win_content()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Game $mol_list sub /
		 * 	<= Info
		 * 	<= Scene
		 * 	<= Win
		 * ```
		 */
		@ $mol_mem
		Game() {
			const obj = new this.$.$mol_list()
			
			obj.sub = () => [
				this.Info(),
				this.Scene(),
				this.Win()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * active* false
		 * ```
		 */
		active(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * click_column*? null
		 * ```
		 */
		@ $mol_mem_key
		click_column(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
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
		 * Ball* $mol_view attr * color <= ball_color*
		 * ```
		 */
		@ $mol_mem_key
		Ball(id: any) {
			const obj = new this.$.$mol_view()
			
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
	
}

