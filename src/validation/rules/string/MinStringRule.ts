import { Rule } from '../Rule';

export default class MinStringRule extends Rule {
	private _limit: number;

	constructor (limit: number, message?: string) {
		super(message || 'this length must be greater than or equal to ' + limit);
		this._limit = limit;
	}

	checkIsFail (value: string): boolean {
		return value.length < this._limit;
	}
}
