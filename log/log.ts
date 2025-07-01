namespace $ {
    /** Декоратор логирование в консоль аргументов и результата. */
    export function $milis_log(target: any, key: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value
		

        descriptor.value = function (...args: any[]) {
			const result = originalMethod.apply( this, args )
            console.debug(
                `%c\t${key}\n>>>`,
                'color: lightyellow',
                args,
                '\t',
                JSON.stringify(args),
                '\n<<<',
                result,
                '\t',
                JSON.stringify(result)
            )
            return result
        }

        return descriptor
    }

    /** Декоратор логирование в консоль аргументов */
    export function $milis_log_in(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args)
            console.debug(`%c\t${key}\n>>>`, 'color: lightyellow', args, '\t', JSON.stringify(args))
            return result
        }

        return descriptor
    }

    /** Декоратор логирование в консоль результата */
    export function $milis_log_out(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args)
            console.debug(
                `%c\t${key}\n<<<`,
                'color: lightyellow',
                result,
                '\t',
                JSON.stringify(result)
            )
            return result
        }

        return descriptor
	}

}
