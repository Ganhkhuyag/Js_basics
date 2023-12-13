//

function isPrime(n) {
  let prime = true;
  if (n == 1) return false;
  for (let i = 2; i < n; i = i + 1) {
    // console.log("i", i);
    if (n % i == 0) {
      prime = false;
    }
  }
  return prime;
}
// console.log(isPrime(98));

// min-max zavsar dahi prime

function findPrime(min, max) {
  let primes = [];
  let index = 0;
  for (let i = min; i <= max; i++) {
    console.log("i:", i);
    if (isPrime(i)) {
      console.log("index:", index, " i:", i);
      primes[index] = i;
      index++;
    }
  }
  return primes;
}
console.log(findPrime(1, 9));

// primes = [2, 3, 5, 7];

// primes[0] = 2;
// primes[1] = 3;
// primes[2] = 5;
// primes[3] = 7;

function isPrime(num1) {
  let prime = true;
  if (num1 == 1) return false;
  for (let i = 2; i < num1; i++) {
    // console.log("i", i);
    if (num1 % i == 0) {
      prime = false;
    }
  }
  return prime;
}
console.log(isPrime(100));

// min-max zavsar dahi prime

function y(min, max) {
  let array = [];
  let index = 0;
  for (i = min; i < max; i++) {
    if (isPrime(i)) {
      array[index] = i;
      index++;
    }
  }
  return array;
}
let result = y(1, 20);
console.log("result:", result);
