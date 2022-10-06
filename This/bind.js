var obj1 = {
  valueOfThis: function () {
    console.log(this);
  },
};
var obj2 = {
  valueOfThis: () => {
    console.log(this);
  },
};

var obj3 = {
  a: "AAAAAAA",
};

// console.log({
//   1: obj1.valueOfThis.apply(obj3),
//   2: obj2.valueOfThis.apply(obj3),
// });

obj1.valueOfThis.apply(obj3);
obj2.valueOfThis.apply(obj3); // arrow function cannot bind `this`
