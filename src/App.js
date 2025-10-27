import { MissionUtils } from '@woowacourse/mission-utils';
import { readCarNames, readTryCount } from './io/input.js';
import { validateCarNames, validateTryCount } from './utils/validator.js';
import initializeCars from './core/racingGame.js';

class App {
  async run() {
    try {
      const carNames = await readCarNames();
      validateCarNames(carNames);

      const tryCountInput = await readTryCount();
      const tryCount = validateTryCount(tryCountInput);

      MissionUtils.Console.print(`입력된 자동차: ${carNames.join(', ')}`);
      MissionUtils.Console.print(`총 ${tryCount}회 시도합니다.`);

      const cars = initializeCars(carNames);
      MissionUtils.Console.print(`초기 상태: ${JSON.stringify(cars)}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);

      if (process.env.NODE_ENV === 'test') {
        throw error;
      }
    }
  }
}

export default App;
