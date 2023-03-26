// namespace $ {
// 	export const $milis_vaop_Agent_type = $mol_data_record({

// 	})
// }
namespace $.$$ {
	// const AgentDTO  = $mol_data_record({
	// 	id: $mol_data_string
	// })

	type AgentDTO = {
		id: string
		business?: string
		machine?: string
		programmer?: string
		current_step?: number
		next_step?: number
		name?: string
	}

	export class $milis_vaop extends $.$milis_vaop {
		@$mol_mem
		agent_list( next?: AgentDTO[] ) {
			console.log('FIX ME agent list', next)
			return next ?? [
				{ id: crypto.randomUUID(),current_step: 100, next_step: 200, name: 'agent_' },
			]
		}

		@$mol_mem
		override agents() {
			return this.agent_list().map( item => this.Agent( item.id ) )
		}


		@$mol_action
		delete_agent( id: string ) {
			this.agent_list( this.agent_list().filter( ( agent, index ) => agent.id !== id ) )
		}

		@$mol_action
		add_agent( id: string ) {
			const current_index = this.agent_list().findIndex( ( item ) => item.id === id ) + 1
			this.agent_list( [ ...this.agent_list().slice( 0, current_index ), { id: crypto.randomUUID() }, ...this.agent_list().slice( current_index ) ] )
		}

		@$mol_mem_key
		agent_business( id: string, next?: string ) {
			const current = this.agent_list().find(agent => agent.id === id)
			if (next === undefined) return current?.business ?? ''
			const copy = {...current, id: current?.id!, business: next}
			this.agent_list(this.agent_list().map(agent => agent === current ? copy : agent))
			return next ?? ''
		}

		@$mol_mem_key
		agent_machine( id: string, next?: string ) {
			const current = this.agent_list().find(agent => agent.id === id)
			if (next === undefined) return current?.machine ?? ''
			const copy = {...current, id: current?.id!, machine: next}
			this.agent_list(this.agent_list().map(agent => agent === current ? copy : agent))
			return next ?? ''
		}


		@$mol_mem_key
		agent_programmer( id: string, next?: string ) {
			const current = this.agent_list().find(agent => agent.id === id)
			if (next === undefined) return current?.programmer ?? ''
			const copy = {...current, id: current?.id!, programmer: next}
			this.agent_list(this.agent_list().map(agent => agent === current ? copy : agent))
			return next ?? ''
		}

		@$mol_mem_key
		agent_name( id: string, next?: string ) {
			const current = this.agent_list().find(agent => agent.id === id)
			if (next === undefined) return current?.name ?? ''
			const copy = {...current, id: current?.id!, name: next}
			this.agent_list(this.agent_list().map(agent => agent === current ? copy : agent))
			return next ?? ''
		}

		@$mol_mem_key
		current_step( id: string, next?: number ) {
			const current = this.agent_list().find(agent => agent.id === id)
			if (next === undefined) return current?.current_step ?? 0
			const copy = {...current, id: current?.id!, current_step: next}
			this.agent_list(this.agent_list().map(agent => agent === current ? copy : agent))
			return next ?? 0
		}

		@$mol_mem_key
		next_step( id: string, next?: number ) {
			const current = this.agent_list().find(agent => agent.id === id)
			if (next === undefined) return current?.next_step ?? 0
			const copy = {...current, id: current?.id!, next_step: next}
			this.agent_list(this.agent_list().map(agent => agent === current ? copy : agent))
			return next ?? 0
		}

		@$mol_mem_key
		programmer_enabled( id: string ): boolean {
			return this.agent_business( id )?.length > 0
		}

		@$mol_mem_key
		machine_enabled( id: string ): boolean {
			return this.agent_programmer( id )?.length > 0
		}

		@$mol_mem_key
		current_step_enabled( id: string ): boolean {
			return this.programmer_enabled( id )
		}

		@$mol_mem_key
		next_step_enabled( id: string ): boolean {
			return this.current_step( id ) > 0
		}

		@$mol_mem_key
		name_enabled( id: string ): boolean {
			return this.machine_enabled( id )
		}

		@$mol_mem_key
		agent_empty(id: string): boolean {
			const current = this.current_step(id)
			const filtered_agents_by_step = this.agent_list().find(agent => agent.next_step === current)
			console.log('agent empty', id, filtered_agents_by_step,current, this.agent_list())
			return !filtered_agents_by_step
		}

		// agent_entry(): boolean  {
		// 	return true
		// }

		text_to_download(): string {
			console.log()
			return JSON.stringify( this.agent_list(), null, 2 ) ?? ''
		}

		download(): Blob {
			console.log( 'download' )
			return new $mol_dom_context.Blob( [ this.text_to_download() ], { type: 'text/x-marked' } )
		}

		@$mol_action
		set_example(): void {
			this.agent_list( [
				{ id: crypto.randomUUID(), business: 'Создать парсер', programmer: 'class Parser; parser = Parser()', current_step: 100, next_step: 200, name: 'agent_create_parser'},
				{ id: crypto.randomUUID(), business: 'Сформировать правила "<num>":"4", "2"; "2*<num>":"<num>+<num>" ', programmer: 'cards = ["<num>":["4","2"],"2*<num>":["<num>+<num>"]]', current_step: 200, next_step: 250, name: 'agent_rules' },
				{ id: crypto.randomUUID(), business: 'Передать правила в парсер', programmer: 'parser.add_rules(cards)', current_step: 250, next_step: 300, name: 'agent_add_rules' },
				{ id: crypto.randomUUID(), business: 'Сформулировать условие (2+2)', programmer: 'inp_str = ["2+2"]', current_step: 300, next_step: 350, name: 'agent_input' },
				{ id: crypto.randomUUID(), business: 'Если входная строка != "2+2", то ошибка', programmer: 'if inp_str != "2+2" throw Error', current_step: 350, next_step: 9000, name: 'agent_input_error' },
				{ id: crypto.randomUUID(), business: 'Если входная строка валидна, продолжить программу', programmer: 'else continue', current_step: 350, next_step: 401, name: 'agent_input_continue' },
				{ id: crypto.randomUUID(), business: 'Ввести строку-условие', programmer: 'tasks = Tasks(inp_str)', current_step: 400, next_step: 500, name: 'agent_add_tasks' },
				{ id: crypto.randomUUID(), business: 'Запустить парсер', programmer: 'parser.parse(tasks)', current_step: 500, next_step: 600, name: 'agent_parser_parse' },
				{ id: crypto.randomUUID(), business: 'Получить ответ', programmer: 'res = parser.get_response()', current_step: 600, next_step: 700, name: 'agent_parser_response' },
				{ id: crypto.randomUUID(), business: 'Вывести ответ на экран [2*2]', programmer: 'print(res)', current_step: 700, next_step: 8000, name: 'agent_parser_print' },
				{ id: crypto.randomUUID(), business: 'Вывести на экран "Программа завершена"', programmer: 'print("Программа завершена")', current_step: 8000, next_step: 8000, name: 'agent_program_end' },
				{ id: crypto.randomUUID(), business: 'Вывести на экран "Ошибка: неверный input"', programmer: 'print("ошибка: неверный input")', current_step: 9000, next_step: 9000, name: 'agent_program_end_error' },
			]
			)
		}

	}
}
