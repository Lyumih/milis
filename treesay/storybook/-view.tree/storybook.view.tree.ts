namespace $ {
	export class $milis_treesay_storybook extends $mol_app_demo {
		
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
		 * sources_uri \https://github.com/Lyumih/milis/
		 * ```
		 */
		sources_uri() {
			return "https://github.com/Lyumih/milis/"
		}
		
		/**
		 * ```tree
		 * repo_dict *
		 * 	^
		 * 	milis \Lyumih/milis
		 * 	mol \no/no
		 * ```
		 */
		repo_dict() {
			return {
				...super.repo_dict(),
				milis: "Lyumih/milis",
				mol: "no/no"
			}
		}
		
		/**
		 * ```tree
		 * detail_title \$milis
		 * ```
		 */
		detail_title() {
			return "$milis"
		}
	}
	
}

