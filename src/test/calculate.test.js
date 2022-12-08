import calculate from '../components/logic/calculate';

describe('testing the calculate file', () => {
  test('adition button', () => {
    const btn = '+';
    const obj = {
      total: 30,
      next: 2,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(btn);
    expect(calculate(obj, btn).total).toBe('32');
    expect(calculate(obj, btn).next).toBe(null);
  });
  test('AC button', () => {
    const btn = 'AC';
    const obj = {
      total: 30,
      next: 2,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(null);
    expect(calculate(obj, btn).total).toBe(null);
    expect(calculate(obj, btn).next).toBe(null);
  });
  test('result button', () => {
    const btn = '=';
    const obj = {
      total: 30,
      next: 2,
      operation: '+',
    };
    expect(calculate(obj, btn).operation).toBe(null);
    expect(calculate(obj, btn).total).toBe('32');
    expect(calculate(obj, btn).next).toBe(null);
  });
  test('substract button', () => {
    const btn = '-';
    const obj = {
      total: 30,
      next: 2,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(btn);
    expect(calculate(obj, btn).total).toBe('28');
    expect(calculate(obj, btn).next).toBe(null);
  });
  test('division button', () => {
    const btn = '÷';
    const obj = {
      total: 30,
      next: 2,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(btn);
    expect(calculate(obj, btn).total).toBe('15');
    expect(calculate(obj, btn).next).toBe(null);
  });
  test('inversion button', () => {
    const btn = '+/-';
    const obj = {
      total: 30,
      next: -2,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(btn);
    expect(calculate(obj, btn).total).toBe(30);
    expect(calculate(obj, btn).next).toBe('2');
  });
  test('multiplication button', () => {
    const btn = 'x';
    const obj = {
      total: 30,
      next: 2,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(btn);
    expect(calculate(obj, btn).total).toBe('60');
    expect(calculate(obj, btn).next).toBe(null);
  });
  test('dot button', () => {
    const btn = '.';
    const obj = {
      total: 30,
      next: null,
      operation: btn,
    };
    expect(calculate(obj, btn).operation).toBe(btn);
    expect(calculate(obj, btn).total).toBe(30);
    expect(calculate(obj, btn).next).toBe('0.');
  });
});
