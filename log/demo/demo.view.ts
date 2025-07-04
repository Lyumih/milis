namespace $.$$ {
    export class $milis_log_demo extends $.$milis_log_demo {
        @$milis_log
        @$mol_mem
        input_value(next?: string): string {
            return next || ''
        }

		@$milis_log
        input_length(): string {
            return 'Длина строки: ' + this.input_value().length
        }
    }
}
