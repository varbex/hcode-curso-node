const crypto = require("crypto");

const startTime = Date.now();

function logHashTime() {
    crypto.pbkdf2("a","b",100000,512, "sha1", () => {
console.log(`Hash: ${Date.now() - startTime}`);
})
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
