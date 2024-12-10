namespace $ {
	
	export class $milis_skills_skill extends $hyoo_crus_entity.with({
		Name: $hyoo_crus_atom_str,
		Description: $hyoo_crus_atom_str,
		Mod: $hyoo_crus_atom_str,
		Type: $hyoo_crus_atom_str,
		Image: $hyoo_crus_atom_str,
		Global_level: $hyoo_crus_atom_real,
		Uses_count: $hyoo_crus_atom_real,
		// Limit: $hyoo_crus_atom_real,
		// Category: $hyoo_crus_list_ref_to( ()=> $hyoo_budget_category ),
	}) {

		name( next?: string) {
			return this.Name( next )?.val( next ) ?? ''
		}

		description( next?: string) {
			return this.Description( next )?.val( next ) ?? ''
		}
		
		mod( next?: string) {
			return this.Mod( next )?.val( next ) ?? ''
		}

		type( next?: string) {
			return this.Type( next )?.val( next ) ?? ''
		}

		image( next?: string) {
			return this.Image( next )?.val( next ) ?? ''
		}

		global_level( next?: number) {
			return this.Global_level( next )?.val( next ) ?? 0
		}

		uses_count(next?: number){
			return this.Uses_count(next)?.val(next) ?? 0
		}

		/** Увеличивает глобальный текущий уровень на 1, если шанс random был удачным - равен 100 или больше текущего уровня */
		chance_global_level_up() {
			this.uses_count(this.uses_count()+1)
			const random = Math.floor(Math.random() * 100 + 1)
			if (random >= 100 || random >= this.global_level()) {
				this.global_level(this.global_level() + 1)
			}
			return random
		}
		
		
	// 	limit( next?: number ) {
	// 		return this.Limit( next )?.val( next ) ?? null
	// 	}
		
	// 	@ $mol_mem
	// 	category_list() {
	// 		return this.Category()?.remote_list() ?? []
	// 	}

	// 	category_make() {
	// 		return this.Category( null )!.make( null )
	// 	}
		
	// 	category_visible( category: $hyoo_budget_category, next?: boolean ) {
	// 		return this.Category( next )?.has( category.ref(), next ) ?? false
	// 	}

	// 	@ $mol_mem
	// 	ballance() {
	// 		return this.category_list()
	// 			.reduce( ( ballance, category )=> ballance + category.ballance(), 0 )
	// 	}

	// 	@ $mol_mem
	// 	volatility() {
	// 		return this.category_list()
	// 			.reduce( ( ballance, category )=> Math.max( ballance, Math.abs( category.ballance() ) ), 0 )
	// 	}

	}

}
