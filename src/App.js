// src/App.js
import { MissionUtils } from '@woowacourse/mission-utils';
import readCarNames from './io/input.js';
import validateCarNames from './utils/validator.js';

class App {
  async run() {
    try {
      const carNames = await readCarNames();
      validateCarNames(carNames);
      MissionUtils.Console.print(`입력된 자동차: ${carNames.join(', ')}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);

      if (process.env.NODE_ENV === 'test') {
        throw error;
      }
    }
  }
}

export default App;
