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
			const generated_dices: typeof DiceType.Value[] = []
			numbers.forEach( first => {
				numbers.forEach( second => first <= second && generated_dices.push( new_dice( first, second ) ) )
			} )
			generated_dices.sort(() => Math.random() - 0.5)
			const normalized_dices: typeof DiceType.Value[] = []
			for( let i = 0; i < generated_dices.length; i++ ) {
				const current_dice = { ...generated_dices[ i ] }
				if( i === 0 ) current_dice.place = 'deck'
				else if( i < 6 ) current_dice.place = 'player'
				normalized_dices.push( current_dice )
			}
			return normalized_dices
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
			return this.dices().filter( dice => dice.place === 'player' ).
				reduce( ( a, c ) => a + c.first + c.second, 0 ) + ' очков'
		}

		@ $mol_action
		player_get_dice_from_shop(){
			const first_dice_shop = this.dices().find(dice => dice.place === 'shop')
			this.dices( this.dices().
			map( ( dice ) => dice.id === first_dice_shop?.id ? { ...dice, place: 'player' } : dice ) )
		}

		player_dices_list(){
			return this.dices().filter( dice => dice.place === 'player' )
		}

		@ $mol_mem
		player_dice_enabled(id: any):boolean {
			const current_dice = this.dices().find(dice => dice.id === id)
			const edges = [current_dice?.first, current_dice?.second]
			return !this.deck_dices_list().
				findIndex(dice => edges.includes(dice.first) ||  edges.includes(dice.second))
		}

		@$mol_mem
		deck_dices() {
			return this.dices().
				filter( dice => dice.place === 'deck' ).
				map( dice => this.Deck_dice( dice.id ) )
		}

		deck_dices_list(){
			return this.dices().filter( dice => dice.place === 'deck' )
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
