import { Rule } from '../Rule';

export class MaxStringRule extends Rule {
	private _limit: number;

	constructor (limit: number) {
		super();
		this._limit = limit;
	}

	validate (value: string) {
		if (value.length > this._limit) {
			throw new Error(`Length less than ${this._limit}`);
		}
	}
}
