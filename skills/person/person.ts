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
			const skill = this.Skill( null )!.make({})
			skill.mod_make()
			skill.mod_make()
			skill.mod_make()
			return skill
		}

		skill_remove(id: string) {
			console.log(id, $hyoo_crus_ref(id))
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
