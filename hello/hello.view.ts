namespace $.$$ {

	const mockItems: $milis_helper_TourItem[] = [
		{
			title: "1 заголовок",
			content: "1 контент",
			locator: "[$milis_hello]",
		},
		{
			title: "2 заголовок",
			content: "2 контент",
			locator: "[milis_hello_Button]",
		},
		{
			title: "3 заголовок",
			content: "3 контент",
			locator: "[milis_hello_Text]",
		},
	]

	export class $milis_hello extends $.$milis_hello {

		message() {
			let name = this.name()
			return name && `Hello, ${ name }!`
		}

		tourItems( items?: $milis_helper_TourItem[] ): $milis_helper_TourItem[] {
			return items ?? mockItems
		}

		@$mol_mem
		tutorial( value?: boolean ) {
			return value ?? false
		}

		toggleTutorial() {
			this.tutorial( !this.tutorial() )
		}

	}
}
