function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => Object.assign(acc, obj), {})
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

console.log(mergeObjects(obj1, obj2, obj3));
// { a: 1, b: 3, c: 4, d: 5 }
