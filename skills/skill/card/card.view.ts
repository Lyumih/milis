namespace $.$$ {
	export class $milis_skills_skill_card extends $.$milis_skills_skill_card {

		person() {
			return this.$.$hyoo_crus_glob.home($milis_skills_person)
		}

		level_up(next?: any) {
			if (!this.skill_edit_checked())
				this.skill().chance_global_level_up()
				console.log('level up', this.skill().global_level())
		}

		global_level_text(): string {
			return '' + (this.skill().global_level() + this.person().level())
		}
		
		skill_id(): string {
			return this.skill().ref()?.description || 'no id'
		}

		skill_description(next?: string): string {
			return this.skill_edit_checked() ? this.skill().description(next) :  this.parse_skill_text(this.skill().description(next))
		}

		skill_mod(next?: string): string {
			return this.skill_edit_checked() ? this.skill().mod(next) : this.parse_skill_text( this.skill().mod(next))
		}

		skill_remove(next?: any) {
			this.person().skill_remove(this.skill().ref().description!)
		}

		parse_skill_text(text: string): string {
			const level = (this.skill().global_level() + this.person().level()) || 0
			const separator = '%%'
			const splitted = text.split(/(\d+%%)/gm)
			const replaced = splitted.map(stringPart => stringPart.endsWith(separator) ?
				((1 + level * 0.01) * (+stringPart.split(separator)[0])).toFixed(0)
			: stringPart)
			return replaced.join('')
		}
		
	}
}
