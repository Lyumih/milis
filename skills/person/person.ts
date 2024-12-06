namespace $ {
	
	export class $milis_skills_person extends $hyoo_crus_home.with({
		Skill: $hyoo_crus_list_ref_to( ()=> $milis_skills_skill ),
		Level: $hyoo_crus_atom_real,
	}) {

		@ $mol_mem
		skill_list(){
			return this.Skill()?.remote_list() ?? []
		}

		level(next?: number){
			return this.Level(next)?.val(next) ?? 0
		}

		@ $mol_mem
		skill_make() {
			return this.Skill( null )!.make({})
		}

		skill_remove(id: string) {
			this.Skill()?.has($hyoo_crus_ref(id), false)
		}

		// @ $mol_mem
		// fund_list() {
		// 	return this.Fund()?.remote_list() ?? []
		// }
		
		// @ $mol_action
		// fund_make() {
		// 	return this.Fund( null )!.make({})
		// }

		// fund_visible( budget: $hyoo_budget_fund, next?: boolean ) {
		// 	return this.Fund( next )?.has( budget.ref(), next ) ?? false
		// }

	}

}
