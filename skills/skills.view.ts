namespace $.$$ {
	export class $milis_skills extends $.$milis_skills {

		@$mol_mem
		skills(next?: {id: string, name: string, description: string}[]) {
			return next || [
				{id: '1', name: 'Меч', description: 'Ваш меч наносит 100%% урона за удар'}, 
				{id: '2', name: 'Щит', description: 'Защищает от 30%% урона с шансом 15%%% процентов'}
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
			return this.parse_skill_description(id) 
		}

		add_skill(next?: any) {
			console.log(next, 'add skill')
			this.skills([...this.skills(), {id: $mol_guid(4), name: this.new_skill_name(), description: this.New_skill_description().value()}])
		}

		parse_skill_description(id: string): string {
			const level = this.level() || 0
			const description = this.get_skill(id)?.description || 'no description'
			const splitted = description.split(/(\d+%%)/gm)
			const replaced = splitted.map(stringPart => stringPart.endsWith('%%') ?
				((1 + level * 0.01) * (+stringPart.split('%%')[0])).toFixed(0)
			: stringPart)
			console.log(splitted)
			return replaced.join('')
		}
	}
}
