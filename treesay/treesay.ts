namespace $.$$ {
	export class $milis_treesay extends Object {
		static grammar() {
			return (
				[
					{
						key: '$',
						value: 'класс '
					},
					{
						key: '$',
						value: 'наследуется от класса '
					},
					{
						key: '_',
						value: '-'
					},
					{
						key: '/',
						value: 'содержит массив элементов '
					},
					{
						key: '\\',
						value: 'содержит строку '
					},
					{
						key: '^[0-9]',
						value: 'число '
					},
					// {
					// 	key: '<=',
					// 	value: 'Элемент '
					// },
				]
			)
		}

		static parse( text: string ) {
			const splitted = text.split( '\n' )
			const translated = splitted.map( line =>
				line
					.replace( this.grammar()[0].key, this.grammar()[0].value )
					.replace( this.grammar()[1].key, this.grammar()[1].value  )
					.replaceAll( this.grammar()[2].key, this.grammar()[2].value )
					.replaceAll( this.grammar()[3].key, this.grammar()[3].value )
					.replaceAll( this.grammar()[4].key, this.grammar()[4].value )
					// .replace( this.grammar()[4].key, this.grammar()[4].value )
			)
			const translatedNum = translated.map(line =>
				Number.isInteger( +line.trimStart().charAt(0)) ? 'число ' + line : line)
			console.log( translatedNum )
			return translatedNum
		}
	}
}
