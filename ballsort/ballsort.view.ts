namespace $.$$ {
	export class $milis_ballsort extends $.$milis_ballsort {

		@$mol_mem
		board( next?: $milis_ballsort_board ) {
			return next ?? new $milis_ballsort_board()
		}

		@$mol_mem
		game_stage( next?: 'start' | 'game' | 'win' ) {
			return next ?? 'game'
		}

		@$mol_mem
		columns() {
			return this.board().balls().map( ( balls, index ) => this.Column( index ) )
		}

		@$mol_mem_key
		column_balls( id: any ): readonly any[] {
			return this.board().balls()[ id ].map( ( ball, index ) => this.Ball( `${ id }-${ index }` ) )
		}

		@$mol_mem_key
		ball_color( id: string, color?: string ): string {
			const [ column_index, ball_index ] = id.split( '-' )
			return color ?? this.board().balls()[ +column_index ][ +ball_index ]
		}

		@$mol_mem
		moves( next?: number ) {
			return next ?? 0
		}

		moves_text() {
			return 'Moves: ' + this.moves()
		}

		start_game() {
			this.game_stage( 'game' )
		}

		restart() {
			this.moves( 0 )
			this.board( new $milis_ballsort_board )
		}

		click_column(id?: any) {
			this.board().touch( 1 )
			this.moves( this.moves() + 1 )
		}

		back() {
			this.game_stage( 'start' )
		}

		body(): readonly any[] {
			return this.game_stage() === 'start' ? [ this.Start() ] : [ this.Game() ]
		}
	}
}
