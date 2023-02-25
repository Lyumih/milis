namespace $.$$ {

	type TourItem = {
		title: string;
		content: string;
		locator: string;
	};
	
	const mockItems: TourItem[] = [
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
	];

	export class $milis_hello extends $.$milis_hello {
		constructor() {
			super()
			this.items(mockItems)
		}

		message() {
			let name = this.name()
			return name && `Hello, ${ name }!`
		}

		@ $mol_mem
		items(items?: TourItem[]) {
			return items ?? [];
			// return mockItems ?? [];
		}

	}
}
