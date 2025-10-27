import { MissionUtils } from '@woowacourse/mission-utils';
import { readCarNames, readTryCount } from './io/input.js';
import { validateCarNames, validateTryCount } from './utils/validator.js';
import { initializeCars, playRound, getWinners } from './core/racingGame.js';
import { printRoundResult, printWinners } from './io/output.js';

class App {
  async run() {
    try {
      const carNames = await readCarNames();
      validateCarNames(carNames);

      const tryCountInput = await readTryCount();
      const tryCount = validateTryCount(tryCountInput);

      let cars = initializeCars(carNames);
      MissionUtils.Console.print('\n실행 결과');

      for (let i = 0; i < tryCount; i += 1) {
        cars = playRound(cars);
        printRoundResult(cars);
      }

      const winners = getWinners(cars);
      printWinners(winners);
    } catch (error) {
      MissionUtils.Console.print(error.message);

      if (process.env.NODE_ENV === 'test') {
        throw error;
      }
    }
  }
}

export default App;
