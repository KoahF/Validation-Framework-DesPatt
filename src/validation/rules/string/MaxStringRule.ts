import { Rule } from '../Rule';

export default class MaxStringRule extends Rule {
	private _limit: number;

	constructor (limit: number, message?: string) {
		super(message || 'this length must be less than or equal to ' + limit);
		this._limit = limit;
	}

	checkIsFail (value: string): boolean {
		return value.length > this._limit;
	}
}
