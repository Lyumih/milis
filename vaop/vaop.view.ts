namespace $.$$ {


	export class $milis_vaop extends $.$milis_vaop {
		@$mol_mem
		agent_list( next?: Object[] ) {
			return next ?? [
				{ id: 1 },
				// { id: 2 },
				// { id: 3 }
			]
		}

		@$mol_mem
		override agents() {
			return this.agent_list().map( ( item, index ) => this.Agent( index ) )
		}


		@$mol_action
		delete_agent( id: any ) {
			console.log( 'id before', id, this.agent_list(), this.agents() )
			this.agent_list( this.agent_list().filter( ( agent, index ) => index !== id ) )
			console.log( 'FIX ME: id after', id, this.agent_list(), this.agents() )
		}

		@$mol_action
		add_agent( id: any ) {
			console.log( 'FIX ME: id before', id, this.agent_list() )
			this.agent_list( [ ...this.agent_list(), { id: 12 } ] )
		}

		@$mol_mem_key
		agent_machine( id: any, next?: any ) {
			return next ?? ''
		}

		@$mol_mem_key
		agent_business( id: any, next?: string ) {
			return next ?? ''
		}

		@$mol_mem_key
		agent_programmer( id: any, next?: string ) {
			return next ?? ''
		}

		@$mol_mem_key
		current_step( id: any, next?: number ) {
			return next ?? 0
		}

		@$mol_mem_key
		next_step( id: any, next?: number ) {
			return next ?? 0
		}

		@$mol_mem_key
		programmer_enabled( id: any ): boolean {
			return this.agent_business( id )?.length > 0
		}

		@$mol_mem_key
		machine_enabled( id: any ): boolean {
			return this.agent_programmer( id )?.length > 0
		}

		@$mol_mem_key
		current_step_enabled( id: any ): boolean {
			return this.programmer_enabled( id )
		}

		@$mol_mem_key
		next_step_enabled( id: any ): boolean {
			return this.current_step( id ) > 0
		}

		@$mol_mem_key
		name_enabled( id: any ): boolean {
			return this.machine_enabled( id )
		}



	}
}

// Содержание
// - <= Agent $milis_vaop_agent
// business? <=> business_example? \Создать новый экземпляр парсера сайта
// programmer? <=> programmer_example? \new Parser()
// machine? <=> machine_example? \const parser = new Parser()
// current_step? <=> current_step_example? 100
// next_step? <=> next_step_example? 200
// name? <=> name_example? \agent_create_parser
