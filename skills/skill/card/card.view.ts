namespace $.$$ {
    export class $milis_skills_skill_card extends $.$milis_skills_skill_card {
        person() {
            return this.$.$hyoo_crus_glob.home($milis_skills_person)
        }

        level_up(next?: any) {
            if (!this.skill_edit_checked()) this.skill().chance_global_level_up()
            console.log('level up', this.skill().global_level())
        }

        global_level_text(): string {
            return '' + (this.skill().global_level() + this.person().level()) + ' ур.'
        }

        skill_id(): string {
            return this.skill().ref()?.description || 'no id'
        }

        skill_description(next?: string): string {
            return this.skill_edit_checked()
                ? this.skill().description(next)
                : this.parse_skill_text(this.skill().description(next))
        }

        skill_mod(next?: string): string {
            return this.skill_edit_checked() ? this.skill().mod(next) : this.parse_skill_text(this.skill().mod(next))
        }

        skill_remove(next?: any) {
            this.person().skill_remove(this.skill().ref().description!)
        }

        parse_skill_text(text: string): string {
            /** -число%%-процент_на_100_ур */
            const regexp_params = /(-?\d+%%-?\d*)/gm
            const separator = '%%'
            const level = this.skill().global_level() + this.person().level() || 0
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
            console.log({ splitted, replaced })
            return replaced.join('')
        }
    }
}
