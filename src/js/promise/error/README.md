- promise callback throw exception equal promise reject

```
new Promise((resolve, reject) => {
    throw new Error("error...");
})
// 等同于
new Promise((resolve, reject) => {
    reject("error...");
})
```
