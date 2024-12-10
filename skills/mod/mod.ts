namespace $ {
    export class $milis_skills_mod extends $hyoo_crus_entity.with({
        Description: $hyoo_crus_atom_str,
        Global_level: $hyoo_crus_atom_real,
        Uses_count: $hyoo_crus_atom_real,
    }) {
        /** Увеличивает глобальный текущий уровень на 1, если шанс random был удачным - равен 100 или больше текущего уровня */
        chance_global_level_up() {
            this.uses_count(this.uses_count() + 1)
            const random = Math.floor(Math.random() * 100 + 1)
            if (random >= 100 || random >= this.global_level()) {
                this.global_level(this.global_level() + 1)
            }
            return random
        }

        description(next?: string) {
            return this.Description(next)?.val(next) ?? ''
        }
		
        global_level(next?: number) {
            return this.Global_level(next)?.val(next) ?? 0
        }

        uses_count(next?: number) {
            return this.Uses_count(next)?.val(next) ?? 0
        }
    }
}
