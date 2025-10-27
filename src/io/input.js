import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/messages.js';

async function readCarNames() {
  const input = await Console.readLineAsync(PROMPTS.CAR_NAMES);
  return input.split(',').map((name) => name.trim());
}

async function readTryCount() {
  const input = await Console.readLineAsync(PROMPTS.TRY_COUNT);
  return input.trim();
}

export { readCarNames, readTryCount };
