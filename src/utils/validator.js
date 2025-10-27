import { ERROR_MESSAGES } from '../constants/messages.js';

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

export default validateCarNames;
