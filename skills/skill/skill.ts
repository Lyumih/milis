namespace $ {
	
	export class $milis_skills_skill extends $hyoo_crus_entity.with({
		Name: $hyoo_crus_atom_str,
		Description: $hyoo_crus_atom_str,
		Mod: $hyoo_crus_atom_str,
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
