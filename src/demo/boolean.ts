import { SchemaFactory } from '../validation/schemas/SchemaFactory';
export default function main () {
	const booleanSchema = SchemaFactory.boolean();

	booleanSchema.isBoolean().validate(true);
}
