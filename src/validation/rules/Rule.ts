export abstract class Rule {
    private _name?: string
    protected _message?: string
    private _key?: string

    constructor(name: string, message?: string, key?: string) {
        this._name = name
        this._message = message
        this._key = key || 'this'
    }

    abstract checkIsFail(value: any): boolean

    validate(input: any): void {
        if (this.checkIsFail(input)) {
            throw new Error(`${this._key} ${this._message}`)
        }
    }
}
