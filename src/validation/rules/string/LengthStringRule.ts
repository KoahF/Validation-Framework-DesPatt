import { Rule } from '../Rule';

export class LengthStringRule extends Rule {
	private _limit: number;

	constructor (limit: number) {
		super();
		this._limit = limit;
	}

	validate (value: string) {
		if (value.length !== this._limit) throw new Error('Wrong length = ' + this._limit);
	}
}
