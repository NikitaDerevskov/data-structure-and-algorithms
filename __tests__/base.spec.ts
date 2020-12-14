import { sampleFunction } from "../solutions/one-demension-array";

describe("Simple expression tests", () => {
    test("First check", () => {
        expect(sampleFunction('hello')).toEqual('hellohello');
    });
});
