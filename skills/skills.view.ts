namespace $.$$ {
	export class $milis_skills extends $.$milis_skills {

		// 'Меч', 'Ваш меч наносит 100lvl урона за удар', 'Шанс крита +10lvl%'}, 
		// 'Щит', 'Защищает от 30lvl урона с шансом 15lvl% процентов', 'Шанс уворота 30lvl%'}
		@$mol_mem
		person(): $milis_skills_person {
			return this.$.$hyoo_crus_glob.home($milis_skills_person)
		}

		person_id(): string {
			return this.person().ref().description || 'no person id'
		}
	}
}
