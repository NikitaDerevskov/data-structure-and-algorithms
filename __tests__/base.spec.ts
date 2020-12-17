import { longestSequence } from "../solutions/one-dimension-array";
import { getSpiral } from "../solutions/two-dimension-array";

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

    test("Two dimension array task", () => {
        expect(getSpiral([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
            .toEqual([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
        expect(getSpiral([])).toEqual([]);
        expect(getSpiral([[]])).toEqual([]);
        expect(getSpiral([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
        expect(getSpiral([[1, 2, 3, 4], [5, 6, 7, 8]])).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
        expect(getSpiral([[1], [2], [3]])).toEqual([1, 2, 3]);
        expect(getSpiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
    })
});
