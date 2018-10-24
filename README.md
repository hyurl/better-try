# Better Try-Catch Block

## Install

```sh
npm i better-try
```

## Concept

The native `try...catch...` block in JavaScript can only have one **catch** 
block, and no way to bind accurate error type to catch. Using `better-try`, you 
can have multiple **catch** block, and catch exact error type as you'll do in 
other programming languages.

## Example

```javascript
const betterTry = require("better-try");

betterTry(() => {
    // TODO
}).catch(TypeError, err => {
    console.log("TypeError occurred:", err.message);
}).catch(ReferenceError, err => {
    console.log("ReferenceError occurred:", err.message);
}).catch(RangeError, err => {
    console.log("RangeError occurred:", err.message);
}).catch(Error, err => { // catch any error that extends Error
    console.log(err.name, "occurred:", err.message);
}).catch(err => { // catch any type of thrown error
    console.log("error occurred:", String(err));
}).finally(() => {
    // TODO
});
// ...
```

## Notice

If try to catch `Error` when there are other error types to catch, make sure 
that `Error` is on the bottom, otherwise it will be first caught and break 
catching any other type of error.