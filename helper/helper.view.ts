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
		content: "2 контент  \n Отступы",
		locator: "[milis_hello_Button]",
	},
	{
		title: "3 заголовок",
		content: "3 контент",
		locator: "[milis_hello_Text]",
	},
];

namespace $.$$ {
	export class $milis_helper extends $.$milis_helper {
		constructor() {
			super();
			this.items(mockItems);
		}

		@$mol_mem
		show(value?: boolean): boolean {
			return value ?? true;
		}

		@$mol_mem
		items(value?: TourItem[]): TourItem[] {
			return value ?? [];
		}

		@$mol_mem
		currentStep(value?: number): number {
			console.log("currentStep value", value);
			return value ?? 0;
		}

		currentItem() {
			return this.items()?.[this.currentStep()] ?? {};
		}

		currentItemTitle() {
			return this.currentItem().title ?? "";
		}

		currentItemContent() {
			return this.currentItem().content ?? "";
		}

		prevStep() {
			if (this.currentStep() > 0) {
				this.currentStep(this.currentStep() - 1);
			}
		}
		prevStepDisabled(): boolean {
			return this.currentStep() === 0;
		}

		nextStep() {
			if (this.currentStep() + 1 < this.items().length) {
				this.currentStep(this.currentStep() + 1);
			}
		}

		nextStepDisabled(): boolean {
			return this.currentStep() === this.items().length - 1;
		}

		endTour(): void {
			this.show(false);
		}
	}
}
