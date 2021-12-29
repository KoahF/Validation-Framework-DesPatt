import { StringSchema } from './StringSchema'
import { BooleanSchema } from './BooleanSchema'
export class SchemaFactory {
    static string() {
        return new StringSchema()
    }
    static boolean() {
        return new BooleanSchema()
    }
}
