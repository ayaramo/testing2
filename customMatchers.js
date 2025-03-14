expect.extend({
    toBeMaxOfThree(received, a, b, c) {
      const max = Math.max(a, b, c);
      const pass = received === max;
      return pass
        ? { pass: true, message: () => `Expected ${received} to be max of ${a}, ${b}, and ${c}` }
        : { pass: false, message: () => `Expected ${received} to be ${max}, but got ${received}` };
    },
  
    toBeBetween(received, min, max) {
      const pass = received >= min && received <= max;
      return pass
        ? { pass: true, message: () => `Expected ${received} to be between ${min} and ${max}` }
        : { pass: false, message: () => `Expected ${received} to be between ${min} and ${max}, but got ${received}` };
    },
  
    toBeLargest(received, num1, num2) {
      const max = Math.max(num1, num2);
      const pass = received === max;
      return pass
        ? { pass: true, message: () => `Expected ${received} to be the largest of ${num1} and ${num2}` }
        : { pass: false, message: () => `Expected ${received} to be ${max}, but got ${received}` };
    }
  });
  