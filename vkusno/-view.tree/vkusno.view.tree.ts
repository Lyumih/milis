namespace $ {
	export class $milis_vkusno extends $mol_view {
		
		/**
		 * ```tree
		 * title \$mol - и точка.
		 * ```
		 */
		title() {
			return "$mol - и точка."
		}
		
		/**
		 * ```tree
		 * sub / <= Link
		 * ```
		 */
		sub() {
			return [
				this.Link()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Link $mol_link
		 * 	uri \https://mol.hyoo.ru/
		 * 	title \$mol - и точка.
		 * ```
		 */
		@ $mol_mem
		Link() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://mol.hyoo.ru/"
			obj.title = () => "$mol - и точка."
			
			return obj
		}
	}
	
}

