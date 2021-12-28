import { BaseSchema } from "./BaseSchema";
import { BooleanRules } from "../rules/boolean";

export class BooleanSchema extends BaseSchema {
  constructor() {
    super();
    this.ruleList.addRule(new BooleanRules.IsBooleanRule());
  }
}
