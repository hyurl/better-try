"use strict";

const assert = require("assert");
const betterTry = require(".");

describe("try-catch blocks", () => {
    it("should catch an Error instance", () => {
        let isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw new Error("test error");
        }).catch(EvalError, err => {
            isError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
            assert.strictEqual(err.name, "Error");
            assert.strictEqual(err.message, "test error");
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, true);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch an EvalError instance", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw new EvalError("test error");
        }).catch(EvalError, err => {
            isEvalError = true;
            assert.strictEqual(err.name, "EvalError");
            assert.strictEqual(err.message, "test error");
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, true);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, false);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch a RangeError instance", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw new RangeError("test error");
        }).catch(EvalError, err => {
            isEvalError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
            assert.strictEqual(err.name, "RangeError");
            assert.strictEqual(err.message, "test error");
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, true);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, false);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch a ReferenceError instance", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw new ReferenceError("test error");
        }).catch(EvalError, err => {
            isEvalError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
            assert.strictEqual(err.name, "ReferenceError");
            assert.strictEqual(err.message, "test error");
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, true);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, false);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch a SyntaxError instance", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw new SyntaxError("test error");
        }).catch(EvalError, err => {
            isEvalError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
            assert.strictEqual(err.name, "SyntaxError");
            assert.strictEqual(err.message, "test error");
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, true);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, false);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch a TypeError instance", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw new TypeError("test error");
        }).catch(EvalError, err => {
            isEvalError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
            assert.strictEqual(err.name, "TypeError");
            assert.strictEqual(err.message, "test error");
        }).catch(Error, err => {
            isError = true;
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, true);
        assert.strictEqual(isError, false);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch any error that extends Error", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        class MyError extends Error {
            constructor(msg) {
                super(msg);
                this.name = this.constructor.name;
            }
        }

        betterTry(() => {
            throw new MyError("test error");
        }).catch(EvalError, err => {
            isEvalError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
            assert.strictEqual(err.name, "MyError");
            assert.strictEqual(err.message, "test error");
        }).catch(err => {
            isAnyError = true;
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, true);
        assert.strictEqual(isAnyError, false);
        assert.strictEqual(isDone, true);
    });

    it("should catch a string error", () => {
        let isError = false,
            isEvalError = false,
            isRangeError = false,
            isReferenceError = false,
            isSyntaxError = false,
            isTypeError = false,
            isAnyError = false,
            isDone = false;

        betterTry(() => {
            throw "test error";
        }).catch(EvalError, err => {
            isEvalError = true;
        }).catch(RangeError, err => {
            isRangeError = true;
        }).catch(ReferenceError, err => {
            isReferenceError = true;
        }).catch(SyntaxError, err => {
            isSyntaxError = true;
        }).catch(TypeError, err => {
            isTypeError = true;
        }).catch(Error, err => {
            isError = true;
        }).catch(err => {
            isAnyError = true;
            assert.strictEqual(err, "test error");
        }).finally(() => {
            isDone = true;
        });

        assert.strictEqual(isEvalError, false);
        assert.strictEqual(isRangeError, false);
        assert.strictEqual(isReferenceError, false);
        assert.strictEqual(isSyntaxError, false);
        assert.strictEqual(isTypeError, false);
        assert.strictEqual(isError, false);
        assert.strictEqual(isAnyError, true);
        assert.strictEqual(isDone, true);
    });
});