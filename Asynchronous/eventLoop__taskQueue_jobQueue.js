setTimeout(() => console.log("Timeout 0 to log | 1"), 0);
setTimeout(() => console.log("Timeout 100 to log | 1"), 100);

Promise.resolve(console.log("Promise resolve")).then(() =>
  console.log("Promise fulfilled")
);

new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("Promise resolve timeout 100"));
  }, 100);
}).then(() => {
  console.log("Promise timeout fulfilled");
});

setTimeout(() => console.log("Timeout 100 to log | 2"), 100);
setTimeout(() => console.log("Timeout 0 to log | 2"), 0);

console.log("Normal console.log");

/**
Promise resolve
Normal console.log
Promise fulfilled
Timeout 0 to log | 1
Timeout 0 to log | 2
Timeout 100 to log | 1
Promise resolve timeout 100
Promise timeout fulfilled
Timeout 100 to log | 2
 */
