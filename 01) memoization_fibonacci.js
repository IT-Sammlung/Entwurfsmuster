//Memoization
const fiboCache = () => {
  const cache = [0, 1];
  const fibo = (x) => {
    console.log(cache);
    let result = cache[x];
    if (typeof result !== 'number') {
      console.log('new calculation for: ' + x);
      result = fibo(x - 1) + fibo(x - 2);
      cache[x] = result;
    }
    return result;
  };
  return fibo;
};
const getFibo = fiboCache();
console.log(getFibo(4));
