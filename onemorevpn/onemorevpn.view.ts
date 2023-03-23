namespace $.$$ {
	export class $milis_onemorevpn extends $.$milis_onemorevpn {

		fetch_data() {
			const url = 'https://dummyjson.com/users/'
			const result = $mol_fetch.json( url )
			console.log( result )
		}

		// @ $mol_mem
		// users_rows() {
		// 	return [
		// 		this.Row(1),
		// 		this.Row(2),
		// 	]
		// }

		// @ $mol_mem
		// users_data() {
		// 	return [
		// 		{firstName: 'Mikhail'},
		// 		{firstName: 'Nikita '}
		// 	]
		// }
		

		// row_id( id: number ) {
		// 	return this.users_data[id]?.firstName ?? 'sdf'
		// }

	}
}
