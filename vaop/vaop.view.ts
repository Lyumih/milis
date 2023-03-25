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
		current_step?: number
		next_step?: number
	}

	export class $milis_vaop extends $.$milis_vaop {
		@$mol_mem
		agent_list( next?: AgentDTO[] ) {
			console.log('FIX ME agent list', next)
			return next ?? [
				{ id: crypto.randomUUID(), business: 'test', current_step: 100, next_step: 200 },
				{ id: crypto.randomUUID(), current_step:300, next_step: 400 },
				// { id: crypto.randomUUID() },
				// { id: 3 }
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
		agent_machine( id: string, next?: string ) {
			return next ?? ''
		}

		@$mol_mem_key
		agent_business( id: string, next?: string ) {
			console.log('FIX ME',id, next)
			return next ?? ''
		}

		@$mol_mem_key
		agent_programmer( id: string, next?: string ) {
			return next ?? ''
		}

		@$mol_mem_key
		current_step( id: string, next?: number ) {
			return next ?? 0
		}

		@$mol_mem_key
		next_step( id: string, next?: number ) {
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
				{ id: crypto.randomUUID(), business: 'Создать парсер' },
				{ id: crypto.randomUUID() },
				{ id: crypto.randomUUID() }
			]
			)
		}

	}
}
