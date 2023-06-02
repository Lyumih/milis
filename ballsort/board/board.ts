namespace $ {
	
	export class Board extends $mol_object2 {
		
		@ $mol_mem
		colors() {
			return [ 'red', 'blue', 'green', 'magenta' ]
		}
		
		@ $mol_mem
		balls( next?: null | readonly( readonly string[] )[] ) {
			
			if( next ) return next
			
			const colors = this.colors()
			
			return [
				... colors.map( ()=> $mol_array_shuffle( colors ) ),
				[],
				[],
			]
			
		}
		
		@ $mol_mem_key
		col_full( col: number ) {
			return this.balls()[ col ].length === this.colors().length
		}
		
		@ $mol_mem_key
		col_empty( col: number ) {
			return this.balls()[ col ].length === 0
		}
		
		@ $mol_mem_key
		col_complete( col: number ) {
			
			if( this.col_empty( col ) ) return true
			if( !this.col_full( col ) ) return false
			
			const balls = this.balls()[ col ]
			return balls.every( color => color === balls[0] ) 
			
		}
		
		col_active( col: number ) {
			return this.active() == col
		}
		
		@ $mol_mem
		coplete() {
			return this.balls().every( ( _, i )=> this.col_complete( i ) )
		}
		
		@ $mol_mem
		active( next = -1 ) { return next }
		
		@ $mol_action
		touch( col: number ) {
			
			let active = this.active()
			if( active === -1 ) {
				
				if( this.col_empty( col ) ) return
				this.active( col )
				
			} else if( active === col ) {
				
				this.active( -1 )
				
			} else {
				
				if( this.col_full( col ) ) {
					this.active( col )
					return
				}
				
				let balls = this.balls()
				const color = balls[ active ][0]
				
				if( !this.col_empty( col ) ) {
					if( balls[ col ][0] !== color ) {
						this.active( col )
						return
					}
				}
				
				const mut = $mol_mutable( balls )
				mut[ active ]( colors => colors.slice(1) )
				mut[ col ]( ()=> [ color ] )
				
				this.balls( mut() )
				this.active( -1 )
				
			}
		}
		
	}
	
}
