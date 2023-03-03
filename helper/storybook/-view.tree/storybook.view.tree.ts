namespace $ {
	export class $milis_helper_storybook extends $mol_app_demo {
		
		/**
		 * ```tree
		 * editor_title <= detail_title
		 * ```
		 */
		editor_title() {
			return this.detail_title()
		}
		
		/**
		 * ```tree
		 * source_prefix \https://github.com/Lyumih/milis/tree/main/
		 * ```
		 */
		source_prefix() {
			return "https://github.com/Lyumih/milis/tree/main/"
		}
		
		/**
		 * ```tree
		 * repo_dict * mol \Lyumih/milis
		 * ```
		 */
		repo_dict() {
			return {
				mol: "Lyumih/milis"
			}
		}
		
		/**
		 * ```tree
		 * detail_title \$milis_helper
		 * ```
		 */
		detail_title() {
			return "$milis_helper"
		}
	}
	
}

