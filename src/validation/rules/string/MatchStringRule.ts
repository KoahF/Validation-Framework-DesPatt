import { Rule } from '../Rule';

export class MatchesStringRule extends Rule {
	private _regex: RegExp;

	constructor (limit: RegExp) {
		super();
		this._regex = limit;
	}

	validate (value: string) {
		const isValid = this._regex.test(value);

		if (!isValid) {
			throw new Error('Not Match');
		}
	}
}
