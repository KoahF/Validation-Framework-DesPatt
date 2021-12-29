import NumberSchema from './NumberSchema'
import { StringSchema } from './StringSchema'
import ArraySchema from './ArraySchema'
import BooleanSchema from './BooleanSchema'

export class SchemaFactory {
    static string() {
        return new StringSchema()
    }

    static boolean() {
        return new BooleanSchema()
    }

    static number() {
        return new NumberSchema()
    }

    static array() {
        return new ArraySchema()
    }
}
