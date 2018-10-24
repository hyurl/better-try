interface TryCatchBlock {
    catch(handler: (err: any) => void): this;
    catch<T>(errorType: new (...args) => T, handler: (err: T) => void): this;
    finally(handler: () => void): this;
}

function betterTry(block: () => void): TryCatchBlock;

export = betterTry;