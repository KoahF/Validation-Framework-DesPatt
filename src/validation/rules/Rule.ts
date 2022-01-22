export abstract class Rule {
    private _name?: string
    protected _message?: string

    constructor(name: string, message: string) {
        this._name = name
        this._message = message
    }

    abstract checkIsFail(value: any): boolean

    validate(input: any): void {
        if (this.checkIsFail(input)) {
            throw new Error(`${this._message}`)
        }
    }
}
