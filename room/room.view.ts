namespace $.$$ {
	export class $milis_room extends $.$milis_room {
		real_length() {
			const square_k =  Math.sqrt(this.square() * 10000 / (this.a() * this.b()))
			return {
				a: this.a() * square_k,
				b: this.b() * square_k,
				k: square_k,
			}
		}

		result() {
			return `Реальная величины комнаты:
			1мм на плане = ${this.real_length().k.toFixed(2)}мм реальной длины
			Площадь: ${this.square()/100}м2
			Длина: ${this.real_length().a.toFixed(2)}мм (или ${(this.real_length().a/1000).toFixed(2)}м)
			Ширина: ${this.real_length().b.toFixed(2)}мм (или ${(this.real_length().b/1000).toFixed(2)}м)`
		}

		custom_result(): string {
			return `Реальная длина стены в ${this.custom()}мм составляет ${(this.custom() / this.real_length().k).toFixed(2)}мм на плане`
		}
	}
}
