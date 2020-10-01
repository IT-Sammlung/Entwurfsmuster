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


//http://pythontutor.com/javascript.html#code=%20%20%20%20%20%20//Memoization%0A%20%20%20%20%20%20const%20fiboCache%20%3D%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20cache%20%3D%20%5B0,1%5D%3B%0A%20%20%20%20%20%20%20%20const%20fibo%20%3D%20%28x%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20console.log%28cache%29%3B%0A%20%20%20%20%20%20%20%20%20%20let%20result%20%3D%20cache%5Bx%5D%3B%0A%20%20%20%20%20%20%20%20%20%20if%28typeof%20result%20!%3D%3D%20'number'%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log%28'new%20calculation%20for%3A%20'%20%2B%20x%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20result%20%3D%20fibo%28x-1%29%20%2B%20fibo%28x-2%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cache%5Bx%5D%20%3D%20result%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20return%20result%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20return%20fibo%3B%0A%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20const%20getFibo%20%3D%20fiboCache%28%29%3B%0A%20%20%20%20%20%20console.log%28getFibo%284%29%29%3B&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D
