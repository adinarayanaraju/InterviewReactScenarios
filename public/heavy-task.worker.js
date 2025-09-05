// public/heavy-task.worker.js

self.onmessage = function(e) {
  console.log('Worker: Message received from main script');
  const { command, number } = e.data;

  if (command === 'calculatePrimes') {
    const result = findPrimes(number);
    console.log('Worker: Posting message back to main script');
    self.postMessage(result);
  }
};

// A computationally expensive function
function findPrimes(maxNum) {
  const primes = [];
  for (let i = 2; i <= maxNum; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}
