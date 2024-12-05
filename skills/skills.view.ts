namespace $.$$ {
	export class $milis_skills extends $.$milis_skills {

		@$mol_mem
		skills(next?: {id: string, name: string, description: string, mod: string}[]) {
			return next || [
				{id: '1', name: 'Меч', description: 'Ваш меч наносит 100lvl урона за удар', mod: 'Шанс крита +10lvl%'}, 
				{id: '2', name: 'Щит', description: 'Защищает от 30lvl урона с шансом 15lvl% процентов', mod: 'Шанс уворота 30lvl%'}
			]
		}
		skill_list(): readonly (any)[] {
			return this.skills().map((item) => this.Skill(item.id))
		}

		get_skill(id:string) {
			return this.skills().find((skill) => id === skill.id )
		}

		skill_name(id: any): string {
			return '#' + id + ' - ' + this.get_skill(id)?.name || 'no name'
		}

		skill_description(id: any): string {
			return this.parse_skill_text(this.get_skill(id)?.description || 'no description') 
		}

		skill_mod(id: any): string {
			return this.parse_skill_text(this.get_skill(id)?.mod || 'no mods') 
		}

		add_skill(next?: any) {
			console.log(next, 'add skill')
			this.skills([...this.skills(), {id: $mol_guid(4), name: this.new_skill_name(), description: this.new_skill_description(), mod: this.new_skill_mod()}])
		}

		parse_skill_text(text: string): string {
			const level = this.level() || 0
			const splitted = text.split(/(\d+lvl)/gm)
			const replaced = splitted.map(stringPart => stringPart.endsWith('lvl') ?
				((1 + level * 0.01) * (+stringPart.split('lvl')[0])).toFixed(0)
			: stringPart)
			console.log(splitted)
			return replaced.join('')
		}
	}
}
