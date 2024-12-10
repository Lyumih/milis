namespace $.$$ {
    export class $milis_skills_skill_card extends $.$milis_skills_skill_card {
        person() {
            return this.$.$hyoo_crus_glob.home($milis_skills_person)
        }
		

		skill_use() {
			this.level_up()
			if (Math.random() > 0.5) {
				this.skill().win()
			}
		}

        level_up(next?: any) {
            if (!this.skill_edit_checked()) this.skill().chance_global_level_up()
        }

        global_level_text(): string {
            return '' + (this.skill().global_level() + (this.person().level() || 0)) + ' ?'
        }

        skill_id(): string {
            return this.skill().ref()?.description || 'no id'
        }

        skill_description(next?: string): string {
            return this.skill_edit_checked()
                ? this.skill().description(next)
                : this.parse_skill_text(this.skill().description(next), this.skill().global_level(), this.person().level())
        }

		skill_mod_list(): readonly (any)[] {
			return this.skill().mod_list().map((item) => this.Skill_mod(item.ref().description))
		}

		get_skill_mod(id: any): $milis_skills_mod {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $milis_skills_mod)
		}

		add_skill_mod() {
			this.skill().mod_make()
		}

		skill_info_rows(): readonly (any)[] {
			return [this.Skill_description(), this.Skill_mod_list(), this.skill_edit_checked() && this.skill().mod_list().length === 0 ? this.Mod_add() : null ].filter(i=>i)
		}

		mod_remove(id: any, next?: any) {
			this.skill().mod_remove(id)
		}

        // skill_mod(next?: string): string {
        //     return this.skill_edit_checked() ? this.skill().mod_list()[0](next) : this.parse_skill_text(this.skill().mod(next))
        // }

		


		/** Проверят, можно ли применить данную модификацию для умения  */
		skill_mod_disabled(): boolean {
			return this.skill().mod_enabled()
		}

        skill_remove(next?: any) {
            this.person().skill_remove(this.skill().ref().description!)
        }

		skill_statistics(): string {
			return `Уровень: ${this.skill().global_level()}.
Использований: ${this.skill().uses_count()}.
Модификация: ${this.skill().mod_list().length}
Ваша карточка прокачивается на 1 уровень за каждое использование с определённым шансом. На 1 уровне шанс 100% и снижается до 1% к 100 уровня. После 100 уровня шанс улучшения 1%.
Модификации открываются за каждый 75 уровень карточки. Модификации имеют свой уровень и прокачиваются отдельно за каждую победу над врагом, а не за использование.`
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
                    // console.log({ level_percent_final, item_value_final })
                    return (item_value_final * level_percent_final).toFixed(0) // 50уд.ур * 1.8
                } else {
                    return stringPart
                }
            })
            return replaced.join('')
        }
    }
}
