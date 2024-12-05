namespace $.$$ {
	export class $milis_skills extends $.$milis_skills {

		@$mol_mem
		person(): $milis_skills_person {
			return this.$.$hyoo_crus_glob.home($milis_skills_person)
		}

		person_id(): string {
			console.log(this.person())
			console.log(this.person().skill_list())
			return 'Пользователь: ' + this.person().ref().description || 'no person id'
		}

		// @$mol_mem
		// skills(next?: {id: string, name: string, description: string, mod: string}[]) {
		// 	return next || [
		// 		{id: '1', name: 'Меч', description: 'Ваш меч наносит 100lvl урона за удар', mod: 'Шанс крита +10lvl%'}, 
		// 		{id: '2', name: 'Щит', description: 'Защищает от 30lvl урона с шансом 15lvl% процентов', mod: 'Шанс уворота 30lvl%'}
		// 	]
		// }

		skills() {
			return this.person().skill_list()
		}

		skill_list(): readonly (any)[] {
			return this.skills().map((item) => this.Skill(item.ref().description))
		}

		get_skill(id:string) {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $milis_skills_skill)
		}

		skill_id(id: any): string {
			console.log(this.get_skill(id))
			return this.get_skill(id)?.ref()?.description || 'no id'
		}

		skill_name(id: any, next?: string): string {
			return this.get_skill(id).name(next)
		}

		skill_description(id: any, next?: string): string {
			return this.skill_edit_checked(id) ? this.get_skill(id).description(next) :  this.parse_skill_text(this.get_skill(id).description(next))
		}

		skill_mod(id: any, next?: string): string {
			return this.get_skill(id).mod(next)
		}

		add_skill(next?: any) {
			this.person().skill_make()
		}

		skill_remove(id: string, next?: any) {
			this.person().skill_remove(id)
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
