import { StringSchema } from './StringSchema';

export class SchemaFactory {
	static string () {
		return new StringSchema();
	}
}
