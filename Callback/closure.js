// const sum = (a) => (b) => a + b
const sum = (a) => {
  console.log("a", a);
  return (b) => {
    console.log("b", b);
    return a + b;
  };
};

const sum2 = sum(2);

console.log(sum2(1));
console.log(sum2.toString());
console.log(sum(1)(2));
