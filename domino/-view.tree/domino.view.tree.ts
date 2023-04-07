namespace $ {
	export class $milis_domino extends $mol_page {
		
		/**
		 * ```tree
		 * title \Домино
		 * ```
		 */
		title() {
			return "Домино"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	\Стол
		 * 	<= Deck
		 * 	\Игрок
		 * 	<= Player_score
		 * 	<= Player_get_dice
		 * 	<= Player
		 * 	\Магазин
		 * 	<= Shop_list
		 * ```
		 */
		body() {
			return [
				"Стол",
				this.Deck(),
				"Игрок",
				this.Player_score(),
				this.Player_get_dice(),
				this.Player(),
				"Магазин",
				this.Shop_list()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * deck_dice_click*? null
		 * ```
		 */
		@ $mol_mem_key
		deck_dice_click(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * deck_dice_first* 0
		 * ```
		 */
		deck_dice_first(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * deck_dice_second* 0
		 * ```
		 */
		deck_dice_second(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * Deck_dice*0 $milis_domino_dice
		 * 	dice_enabled false
		 * 	dice_click? <= deck_dice_click*?
		 * 	first <= deck_dice_first*
		 * 	second <= deck_dice_second*
		 * ```
		 */
		@ $mol_mem_key
		Deck_dice(id: any) {
			const obj = new this.$.$milis_domino_dice()
			
			obj.dice_enabled = () => false
			obj.dice_click = (next?: any) => this.deck_dice_click(id)
			obj.first = () => this.deck_dice_first(id)
			obj.second = () => this.deck_dice_second(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * deck_dices / <= Deck_dice*0
		 * ```
		 */
		deck_dices() {
			return [
				this.Deck_dice("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Deck $mol_list rows <= deck_dices
		 * ```
		 */
		@ $mol_mem
		Deck() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.deck_dices()
			
			return obj
		}
		
		/**
		 * ```tree
		 * player_dices_score \0 очков
		 * ```
		 */
		player_dices_score() {
			return "0 очков"
		}
		
		/**
		 * ```tree
		 * Player_score $mol_paragraph title <= player_dices_score
		 * ```
		 */
		@ $mol_mem
		Player_score() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.player_dices_score()
			
			return obj
		}
		
		/**
		 * ```tree
		 * player_get_dice_from_shop? null
		 * ```
		 */
		@ $mol_mem
		player_get_dice_from_shop(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Player_get_dice $mol_button_minor
		 * 	title \Взять из магазина
		 * 	click? <= player_get_dice_from_shop?
		 * ```
		 */
		@ $mol_mem
		Player_get_dice() {
			const obj = new this.$.$mol_button_minor()
			
			obj.title = () => "Взять из магазина"
			obj.click = (next?: any) => this.player_get_dice_from_shop()
			
			return obj
		}
		
		/**
		 * ```tree
		 * player_dice_enabled* false
		 * ```
		 */
		player_dice_enabled(id: any) {
			return false
		}
		
		/**
		 * ```tree
		 * player_dice_click*? null
		 * ```
		 */
		@ $mol_mem_key
		player_dice_click(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * player_dice_first* 0
		 * ```
		 */
		player_dice_first(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * player_dice_second* 0
		 * ```
		 */
		player_dice_second(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * Player_dice*0 $milis_domino_dice
		 * 	dice_enabled <= player_dice_enabled*
		 * 	dice_click? <= player_dice_click*?
		 * 	first <= player_dice_first*
		 * 	second <= player_dice_second*
		 * ```
		 */
		@ $mol_mem_key
		Player_dice(id: any) {
			const obj = new this.$.$milis_domino_dice()
			
			obj.dice_enabled = () => this.player_dice_enabled(id)
			obj.dice_click = (next?: any) => this.player_dice_click(id)
			obj.first = () => this.player_dice_first(id)
			obj.second = () => this.player_dice_second(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * player_dices / <= Player_dice*0
		 * ```
		 */
		player_dices() {
			return [
				this.Player_dice("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Player $mol_list rows <= player_dices
		 * ```
		 */
		@ $mol_mem
		Player() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.player_dices()
			
			return obj
		}
		
		/**
		 * ```tree
		 * shop_dice_click*? null
		 * ```
		 */
		@ $mol_mem_key
		shop_dice_click(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * shop_dice_first* 0
		 * ```
		 */
		shop_dice_first(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * shop_dice_second* 0
		 * ```
		 */
		shop_dice_second(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * Show_dice*0 $milis_domino_dice
		 * 	back true
		 * 	dice_click? <= shop_dice_click*?
		 * 	first <= shop_dice_first*
		 * 	second <= shop_dice_second*
		 * ```
		 */
		@ $mol_mem_key
		Show_dice(id: any) {
			const obj = new this.$.$milis_domino_dice()
			
			obj.back = () => true
			obj.dice_click = (next?: any) => this.shop_dice_click(id)
			obj.first = () => this.shop_dice_first(id)
			obj.second = () => this.shop_dice_second(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shop_dices / <= Show_dice*0
		 * ```
		 */
		shop_dices() {
			return [
				this.Show_dice("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Shop_list $mol_list rows <= shop_dices
		 * ```
		 */
		@ $mol_mem
		Shop_list() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.shop_dices()
			
			return obj
		}
	}
	
	export class $milis_domino_dice extends $mol_button_minor {
		
		/**
		 * ```tree
		 * click? <= dice_click?
		 * ```
		 */
		click(next?: any) {
			return this.dice_click()
		}
		
		/**
		 * ```tree
		 * enabled <= dice_enabled
		 * ```
		 */
		enabled() {
			return this.dice_enabled()
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	back <= back
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				back: this.back()
			}
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= First
		 * 	<= Second
		 * ```
		 */
		sub() {
			return [
				this.First(),
				this.Second()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * dice_click? null
		 * ```
		 */
		@ $mol_mem
		dice_click(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * dice_enabled true
		 * ```
		 */
		dice_enabled() {
			return true
		}
		
		/**
		 * ```tree
		 * back false
		 * ```
		 */
		back() {
			return false
		}
		
		/**
		 * ```tree
		 * first 0
		 * ```
		 */
		first() {
			return 0
		}
		
		/**
		 * ```tree
		 * First $mol_view attr * first <= first
		 * ```
		 */
		@ $mol_mem
		First() {
			const obj = new this.$.$mol_view()
			
			obj.attr = () => ({
				first: this.first()
			})
			
			return obj
		}
		
		/**
		 * ```tree
		 * second 0
		 * ```
		 */
		second() {
			return 0
		}
		
		/**
		 * ```tree
		 * Second $mol_view attr * second <= second
		 * ```
		 */
		@ $mol_mem
		Second() {
			const obj = new this.$.$mol_view()
			
			obj.attr = () => ({
				second: this.second()
			})
			
			return obj
		}
	}
	
}

