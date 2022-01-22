import { SchemaFactory } from './validation/schemas/SchemaFactory'
import { NewRule } from './new-rule'
;(function main() {
    const numberSchema = SchemaFactory.number()
    const stringSchema = SchemaFactory.string()
    const booleanSchema = SchemaFactory.boolean()
    const arraySchema = SchemaFactory.array()
    const shapeSchema = SchemaFactory.shape({
        b: SchemaFactory.boolean().isBoolean('phai la boolean'),
        a: SchemaFactory.array().length(1),
    })
    SchemaFactory.addMethod(numberSchema, new NewRule('Bang3', 'phai bang 3'))
    try {
        numberSchema.validate(34)
        console.log('ok')
    } catch (e) {
        const error = e as Error
        console.log(error.message)
    }
})()
