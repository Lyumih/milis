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
		 * tools /
		 * 	<= Example
		 * 	<= Download
		 * 	<= Menu
		 * ```
		 */
		tools() {
			return [
				this.Example(),
				this.Download(),
				this.Menu()
			] as readonly any[]
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
		 * Example_icon $mol_icon_presentation_play
		 * ```
		 */
		@ $mol_mem
		Example_icon() {
			const obj = new this.$.$mol_icon_presentation_play()
			
			return obj
		}
		
		/**
		 * ```tree
		 * set_example null
		 * ```
		 */
		set_example() {
			return null as any
		}
		
		/**
		 * ```tree
		 * Example $mol_button_minor
		 * 	sub / <= Example_icon
		 * 	hint \Показать пример
		 * 	click? <= set_example
		 * ```
		 */
		@ $mol_mem
		Example() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Example_icon()
			] as readonly any[]
			obj.hint = () => "Показать пример"
			obj.click = (next?: any) => this.set_example()
			
			return obj
		}
		
		/**
		 * ```tree
		 * download $mol_blob
		 * ```
		 */
		@ $mol_mem
		download() {
			const obj = new this.$.$mol_blob()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Download $mol_button_download
		 * 	file_name \vaop_script.txt
		 * 	hint \Скачать VAOP скрипт
		 * 	blob <= download
		 * ```
		 */
		@ $mol_mem
		Download() {
			const obj = new this.$.$mol_button_download()
			
			obj.file_name = () => "vaop_script.txt"
			obj.hint = () => "Скачать VAOP скрипт"
			obj.blob = () => this.download()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Menu_trigger_icon $mol_icon_dots_vertical
		 * ```
		 */
		@ $mol_mem
		Menu_trigger_icon() {
			const obj = new this.$.$mol_icon_dots_vertical()
			
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
		 * LinkMol $mol_link
		 * 	title \Сделано на $mol
		 * 	uri \https://mol.hyoo.ru/
		 * 	target \_blank
		 * ```
		 */
		@ $mol_mem
		LinkMol() {
			const obj = new this.$.$mol_link()
			
			obj.title = () => "Сделано на $mol"
			obj.uri = () => "https://mol.hyoo.ru/"
			obj.target = () => "_blank"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Options_content $mol_list rows /
		 * 	<= Telegram
		 * 	<= LinkMol
		 * ```
		 */
		@ $mol_mem
		Options_content() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Telegram(),
				this.LinkMol()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Menu $mol_pick
		 * 	trigger_content / <= Menu_trigger_icon
		 * 	bubble_content / <= Options_content
		 * ```
		 */
		@ $mol_mem
		Menu() {
			const obj = new this.$.$mol_pick()
			
			obj.trigger_content = () => [
				this.Menu_trigger_icon()
			] as readonly any[]
			obj.bubble_content = () => [
				this.Options_content()
			] as readonly any[]
			
			return obj
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
		 * 	label / \Что такое VAOP
		 * 	content / <= Vaop
		 * ```
		 */
		@ $mol_mem
		About_vaop() {
			const obj = new this.$.$mol_expander()
			
			obj.label = () => [
				"Что такое VAOP"
			] as readonly any[]
			obj.content = () => [
				this.Vaop()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Runner_input $mol_string hint \Описание - Парсер АПИ - распарсить сайт https://mol.hyoo.ru/ на статьи
		 * ```
		 */
		@ $mol_mem
		Runner_input() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Описание - Парсер АПИ - распарсить сайт https://mol.hyoo.ru/ на статьи"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Table_header $mol_section
		 * 	title \Раннер
		 * 	content / <= Runner_input
		 * ```
		 */
		@ $mol_mem
		Table_header() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Раннер"
			obj.content = () => [
				this.Runner_input()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Agent_header $mol_section title \Агенты
		 * ```
		 */
		@ $mol_mem
		Agent_header() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Агенты"
			
			return obj
		}
		
		/**
		 * ```tree
		 * agent_business*? null
		 * ```
		 */
		@ $mol_mem_key
		agent_business(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * agent_programmer*? null
		 * ```
		 */
		@ $mol_mem_key
		agent_programmer(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * agent_machine*? null
		 * ```
		 */
		@ $mol_mem_key
		agent_machine(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * current_step*? null
		 * ```
		 */
		@ $mol_mem_key
		current_step(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * next_step*? null
		 * ```
		 */
		@ $mol_mem_key
		next_step(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * agent_name*? null
		 * ```
		 */
		@ $mol_mem_key
		agent_name(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * machine_enabled* false
		 * ```
		 */
		machine_enabled(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * programmer_enabled* false
		 * ```
		 */
		programmer_enabled(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * current_step_enabled* false
		 * ```
		 */
		current_step_enabled(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * next_step_enabled* false
		 * ```
		 */
		next_step_enabled(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * name_enabled* false
		 * ```
		 */
		name_enabled(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * add_agent*? null
		 * ```
		 */
		@ $mol_mem_key
		add_agent(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * delete_agent*? null
		 * ```
		 */
		@ $mol_mem_key
		delete_agent(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * agent_empty* false
		 * ```
		 */
		agent_empty(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * Agent*0 $milis_vaop_agent
		 * 	business? <=> agent_business*?
		 * 	programmer? <=> agent_programmer*?
		 * 	machine? <=> agent_machine*?
		 * 	current_step? <=> current_step*?
		 * 	next_step? <=> next_step*?
		 * 	name? <=> agent_name*?
		 * 	machine_enabled <= machine_enabled*
		 * 	programmer_enabled <= programmer_enabled*
		 * 	current_step_enabled <= current_step_enabled*
		 * 	next_step_enabled <= next_step_enabled*
		 * 	name_enabled <= name_enabled*
		 * 	add? <=> add_agent*?
		 * 	delete? <=> delete_agent*?
		 * 	agent_empty <= agent_empty*
		 * ```
		 */
		@ $mol_mem_key
		Agent(id: any) {
			const obj = new this.$.$milis_vaop_agent()
			
			obj.business = (next?: any) => this.agent_business(id, next)
			obj.programmer = (next?: any) => this.agent_programmer(id, next)
			obj.machine = (next?: any) => this.agent_machine(id, next)
			obj.current_step = (next?: any) => this.current_step(id, next)
			obj.next_step = (next?: any) => this.next_step(id, next)
			obj.name = (next?: any) => this.agent_name(id, next)
			obj.machine_enabled = () => this.machine_enabled(id)
			obj.programmer_enabled = () => this.programmer_enabled(id)
			obj.current_step_enabled = () => this.current_step_enabled(id)
			obj.next_step_enabled = () => this.next_step_enabled(id)
			obj.name_enabled = () => this.name_enabled(id)
			obj.add = (next?: any) => this.add_agent(id, next)
			obj.delete = (next?: any) => this.delete_agent(id, next)
			obj.agent_empty = () => this.agent_empty(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * agents / <= Agent*0
		 * ```
		 */
		agents() {
			return [
				this.Agent("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Agent_rows $mol_list rows <= agents
		 * ```
		 */
		@ $mol_mem
		Agent_rows() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.agents()
			
			return obj
		}
		
		/**
		 * ```tree
		 * text_to_download? \Текст для скачивания
		 * ```
		 */
		@ $mol_mem
		text_to_download(next?: any) {
			if ( next !== undefined ) return next as never
			return "Текст для скачивания"
		}
		
		/**
		 * ```tree
		 * Text_download $mol_textarea
		 * 	sidebar_showed true
		 * 	enabled false
		 * 	value? <= text_to_download?
		 * ```
		 */
		@ $mol_mem
		Text_download() {
			const obj = new this.$.$mol_textarea()
			
			obj.sidebar_showed = () => true
			obj.enabled = () => false
			obj.value = (next?: any) => this.text_to_download()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Text_download_section $mol_section
		 * 	title \Раннер для скачивания
		 * 	content / <= Text_download
		 * ```
		 */
		@ $mol_mem
		Text_download_section() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Раннер для скачивания"
			obj.content = () => [
				this.Text_download()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Runner_table $mol_list rows /$mol_view
		 * 	<= Table_header
		 * 	<= Agent_header
		 * 	<= Agent_rows
		 * 	<= Text_download_section
		 * ```
		 */
		@ $mol_mem
		Runner_table() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Table_header(),
				this.Agent_header(),
				this.Agent_rows(),
				this.Text_download_section()
			] as readonly $mol_view[]
			
			return obj
		}
	}
	
	export class $milis_vaop_agent extends $mol_row {
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	milis_vaop_agent_agent_empty <= agent_empty
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				milis_vaop_agent_agent_empty: this.agent_empty()
			}
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Add
		 * 	<= Business
		 * 	<= Programmer
		 * 	<= Machine
		 * 	<= Current
		 * 	<= Next
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
				this.Current(),
				this.Next(),
				this.Name(),
				this.Delete()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * agent_empty false
		 * ```
		 */
		agent_empty() {
			return false
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
		 * add? null
		 * ```
		 */
		@ $mol_mem
		add(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Add $mol_button_minor
		 * 	hint \Добавить агента
		 * 	sub / <= Icon_add_list
		 * 	click? <=> add?
		 * ```
		 */
		@ $mol_mem
		Add() {
			const obj = new this.$.$mol_button_minor()
			
			obj.hint = () => "Добавить агента"
			obj.sub = () => [
				this.Icon_add_list()
			] as readonly any[]
			obj.click = (next?: any) => this.add(next)
			
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
		 * Business $mol_textarea
		 * 	hint \Бизнес
		 * 	value? <=> business?
		 * ```
		 */
		@ $mol_mem
		Business() {
			const obj = new this.$.$mol_textarea()
			
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
		 * programmer_enabled false
		 * ```
		 */
		programmer_enabled() {
			return false
		}
		
		/**
		 * ```tree
		 * Programmer $mol_textarea
		 * 	hint \Программист
		 * 	value? <=> programmer?
		 * 	enabled <= programmer_enabled
		 * ```
		 */
		@ $mol_mem
		Programmer() {
			const obj = new this.$.$mol_textarea()
			
			obj.hint = () => "Программист"
			obj.value = (next?: any) => this.programmer(next)
			obj.enabled = () => this.programmer_enabled()
			
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
		 * machine_enabled false
		 * ```
		 */
		machine_enabled() {
			return false
		}
		
		/**
		 * ```tree
		 * Machine $mol_textarea
		 * 	hint \Машина
		 * 	value? <=> machine?
		 * 	enabled <= machine_enabled
		 * ```
		 */
		@ $mol_mem
		Machine() {
			const obj = new this.$.$mol_textarea()
			
			obj.hint = () => "Машина"
			obj.value = (next?: any) => this.machine(next)
			obj.enabled = () => this.machine_enabled()
			
			return obj
		}
		
		/**
		 * ```tree
		 * current_step_enabled false
		 * ```
		 */
		current_step_enabled() {
			return false
		}
		
		/**
		 * ```tree
		 * current_step? 0
		 * ```
		 */
		@ $mol_mem
		current_step(next?: any) {
			if ( next !== undefined ) return next as never
			return 0
		}
		
		/**
		 * ```tree
		 * Current $mol_number
		 * 	hint \Текущий шаг
		 * 	value_min 0
		 * 	precision_change 100
		 * 	enabled <= current_step_enabled
		 * 	value? <=> current_step?
		 * ```
		 */
		@ $mol_mem
		Current() {
			const obj = new this.$.$mol_number()
			
			obj.hint = () => "Текущий шаг"
			obj.value_min = () => 0
			obj.precision_change = () => 100
			obj.enabled = () => this.current_step_enabled()
			obj.value = (next?: any) => this.current_step(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * next_step_enabled false
		 * ```
		 */
		next_step_enabled() {
			return false
		}
		
		/**
		 * ```tree
		 * next_step? 0
		 * ```
		 */
		@ $mol_mem
		next_step(next?: any) {
			if ( next !== undefined ) return next as never
			return 0
		}
		
		/**
		 * ```tree
		 * Next $mol_number
		 * 	hint \Следующий шаг
		 * 	precision_change 100
		 * 	value_min 0
		 * 	enabled <= next_step_enabled
		 * 	value? <=> next_step?
		 * ```
		 */
		@ $mol_mem
		Next() {
			const obj = new this.$.$mol_number()
			
			obj.hint = () => "Следующий шаг"
			obj.precision_change = () => 100
			obj.value_min = () => 0
			obj.enabled = () => this.next_step_enabled()
			obj.value = (next?: any) => this.next_step(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * name_enabled false
		 * ```
		 */
		name_enabled() {
			return false
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
		 * Name $mol_textarea
		 * 	hint \Имя агента
		 * 	enabled <= name_enabled
		 * 	value? <=> name?
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_textarea()
			
			obj.hint = () => "Имя агента"
			obj.enabled = () => this.name_enabled()
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
		 * delete? null
		 * ```
		 */
		@ $mol_mem
		delete(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Delete $mol_button_minor
		 * 	sub / <= Icon_delete_agent
		 * 	hint \Удалить агента
		 * 	click? <=> delete?
		 * ```
		 */
		@ $mol_mem
		Delete() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Icon_delete_agent()
			] as readonly any[]
			obj.hint = () => "Удалить агента"
			obj.click = (next?: any) => this.delete(next)
			
			return obj
		}
	}
	
}

