import { MissionUtils } from '@woowacourse/mission-utils';
import PROMPTS from '../constants/messages.js';

async function readCarNames() {
  const input = await MissionUtils.Console.readLineAsync(PROMPTS.CAR_NAMES);
  return input.split(',').map((name) => name.trim());
}

export default readCarNames;
