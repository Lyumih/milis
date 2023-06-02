namespace $.$$ {
	export class $milis_ballsort extends $.$milis_ballsort {

		@ $mol_mem
		game_stage(next?: 'start' | 'game' | 'win'){
			return next ?? 'start'
		}

		@ $mol_mem
		moves(next?: number) {
			return next ?? 0
		}

		moves_text() {
			return 'Moves: ' + this.moves()
		}

		start_game(){
			this.game_stage('game')
		}

		restart() {
			this.moves(0)
		}

		click_cup() {
			this.moves(this.moves() + 1)
		}

		back() {
			this.game_stage('start')
		}

		body(): readonly any[] {
			return this.game_stage() === 'start' ? [this.Start()] : [this.Game()]
		}
	}
}
