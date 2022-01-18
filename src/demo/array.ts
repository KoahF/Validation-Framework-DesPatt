import { SchemaFactory } from '../validation/schemas/SchemaFactory';
export default function main () {
	const arraySchema = SchemaFactory.array();

	// arraySchema.length(2).validate([ 1, 2 ]);
	// arraySchema.length(2).validate([ 1, 2, 3 ]);
}
