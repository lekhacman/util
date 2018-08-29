const validator = require("../src/validator");

describe("Validator Test", () => {
    test("isNotEmptyOrThrow", () => {
        const cases = [
            {
                input: [0, "aoeu", true],
                expect: true
            },
            {
                input: [0, "false", false],
                expect: true
            },
            {
                input: [0, "", true],
                expect: false
            }
        ];

        cases.forEach(c => {
            if (!c.expect) {
                expect(() => {
                    validator.isNotEmptyOrThrow(...c.input);
                }).toThrow();
            } else {
                expect(validator.isNotEmptyOrThrow(...c.input)).toBe(true);
            }
        });
    });
});
