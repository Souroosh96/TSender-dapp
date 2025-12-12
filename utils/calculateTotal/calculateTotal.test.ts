import { describe, it, expect } from "vitest";
import { calculateTotal } from "./calculateTotal";

describe("calculateTotal", () => {
    it("should sum comma-separated values", () => {
        expect(calculateTotal("1,2,3")).toBe(6);
    });

    it("should sum newline-separated values", () => {
        expect(calculateTotal("1\n2\n3")).toBe(6);
    });

    it("should ignore whitespace", () => {
        expect(calculateTotal(" 1 ,  2 , 3 ")).toBe(6);
    });

    it("should return 0 if any value is not a number", () => {
        expect(calculateTotal("1,abc,3")).toBe(0);
    });

    it("should handle empty string", () => {
        expect(calculateTotal("")).toBe(0);
    });

    it("should handle mixed comma + newline separators", () => {
        expect(calculateTotal("1,2\n3")).toBe(6);
    });

    it("should parse floats", () => {
        expect(calculateTotal("1.5, 2.5")).toBe(4);
    });
});
