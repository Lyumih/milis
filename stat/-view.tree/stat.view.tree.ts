namespace $ {
	export class $milis_stat extends $mol_book2_catalog {
		
		/**
		 * ```tree
		 * param \stat
		 * ```
		 */
		param() {
			return "stat"
		}
		
		/**
		 * ```tree
		 * title \Что-то Стат
		 * ```
		 */
		title() {
			return "Что-то Стат"
		}
		
		/**
		 * ```tree
		 * menu_title \Статистика
		 * ```
		 */
		menu_title() {
			return "Статистика"
		}
		
		/**
		 * ```tree
		 * spreads *
		 * 	all <= AllPage
		 * 	users <= UsersPage
		 * 	visits <= VisitsPage
		 * 	geo <= GeoPage
		 * 	from <= FromPage
		 * 	query <= QueryPage
		 * 	events <= EventsPage
		 * 	conversion <= ConversionPage
		 * 	github <= GitHub
		 * ```
		 */
		spreads() {
			return {
				all: this.AllPage(),
				users: this.UsersPage(),
				visits: this.VisitsPage(),
				geo: this.GeoPage(),
				from: this.FromPage(),
				query: this.QueryPage(),
				events: this.EventsPage(),
				conversion: this.ConversionPage(),
				github: this.GitHub()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * Chart1 $milis_stat_chart title \Посетители по месяцам
		 * ```
		 */
		@ $mol_mem
		Chart1() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Посетители по месяцам"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart2 $milis_stat_chart title \Визиты
		 * ```
		 */
		@ $mol_mem
		Chart2() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Визиты"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart3 $milis_stat_chart title \География
		 * ```
		 */
		@ $mol_mem
		Chart3() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "География"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart4 $milis_stat_chart title \Откуда пришли
		 * ```
		 */
		@ $mol_mem
		Chart4() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Откуда пришли"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart5 $milis_stat_chart title \По какие запросам шли
		 * ```
		 */
		@ $mol_mem
		Chart5() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "По какие запросам шли"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart6 $milis_stat_chart title \Ивенты
		 * ```
		 */
		@ $mol_mem
		Chart6() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Ивенты"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Chart7 $milis_stat_chart title \Конверсия Ивентов
		 * ```
		 */
		@ $mol_mem
		Chart7() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Конверсия Ивентов"
			
			return obj
		}
		
		/**
		 * ```tree
		 * AllPage $mol_page
		 * 	title \Все графики
		 * 	body /
		 * 		<= Chart1
		 * 		<= Chart2
		 * 		<= Chart3
		 * 		<= Chart4
		 * 		<= Chart5
		 * 		<= Chart6
		 * 		<= Chart7
		 * ```
		 */
		@ $mol_mem
		AllPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Все графики"
			obj.body = () => [
				this.Chart1(),
				this.Chart2(),
				this.Chart3(),
				this.Chart4(),
				this.Chart5(),
				this.Chart6(),
				this.Chart7()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyUsers $milis_stat_chart title \Посетители
		 * ```
		 */
		@ $mol_mem
		ChartOnlyUsers() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Посетители"
			
			return obj
		}
		
		/**
		 * ```tree
		 * UsersPage $mol_page
		 * 	title \Посетители
		 * 	body / <= ChartOnlyUsers
		 * ```
		 */
		@ $mol_mem
		UsersPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Посетители"
			obj.body = () => [
				this.ChartOnlyUsers()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyVisits $milis_stat_chart title \Визиты
		 * ```
		 */
		@ $mol_mem
		ChartOnlyVisits() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Визиты"
			
			return obj
		}
		
		/**
		 * ```tree
		 * VisitsPage $mol_page
		 * 	title \Визиты
		 * 	body / <= ChartOnlyVisits
		 * ```
		 */
		@ $mol_mem
		VisitsPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Визиты"
			obj.body = () => [
				this.ChartOnlyVisits()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyGeo $milis_stat_chart title \География
		 * ```
		 */
		@ $mol_mem
		ChartOnlyGeo() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "География"
			
			return obj
		}
		
		/**
		 * ```tree
		 * GeoPage $mol_page
		 * 	title \География
		 * 	body / <= ChartOnlyGeo
		 * ```
		 */
		@ $mol_mem
		GeoPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "География"
			obj.body = () => [
				this.ChartOnlyGeo()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyFrom $milis_stat_chart title \Откуда пришли
		 * ```
		 */
		@ $mol_mem
		ChartOnlyFrom() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Откуда пришли"
			
			return obj
		}
		
		/**
		 * ```tree
		 * FromPage $mol_page
		 * 	title \Откуда пришли
		 * 	body / <= ChartOnlyFrom
		 * ```
		 */
		@ $mol_mem
		FromPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Откуда пришли"
			obj.body = () => [
				this.ChartOnlyFrom()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyQuery $milis_stat_chart title \По каким запросам шли
		 * ```
		 */
		@ $mol_mem
		ChartOnlyQuery() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "По каким запросам шли"
			
			return obj
		}
		
		/**
		 * ```tree
		 * QueryPage $mol_page
		 * 	title \По каким запросам шли
		 * 	body / <= ChartOnlyQuery
		 * ```
		 */
		@ $mol_mem
		QueryPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "По каким запросам шли"
			obj.body = () => [
				this.ChartOnlyQuery()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyEvents $milis_stat_chart title \Ивенты
		 * ```
		 */
		@ $mol_mem
		ChartOnlyEvents() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Ивенты"
			
			return obj
		}
		
		/**
		 * ```tree
		 * EventsPage $mol_page
		 * 	title \Ивенты
		 * 	body / <= ChartOnlyEvents
		 * ```
		 */
		@ $mol_mem
		EventsPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Ивенты"
			obj.body = () => [
				this.ChartOnlyEvents()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * ChartOnlyConversion $milis_stat_chart title \Конверсии Ивентов
		 * ```
		 */
		@ $mol_mem
		ChartOnlyConversion() {
			const obj = new this.$.$milis_stat_chart()
			
			obj.title = () => "Конверсии Ивентов"
			
			return obj
		}
		
		/**
		 * ```tree
		 * ConversionPage $mol_page
		 * 	title \Конверсии Ивентов
		 * 	body / <= ChartOnlyConversion
		 * ```
		 */
		@ $mol_mem
		ConversionPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Конверсии Ивентов"
			obj.body = () => [
				this.ChartOnlyConversion()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * GitHub $mol_link
		 * 	uri \https://github.com/Lyumih/milis/tree/main/stat
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		GitHub() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://github.com/Lyumih/milis/tree/main/stat"
			obj.target = () => "_blank"
			
			return obj
		}
	}
	
}

