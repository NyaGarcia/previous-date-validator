import { setErrorMessage, validator } from './validator';

// TODO: Add specs
describe('fonk-previous-date-validator specs', () => {
  describe('Date option boundaries', () => {
    it('should throw an error when it feeds value equals undefined', () => {
      // Arrange
      const value = void 0;
      const validate = value => validator({ value });
      // Assert
      expect(() => validate(value)).toThrow(TypeError);
      expect(() => validate(value)).toThrowError(
        'Value must be a valid Date object'
      );
    });

    it('should throw an error when it feeds value equals null', () => {
      // Arrange
      const value = null;
      const validate = value => validator({ value });
      // Assert
      expect(() => validate(value)).toThrow(TypeError);
      expect(() => validate(value)).toThrowError(
        'Value must be a valid Date object'
      );
    });

    it('should throw an error when it feeds value equals empty string', () => {
      // Arrange
      const value = '';
      const validate = value => validator({ value });
      // Assert
      expect(() => validate(value)).toThrow(TypeError);
      expect(() => validate(value)).toThrowError(
        'Value must be a valid Date object'
      );
    });
  });

  it('should return succeeded validation when value equals Date.now()', () => {
    // Arrange
    const value = Date.now();

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'PREVIOUS_DATE',
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    // Arrange
    const value = Date.now();
    const message = 'other message';

    // Act
    const result = validator({ value, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'PREVIOUS_DATE',
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    // Arrange
    const value = Date.now();

    setErrorMessage('other message');

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'PREVIOUS_DATE',
    });
  });
});
