function Validator() {}

Validator.prototype.isNotEmptyOrThrow = function(...values) {
    values.forEach((v, i) => {
        if (v !== false && v !== 0 && !v) {
            throw new Error(`Empty mandatory value at index #${i}!`);
        }
    });
    return true;
};

module.exports = new Validator();
