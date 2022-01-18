import { SchemaFactory } from '../validation/schemas/SchemaFactory';
export default function main () {
	const arraySchema = SchemaFactory.array();
	const booleanSchema = SchemaFactory.boolean();
	const numberSchema = SchemaFactory.number();
	const stringSchema = SchemaFactory.string();

	const shape = SchemaFactory.shape({
		a: arraySchema.length(2),
		b: booleanSchema.isBoolean(),
		c: numberSchema.lessThan(20),
		d: stringSchema.lowerCase(),
	}).validate({ a: [], b: true, c: 12, d: 'string' });
}
