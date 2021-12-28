export abstract class Rule {
	private _name?: string;
	private _message?: string;

	validate (input: any): void {}
}
