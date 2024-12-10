namespace $.$$ {
	export class $milis_skills_mod_input extends $.$milis_skills_mod_input {
		
		mod_actions(): readonly (any)[] {
			return this.skill_edit_checked() ? [this.Mod_add(), this.Mod_remove()] : []
		}
		mod_add(next?: any) {
			this.skill().mod_make()
		}

		mod_remove(next?: any) {
			this.skill().mod_remove(this.mod().ref().description!)
		}
		
		mod_description(next?: string): string {
            return this.skill_edit_checked()
                ? this.mod().description(next)
                : this.mod().global_level() + ' ур. ' + this.parse_skill_text(this.mod().description(next), this.mod().global_level(), 0)
        }

		mod_disabled_by_level(): boolean {
			return this.skill().mod_enabled()
		}

		parse_skill_text(text: string, global_level: number, person_level: number): string {
            /** -число%%-процент_на_100_ур */
            const regexp_params = /(-?\d+%%-?\d*)/gm
            const separator = '%%'
            const level = global_level + (person_level || 0)
            const splitted = text.split(regexp_params)
            const replaced = splitted.map(stringPart => {
                if (stringPart.includes(separator)) {
                    const [item_value, item_percent_100] = stringPart.split(separator)
                    const level_percent_final = 1 + (+item_percent_100 / 100 || 1) * level * 0.01 // 1 + 200%*40lvl*0.01 = 1 + 0.8 = 1.8
                    const item_value_final = +item_value
                    return (item_value_final * level_percent_final).toFixed(0) // 50уд.ур * 1.8
                } else {
                    return stringPart
                }
            })
            return replaced.join('')
        }
	}
}
