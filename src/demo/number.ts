import { SchemaFactory } from '../validation/schemas/SchemaFactory';
export default function main () {
	const arraySchema = SchemaFactory.number();

	arraySchema.integer().validate('12');
	arraySchema.lessThan(2).validate('123');
	arraySchema.max(2).validate('XX');
	arraySchema.min(2).validate('aa');
	arraySchema.moreThan(2).validate('2');
	arraySchema.negative().validate('xxx');
	arraySchema.positive().validate('12');
}
