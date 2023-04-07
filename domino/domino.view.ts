namespace $.$$ {
	const DiceType = $mol_data_record( {
		id: $mol_data_string,
		place: $mol_data_string,
		first: $mol_data_number,
		second: $mol_data_number,
	} )

	export class $milis_domino extends $.$milis_domino {

		generate_dices(): typeof DiceType.Value[] {
			const numbers = [ 0, 1, 2, 3, 4, 5, 6 ]
			const new_dice = ( first: number, second: number ): typeof DiceType.Value => ( { id: `${ first }${ second }`, place: 'shop', first, second } )
			const result: typeof DiceType.Value[] = []
			numbers.forEach(first => {
				numbers.forEach(second => result.push(new_dice(first, second)))
			})
			// Todo: добавить 1 кость на Стол
			// Todo: добавить 7 костей игроку
			return result
		}

		@$mol_mem
		dices( next?: typeof DiceType.Value[] ) {
			return next ?? this.generate_dices()
		}

		@$mol_mem
		shop_dices() {
			return this.dices().
				filter( dice => dice.place === 'shop' ).
				map( dice => this.Show_dice( dice.id ) )
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
				map( ( dice ) => dice.id === id ? { ...dice, place: 'player' } : dice ) )
		}

		@$mol_mem
		player_dices() {
			return this.dices().
				filter( dice => dice.place === 'player' ).
				map( dice => this.Player_dice( dice.id ) )
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
				map( ( dice ) => dice.id === id ? { ...dice, place: 'deck' } : dice ) )
		}

		player_dices_score(): string {
			return this.dices().filter(dice => dice.place === 'player').
				reduce((a, c) => a + c.first + c.second, 0) + ' очков'
		}

		@$mol_mem
		deck_dices() {
			return this.dices().
				filter( dice => dice.place === 'deck' ).
				map( dice => this.Deck_dice( dice.id ) )
		}

		@$mol_mem_key
		deck_dice_first( id: string ): number {
			return this.dices().find( item => id === item.id )?.first ?? 0
		}

		@$mol_mem_key
		deck_dice_second( id: string ): number {
			return this.dices().find( item => id === item.id )?.second ?? 0
		}

		@$mol_action
		deck_dice_click( id: string ) {
			this.dices( this.dices().
				map( ( dice ) => dice.id === id ? { ...dice, place: 'deck' } : dice ) )
		}
	}
}
