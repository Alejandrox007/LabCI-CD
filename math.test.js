const { factorial, fibonacci } = require('./math');

describe('Funcion factorial', () => {
  test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial de numero negativo debe ser undefined', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});

describe('Funcion fibonacci', () => {
  test('fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci de 5 debe ser 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci de 7 debe ser 13', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('fibonacci de numero negativo debe ser undefined', () => {
    expect(fibonacci(-1)).toBeUndefined();
  });
});
