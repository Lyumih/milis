namespace $.$$ {
	export class $milis_skills_skill_page extends $.$milis_skills_skill_page {

		// 'Меч', 'Ваш меч наносит 100lvl урона за удар', 'Шанс крита +10lvl%'}, 
		// 'Щит', 'Защищает от 30lvl урона с шансом 15lvl% процентов', 'Шанс уворота 30lvl%'}
		@$mol_mem
		person(): $milis_skills_person {
			return this.$.$hyoo_crus_glob.home($milis_skills_person)
		}

		skills() {
			return this.person().skill_list()
		}

		skill_list(): readonly (any)[] {
			return this.skills().map((item) => this.Skill(item.ref().description))
		}

		get_skill(id:string) {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $milis_skills_skill)
		}
		
		add_skill(next?: any) {
			this.person().skill_make()
		}
	}
}
