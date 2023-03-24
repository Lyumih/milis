namespace $ {
	export class $milis_vaop extends $mol_page {
		
		/**
		 * ```tree
		 * title \VAOP - экологичное программирование
		 * ```
		 */
		title() {
			return "VAOP - экологичное программирование"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= About_vaop
		 * 	<= Runner_table
		 * ```
		 */
		body() {
			return [
				this.About_vaop(),
				this.Runner_table()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * foot / <= Contacts
		 * ```
		 */
		foot() {
			return [
				this.Contacts()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * vaop_description \
		 * 	\**VAOP** - это методология по ведению IT продукта, которая позволить динамически создавать неустаревающие программы
		 * 	\VAOP состоит из 2 основных понятий: Раннер и Агент.
		 * 	\**Раннер** - это точка запуска программы, которая содержит всех Агентов.
		 * 	\**Aгент** - это условная единица инструкции, которая состоит из 5 понятий: *Бизнес*, *Программист*, *Машина*, *Текущий шаг*, *Следующий шаг* и дополнительного *Имя*
		 * 	\*Бизнес* - согласованные, человекочитаемая инструкция требований от заказчика. Сначало идёт описание, только потом открываются все шаги.
		 * 	\*Программист* - псевдокод от программиста, который реализует поставленную инструкцию от Бизнеса. Все изменения доступны только после того, как появилось требование от бизнеса.
		 * 	\*Машина* - конкретный код, выполняющий эту инструкцию. Инструкция может быть выполнена в произвольном порядке
		 * 	\*Текущий шаг* - текущий шаг агента
		 * 	\*Следующий шаг* - следующий шаг агента, если он есть
		 * 	\Полное описание VAOP: https://habr.com/ru/post/554014/
		 * 	\Сообщество VAOP: https://t.me/ecoprog
		 * 	\Реализовано на [$mol](https://mol.hyoo.ru/)
		 * ```
		 */
		vaop_description() {
			return "**VAOP** - это методология по ведению IT продукта, которая позволить динамически создавать неустаревающие программы\nVAOP состоит из 2 основных понятий: Раннер и Агент.\n**Раннер** - это точка запуска программы, которая содержит всех Агентов.\n**Aгент** - это условная единица инструкции, которая состоит из 5 понятий: *Бизнес*, *Программист*, *Машина*, *Текущий шаг*, *Следующий шаг* и дополнительного *Имя*\n*Бизнес* - согласованные, человекочитаемая инструкция требований от заказчика. Сначало идёт описание, только потом открываются все шаги.\n*Программист* - псевдокод от программиста, который реализует поставленную инструкцию от Бизнеса. Все изменения доступны только после того, как появилось требование от бизнеса.\n*Машина* - конкретный код, выполняющий эту инструкцию. Инструкция может быть выполнена в произвольном порядке\n*Текущий шаг* - текущий шаг агента\n*Следующий шаг* - следующий шаг агента, если он есть\nПолное описание VAOP: https://habr.com/ru/post/554014/\nСообщество VAOP: https://t.me/ecoprog\nРеализовано на [$mol](https://mol.hyoo.ru/)"
		}
		
		/**
		 * ```tree
		 * Vaop $mol_text text <= vaop_description
		 * ```
		 */
		@ $mol_mem
		Vaop() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.vaop_description()
			
			return obj
		}
		
		/**
		 * ```tree
		 * About_vaop $mol_expander
		 * 	label \Что такое VAOP
		 * 	content / <= Vaop
		 * ```
		 */
		@ $mol_mem
		About_vaop() {
			const obj = new this.$.$mol_expander()
			
			obj.label = () => "Что такое VAOP"
			obj.content = () => [
				this.Vaop()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Table_header $mol_text text \# Runner "Парсер АПИ"
		 * ```
		 */
		@ $mol_mem
		Table_header() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => "# Runner \"Парсер АПИ\""
			
			return obj
		}
		
		/**
		 * ```tree
		 * business_example? \Создать новый экземпляр парсера сайта
		 * ```
		 */
		@ $mol_mem
		business_example(next?: any) {
			if ( next !== undefined ) return next as never
			return "Создать новый экземпляр парсера сайта"
		}
		
		/**
		 * ```tree
		 * programmer_example? \new Parser()
		 * ```
		 */
		@ $mol_mem
		programmer_example(next?: any) {
			if ( next !== undefined ) return next as never
			return "new Parser()"
		}
		
		/**
		 * ```tree
		 * machine_example? \const parser = new Parser()
		 * ```
		 */
		@ $mol_mem
		machine_example(next?: any) {
			if ( next !== undefined ) return next as never
			return "const parser = new Parser()"
		}
		
		/**
		 * ```tree
		 * current_step_example? 100
		 * ```
		 */
		@ $mol_mem
		current_step_example(next?: any) {
			if ( next !== undefined ) return next as never
			return 100
		}
		
		/**
		 * ```tree
		 * next_step_example? 200
		 * ```
		 */
		@ $mol_mem
		next_step_example(next?: any) {
			if ( next !== undefined ) return next as never
			return 200
		}
		
		/**
		 * ```tree
		 * name_example? \agent_create_parser
		 * ```
		 */
		@ $mol_mem
		name_example(next?: any) {
			if ( next !== undefined ) return next as never
			return "agent_create_parser"
		}
		
		/**
		 * ```tree
		 * Agent $milis_vaop_agent
		 * 	business? <=> business_example?
		 * 	programmer? <=> programmer_example?
		 * 	machine? <=> machine_example?
		 * 	current_step? <=> current_step_example?
		 * 	next_step? <=> next_step_example?
		 * 	name? <=> name_example?
		 * ```
		 */
		@ $mol_mem
		Agent() {
			const obj = new this.$.$milis_vaop_agent()
			
			obj.business = (next?: any) => this.business_example(next)
			obj.programmer = (next?: any) => this.programmer_example(next)
			obj.machine = (next?: any) => this.machine_example(next)
			obj.current_step = (next?: any) => this.current_step_example(next)
			obj.next_step = (next?: any) => this.next_step_example(next)
			obj.name = (next?: any) => this.name_example(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Agent_new $milis_vaop_agent
		 * ```
		 */
		@ $mol_mem
		Agent_new() {
			const obj = new this.$.$milis_vaop_agent()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Runner_table $mol_list rows /$mol_view
		 * 	<= Table_header
		 * 	<= Agent
		 * 	<= Agent_new
		 * ```
		 */
		@ $mol_mem
		Runner_table() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Table_header(),
				this.Agent(),
				this.Agent_new()
			] as readonly $mol_view[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Telegram $mol_link
		 * 	uri \https://t.me/ecoprog
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		Telegram() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://t.me/ecoprog"
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Contacts $mol_section
		 * 	title \Контакты
		 * 	content / <= Telegram
		 * ```
		 */
		@ $mol_mem
		Contacts() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Контакты"
			obj.content = () => [
				this.Telegram()
			] as readonly any[]
			
			return obj
		}
	}
	
	export class $milis_vaop_agent extends $mol_row {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Add
		 * 	<= Business
		 * 	<= Programmer
		 * 	<= Machine
		 * 	<= Current_step
		 * 	<= Next_step
		 * 	<= Name
		 * 	<= Delete
		 * ```
		 */
		sub() {
			return [
				this.Add(),
				this.Business(),
				this.Programmer(),
				this.Machine(),
				this.Current_step(),
				this.Next_step(),
				this.Name(),
				this.Delete()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Icon_add_list $mol_icon_account_plus
		 * ```
		 */
		@ $mol_mem
		Icon_add_list() {
			const obj = new this.$.$mol_icon_account_plus()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Add $mol_button_minor
		 * 	hint \Добавить агента
		 * 	sub / <= Icon_add_list
		 * ```
		 */
		@ $mol_mem
		Add() {
			const obj = new this.$.$mol_button_minor()
			
			obj.hint = () => "Добавить агента"
			obj.sub = () => [
				this.Icon_add_list()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * business? \
		 * ```
		 */
		@ $mol_mem
		business(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Business $mol_string
		 * 	hint \Бизнес
		 * 	value? <=> business?
		 * ```
		 */
		@ $mol_mem
		Business() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Бизнес"
			obj.value = (next?: any) => this.business(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * programmer? \
		 * ```
		 */
		@ $mol_mem
		programmer(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Programmer $mol_string
		 * 	hint \Псевдокод
		 * 	value? <=> programmer?
		 * ```
		 */
		@ $mol_mem
		Programmer() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Псевдокод"
			obj.value = (next?: any) => this.programmer(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * machine? \
		 * ```
		 */
		@ $mol_mem
		machine(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Machine $mol_string
		 * 	hint \Машина
		 * 	value? <=> machine?
		 * ```
		 */
		@ $mol_mem
		Machine() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Машина"
			obj.value = (next?: any) => this.machine(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * current_step? \
		 * ```
		 */
		@ $mol_mem
		current_step(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Current_step $mol_number
		 * 	hint \Текущий шаг
		 * 	precision_change 100
		 * 	value? <=> current_step?
		 * ```
		 */
		@ $mol_mem
		Current_step() {
			const obj = new this.$.$mol_number()
			
			obj.hint = () => "Текущий шаг"
			obj.precision_change = () => 100
			obj.value = (next?: any) => this.current_step(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * next_step? \
		 * ```
		 */
		@ $mol_mem
		next_step(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Next_step $mol_number
		 * 	hint \Следующий шаг
		 * 	precision_change 100
		 * 	value? <=> next_step?
		 * ```
		 */
		@ $mol_mem
		Next_step() {
			const obj = new this.$.$mol_number()
			
			obj.hint = () => "Следующий шаг"
			obj.precision_change = () => 100
			obj.value = (next?: any) => this.next_step(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * name? \
		 * ```
		 */
		@ $mol_mem
		name(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Name $mol_string
		 * 	hint \Имя агента
		 * 	value? <=> name?
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Имя агента"
			obj.value = (next?: any) => this.name(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Icon_delete_agent $mol_icon_delete
		 * ```
		 */
		@ $mol_mem
		Icon_delete_agent() {
			const obj = new this.$.$mol_icon_delete()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Delete $mol_button_minor sub / <= Icon_delete_agent
		 * ```
		 */
		@ $mol_mem
		Delete() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Icon_delete_agent()
			] as readonly any[]
			
			return obj
		}
	}
	
}

