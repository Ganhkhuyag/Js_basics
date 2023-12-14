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

function isPrime(num) {
  let prime = true;
  if (num == 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
    }
  }
  return prime;
}
console.log(isPrime(89));

// min,max zavsar dahi prime number

function y(min, max) {
  let array = [];
  index = 0;
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      array[index] = i;
      index++;
    }
  }
  return array;
}
console.log(y(10, 100));

function isPrime(num) {
  let prime = true;
  if (num == 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
    }
  }
  return prime;
}
let resul = isPrime(2);
console.log("result:", resul);

// min,max hoorondoh prime number

function y(min, max) {
  let array = [];
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      array[count] = i;
      count++;
    }
  }
  return array;
}
let result = y(1, 50);
console.log(result);
