import { longestSequence } from "../solutions/one-dimension-array";

describe("Run all tests", () => {
    test("One dimension array task", () => {
        expect(longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1])).toBe(5);
        expect(longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 1])).toBe(7);
        expect(longestSequence([1, 1, 1, 1])).toBe(4);
        expect(longestSequence([0, 0, 0, 0])).toBe(1);
        expect(longestSequence([0])).toBe(1);
        expect(longestSequence([])).toBe(0);
        expect(longestSequence([1, 0, 0, 1, 1, 1, 1])).toBe(5);
    });
});
