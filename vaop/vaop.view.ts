namespace $.$$ {


	export class $milis_vaop extends $.$milis_vaop {
		@ $mol_mem
		agent_list(next?: Object[]){
			return next ?? Array.from(Array(10)).map((item, index)=> ({id: item, machine: index}))
		}
		
		@ $mol_mem
		override agents(){
			return this.agent_list().map((item, index) => this.Agent(index))
		}
		
		@ $mol_action
		add_agent(id: any) {
			console.log('123', id, this.agent_list())
			this.agent_list([...this.agent_list(), {id: 12}])
		}

		@ $mol_mem_key
		agent_machine(id: any){
			return 'atwer' + id
		}

		@ $mol_action
		delete_agent(id: any) {
			console.log('id before', id,  this.agents())
			this.agent_list(this.agent_list().filter( (agent, index) => index !== id))
			console.log('id after', id, this.agents())
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
