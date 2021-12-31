import { Rule } from '../Rule';

export default class MatchesStringRule extends Rule {
	private _regex: RegExp;

	constructor (reg: RegExp, message?: string) {
		super(message || 'this not match ' + reg);
		this._regex = reg;
	}

	checkIsFail (value: string): boolean {
		return this._regex.test(value);
	}
}
