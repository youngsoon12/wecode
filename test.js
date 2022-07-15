const evenNumber = () => {
  let arr = [];
  for (let i = 1; i <= 50; i++) {
    i % 2 == 0 ? arr.push(i) : null;
  }
  return arr;
};

console.log(evenNumber());
