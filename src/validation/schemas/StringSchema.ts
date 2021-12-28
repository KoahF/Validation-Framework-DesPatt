import { StringRule } from './../rules/string';
import { BaseSchema } from './BaseSchema';

export class StringSchema extends BaseSchema {
	length (limit: number) {
		this.ruleList.addRule(new StringRule.LengthStringRule(limit));
		return this;
	}

	lowerCase () {
		this.ruleList.addRule(new StringRule.LowerCaseStringRule());
		return this;
	}

	max (limit: number) {
		this.ruleList.addRule(new StringRule.MaxStringRule(limit));
		return this;
	}

	min (limit: number) {
		this.ruleList.addRule(new StringRule.MinStringRule(limit));
		return this;
	}

	trim () {
		this.ruleList.addRule(new StringRule.TrimStringRule());
		return this;
	}

	upperCase () {
		this.ruleList.addRule(new StringRule.UpperCaseStringRule());
		return this;
	}

	matches (value: RegExp) {
		this.ruleList.addRule(new StringRule.MatchesStringRule(value));
		return this;
	}
}
