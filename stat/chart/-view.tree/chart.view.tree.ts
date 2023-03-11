namespace $ {
	export class $milis_stat_chart extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Title
		 * 	<= Chart
		 * ```
		 */
		sub() {
			return [
				this.Title(),
				this.Chart()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Title $mol_text text <= title
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.title()
			
			return obj
		}
		
		/**
		 * ```tree
		 * plan_title \Просмотры
		 * ```
		 */
		plan_title() {
			return "Просмотры"
		}
		
		/**
		 * ```tree
		 * plan /
		 * 	10
		 * 	20
		 * 	30
		 * 	40
		 * ```
		 */
		plan() {
			return [
				10,
				20,
				30,
				40
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Plan $mol_plot_bar
		 * 	title <= plan_title
		 * 	series_y <= plan
		 * ```
		 */
		@ $mol_mem
		Plan() {
			const obj = new this.$.$mol_plot_bar()
			
			obj.title = () => this.plan_title()
			obj.series_y = () => this.plan()
			
			return obj
		}
		
		/**
		 * ```tree
		 * fact_title \Посетители
		 * ```
		 */
		fact_title() {
			return "Посетители"
		}
		
		/**
		 * ```tree
		 * facts /
		 * 	5
		 * 	10
		 * 	30
		 * ```
		 */
		facts() {
			return [
				5,
				10,
				30
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Fact_line $mol_plot_line
		 * ```
		 */
		@ $mol_mem
		Fact_line() {
			const obj = new this.$.$mol_plot_line()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Fact_dots $mol_plot_dot
		 * ```
		 */
		@ $mol_mem
		Fact_dots() {
			const obj = new this.$.$mol_plot_dot()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Fact $mol_plot_group
		 * 	title <= fact_title
		 * 	series_y <= facts
		 * 	graphs /
		 * 		<= Fact_line
		 * 		<= Fact_dots
		 * ```
		 */
		@ $mol_mem
		Fact() {
			const obj = new this.$.$mol_plot_group()
			
			obj.title = () => this.fact_title()
			obj.series_y = () => this.facts()
			obj.graphs = () => [
				this.Fact_line(),
				this.Fact_dots()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * vert_title \Людей
		 * ```
		 */
		vert_title() {
			return "Людей"
		}
		
		/**
		 * ```tree
		 * Vert_ruler $mol_plot_ruler_vert title <= vert_title
		 * ```
		 */
		@ $mol_mem
		Vert_ruler() {
			const obj = new this.$.$mol_plot_ruler_vert()
			
			obj.title = () => this.vert_title()
			
			return obj
		}
		
		/**
		 * ```tree
		 * marker_hor_title \Месяцы
		 * ```
		 */
		marker_hor_title() {
			return "Месяцы"
		}
		
		/**
		 * ```tree
		 * months /string
		 * 	\Янв
		 * 	\Фев
		 * 	\Мар
		 * 	\Апр
		 * ```
		 */
		months() {
			return [
				"Янв",
				"Фев",
				"Мар",
				"Апр"
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * Marker_hor $mol_plot_mark_hor
		 * 	title <= marker_hor_title
		 * 	labels <= months
		 * ```
		 */
		@ $mol_mem
		Marker_hor() {
			const obj = new this.$.$mol_plot_mark_hor()
			
			obj.title = () => this.marker_hor_title()
			obj.labels = () => this.months()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Marker_cross $mol_plot_mark_cross
		 * 	labels <= months
		 * 	graphs /
		 * 		<= Plan
		 * 		<= Fact_dots
		 * ```
		 */
		@ $mol_mem
		Marker_cross() {
			const obj = new this.$.$mol_plot_mark_cross()
			
			obj.labels = () => this.months()
			obj.graphs = () => [
				this.Plan(),
				this.Fact_dots()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart $mol_chart graphs /
		 * 	<= Plan
		 * 	<= Fact
		 * 	<= Vert_ruler
		 * 	<= Marker_hor
		 * 	<= Marker_cross
		 * ```
		 */
		@ $mol_mem
		Chart() {
			const obj = new this.$.$mol_chart()
			
			obj.graphs = () => [
				this.Plan(),
				this.Fact(),
				this.Vert_ruler(),
				this.Marker_hor(),
				this.Marker_cross()
			] as readonly any[]
			
			return obj
		}
	}
	
}

