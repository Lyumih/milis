namespace $.$$ {
	export class $milis_room extends $.$milis_room {
		
		real_length() {
			const square_k = this.square() * 10000 / (this.a() * this.b())
			return {
				a: this.a() * Math.sqrt(square_k),
				b: this.b() * Math.sqrt(square_k),
				k: square_k,
			}
		}

		result() {
			return `Реальная величины комнаты:
			Длина: ${this.real_length().a.toFixed(2)}мм (или ${(this.real_length().a/1000).toFixed(2)}м)
			Ширина: ${this.real_length().b.toFixed(2)}мм (или ${(this.real_length().b/1000).toFixed(2)}м)
			Площадь: ${this.square()/100}м2`
		}
		
	}
}
