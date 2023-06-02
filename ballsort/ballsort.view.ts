namespace $.$$ {
	export class $milis_ballsort extends $.$milis_ballsort {

		@$mol_mem
		board( next?: $milis_ballsort_board ) {
			return next ?? new $milis_ballsort_board()
		}

		@$mol_mem
		game_stage( next?: 'start' | 'game' ) {
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

		@$mol_action
		click_column(id?: any) {
			this.board().touch( id )
			this.moves( this.moves() + 1 )
		}

		back() {
			this.game_stage( 'start' )
		}

		body(): readonly any[] {
			switch (this.game_stage()) {
				case "start": return [ this.Start() ]
				case "game": return [ this.Game() ]
			}
		}

		win_content(){
			return this.board().complete() ? super.win_content() : []
		}
	}
}
