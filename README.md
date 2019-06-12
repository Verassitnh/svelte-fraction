# svelte-fraction

```js
const Fraction = require('svelte-fraction');

let fraction = new Fraction(1.25);

element.innerHTML = fraction.html;
console.log(fraction.nums);
// -> [1, [1, 2]]
```