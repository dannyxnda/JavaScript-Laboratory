const decreaseToZero = (from) => {
  if (from === 0) {
    console.log("OK");
    return;
  }

  debugger;
  console.log(from);
  from--;

  decreaseToZero(from);
};

decreaseToZero(10);
console.log("Global console.log");
