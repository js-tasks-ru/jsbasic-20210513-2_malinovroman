function factorial(n) {
  let countFactorial = 1;
  while (n) {
    countFactorial *= n--;
  }
  return countFactorial;
}

