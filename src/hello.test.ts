import {hello} from "./hello"

describe('hello', () => {
    it("should greet you", () => {
        expect(hello('you')).toEqual('Hello you')
    })
})