import NumberSchema from './NumberSchema'
import { StringSchema } from './StringSchema'
import ArraySchema from './ArraySchema'
import BooleanSchema from './BooleanSchema'
import ShapeSchema from './ShapeSchema'

import { ShapeType } from './ShapeSchema'

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

    static shape(obj: ShapeType) {
        return new ShapeSchema(obj)
    }
}
