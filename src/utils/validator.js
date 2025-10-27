import { ERROR_MESSAGES } from '../constants/messages.js';
import { MAX_TRY_COUNT } from '../constants/config.js';

function validateCarNames(carNames) {
  if (!carNames || carNames.length === 0) {
    throw new Error(ERROR_MESSAGES.EMPTY_NAME);
  }

  if (carNames.some((name) => name.trim() === '')) {
    throw new Error(ERROR_MESSAGES.BLANK_NAME);
  }

  if (carNames.some((name) => name.length > 5)) {
    throw new Error(ERROR_MESSAGES.LONG_NAME);
  }

  const unique = new Set(carNames);
  if (unique.size !== carNames.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
  }
}

function validateTryCount(input) {
  if (!input) {
    throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT_EMPTY);
  }

  const count = Number(input);
  if (Number.isNaN(count)) {
    throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT_NAN);
  }

  if (count < 1) {
    throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT_RANGE);
  }

  if (count > MAX_TRY_COUNT) throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT_TOO_LARGE);

  return count;
}

export { validateCarNames, validateTryCount };
