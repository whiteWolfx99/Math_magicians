import operate from '../components/logic/operate';

describe('testing operation file', () => {
  test('adtion', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });
  test('substraction', () => {
    const result = operate(1, 2, '-');
    expect(result).toBe('-1');
  });
  test('multiplication', () => {
    const result = operate(1, 2, 'x');
    expect(result).toBe('2');
  });
  test('division', () => {
    const result = operate(2, 2, '÷');
    expect(result).toBe('1');
  });
  test('modulus', () => {
    const result = operate(3, 2, '%');
    expect(result).toBe('1');
  });
});
