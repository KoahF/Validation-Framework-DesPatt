export abstract class Rule {
	protected _name?: string;
	protected _message?: string;

	validate (input: any): void {}
}
