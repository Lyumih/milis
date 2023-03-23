namespace $ {
	export class $milis_onemorevpn extends $mol_book2_catalog {
		
		/**
		 * ```tree
		 * param \vpn
		 * ```
		 */
		param() {
			return "vpn"
		}
		
		/**
		 * ```tree
		 * menu_title \Vpn
		 * ```
		 */
		menu_title() {
			return "Vpn"
		}
		
		/**
		 * ```tree
		 * spreads * search_page <= SearchPage
		 * ```
		 */
		spreads() {
			return {
				search_page: this.SearchPage()
			}
		}
		
		/**
		 * ```tree
		 * First_name $mol_string hint \Имя
		 * ```
		 */
		@ $mol_mem
		First_name() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Имя"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Last_name $mol_string hint \Фамилия
		 * ```
		 */
		@ $mol_mem
		Last_name() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Фамилия"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Stat $mol_list sub /
		 * 	<= First_name
		 * 	<= Last_name
		 * ```
		 */
		@ $mol_mem
		Stat() {
			const obj = new this.$.$mol_list()
			
			obj.sub = () => [
				this.First_name(),
				this.Last_name()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * date?val $mol_time_moment
		 * ```
		 */
		@ $mol_mem
		date(val?: any) {
			if ( val !== undefined ) return val as never
			const obj = new this.$.$mol_time_moment()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Date $mol_date value_moment?val <=> date?val
		 * ```
		 */
		@ $mol_mem
		Date() {
			const obj = new this.$.$mol_date()
			
			obj.value_moment = (val?: any) => this.date(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * fetch_data?val null
		 * ```
		 */
		@ $mol_mem
		fetch_data(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Fetch_button $mol_button_major
		 * 	title \Получить данные
		 * 	event_click?val <=> fetch_data?val
		 * ```
		 */
		@ $mol_mem
		Fetch_button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Получить данные"
			obj.event_click = (val?: any) => this.fetch_data(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * User_first_name* $mol_text text \Михаил
		 * ```
		 */
		@ $mol_mem_key
		User_first_name(id: any) {
			const obj = new this.$.$mol_text()
			
			obj.text = () => "Михаил"
			
			return obj
		}
		
		/**
		 * ```tree
		 * row_id*? \Иванов
		 * ```
		 */
		@ $mol_mem_key
		row_id(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return "Иванов"
		}
		
		/**
		 * ```tree
		 * User_last_name* $mol_text text <= row_id*?
		 * ```
		 */
		@ $mol_mem_key
		User_last_name(id: any) {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.row_id(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Row*0 $mol_row sub /
		 * 	<= User_first_name*
		 * 	<= User_last_name*
		 * ```
		 */
		@ $mol_mem_key
		Row(id: any) {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.User_first_name(id),
				this.User_last_name(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * users_rows / <= Row*0
		 * ```
		 */
		users_rows() {
			return [
				this.Row("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Users $mol_list rows <= users_rows
		 * ```
		 */
		@ $mol_mem
		Users() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.users_rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * SearchPage $mol_page
		 * 	title \Найди свой VPN
		 * 	body /
		 * 		<= Stat
		 * 		<= Date
		 * 		<= Fetch_button
		 * 		<= Users
		 * ```
		 */
		@ $mol_mem
		SearchPage() {
			const obj = new this.$.$mol_page()
			
			obj.title = () => "Найди свой VPN"
			obj.body = () => [
				this.Stat(),
				this.Date(),
				this.Fetch_button(),
				this.Users()
			] as readonly any[]
			
			return obj
		}
	}
	
}

