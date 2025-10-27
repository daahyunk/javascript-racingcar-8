import { Console } from '@woowacourse/mission-utils';
import { readCarNames, readTryCount } from './io/input.js';
import { validateCarNames, validateTryCount } from './utils/validator.js';
import { initializeCars, playRound, getWinners } from './core/racingGame.js';
import { printRoundResult, printWinners } from './io/output.js';
import { ERROR_MESSAGES } from './constants/messages.js';

class App {
  async run() {
    try {
      const carNames = await this.getValidatedCarNames();
      const tryCount = await this.getValidatedTryCount();

      let cars = initializeCars(carNames);

      Console.print('\n실행 결과');
      cars = this.runRounds(cars, tryCount);

      this.printFinalWinners(cars);
    } catch (error) {
      this.handleError(error);
    }
  }

  async getValidatedCarNames() {
    const carNames = await readCarNames();
    validateCarNames(carNames);
    return carNames;
  }

  async getValidatedTryCount() {
    const tryCountInput = await readTryCount();
    return validateTryCount(tryCountInput);
  }

  runRounds(cars, tryCount) {
    let updatedCars = cars;
    for (let i = 0; i < tryCount; i += 1) {
      updatedCars = playRound(updatedCars);
      printRoundResult(updatedCars);
    }
    return updatedCars;
  }

  printFinalWinners(cars) {
    const winners = getWinners(cars);
    printWinners(winners);
  }

  handleError(error) {
    const knownMessages = Object.values(ERROR_MESSAGES);
    const isKnownError = knownMessages.includes(error.message);

    if (isKnownError) {
      Console.print(error.message);
    } else {
      Console.print(ERROR_MESSAGES.UNEXPECTED_GAME_ERROR);
    }

    if (process.env.NODE_ENV === 'test') {
      throw error;
    }
  }
}

export default App;
