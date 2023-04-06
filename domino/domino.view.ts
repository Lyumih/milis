namespace $.$$ {
	const DiceType = $mol_data_record( {
		id: $mol_data_string,
		shop: $mol_data_boolean,
		first: $mol_data_number,
		second: $mol_data_number,
	} )

	export class $milis_domino extends $.$milis_domino {

		@$mol_mem
		dices( next?: typeof DiceType.Value[] ) {
			return next ?? [ {
				id: '00',
				shop: true,
				first: 0,
				second: 0,
			}, {
				id: '01',
				shop: false,
				first: 0,
				second: 1,
			}, {
				id: '11',
				shop: true,
				first: 1,
				second: 2,
			},
			]
		}

		@$mol_mem
		shop_dices() {
			return this.dices().
				filter( dice => dice.shop ).
				map( dice => this.Show_dice( dice.id ) )
		}

		@$mol_mem
		player_dices() {
			return this.dices().
				filter( dice => !dice.shop ).
				map( dice => this.Player_dice( dice.id ) )
		}

		@$mol_mem_key
		shop_dice_first( id: string ): number {
			return this.dices().find( item => id === item.id )?.first ?? 0
		}

		@$mol_mem_key
		shop_dice_second( id: string ): number {
			return this.dices().find( item => id === item.id )?.second ?? 0
		}

		@$mol_action
		shop_dice_click( id: string ) {
			this.dices( this.dices().
				map( ( dice ) => dice.id === id ? { ...dice, shop: false } : dice ) )
		}

		@$mol_mem_key
		player_dice_first( id: string ): number {
			return this.dices().find( item => id === item.id )?.first ?? 0
		}

		@$mol_mem_key
		player_dice_second( id: string ): number {
			return this.dices().find( item => id === item.id )?.second ?? 0
		}

		@$mol_action
		player_dice_click( id: string ) {
			this.dices( this.dices().
				map( ( dice ) => dice.id === id ? { ...dice, shop: false } : dice ) )
		}
	}
}
