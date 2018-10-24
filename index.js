function TryCatchBlock(err) {
    this.error = err;
    this.errorHandled = false;
    this.hasFinalHandler = false;
}

TryCatchBlock.prototype.catch = function (errorType, handler) {
    if (this.error !== undefined) {
        if (arguments.length === 1) {
            handler = errorType;
            errorType = void 0;
        }

        if (typeof handler != "function") {
            throw new TypeError("handler must be a function");
        } else if (errorType && (typeof errorType != "function"
            || (errorType !== Error && !(errorType.prototype instanceof Error)))) {
            throw new TypeError("errorType must a sub-class of Error or Error itself");
        } else if ((!errorType || this.error instanceof errorType) && !this.errorHandled) {
            this.errorHandled = true;
            handler(this.error);
        }
    }

    return this;
};

TryCatchBlock.prototype.finally = function (handler) {
    if (this.hasFinalHandler)
        throw new Error("there should be only one finally handler");
    else if (typeof handler != "function")
        throw new TypeError("handler must be a function");
    else
        (this.hasFinalHandler = true) && handler();

    return this;
};

function betterTry(block) {
    try {
        block();
        return new TryCatchBlock;
    } catch (err) {
        return new TryCatchBlock(err);
    }
}

module.exports = betterTry;