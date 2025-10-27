import { MissionUtils } from '@woowacourse/mission-utils';
import { RANDOM_MIN, RANDOM_MAX, MOVE_THRESHOLD } from '../constants/config.js';

export function initializeCars(carNames) {
  return carNames.map((name) => ({ name, position: 0 }));
}

export function playRound(cars) {
  return cars.map((car) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
    if (randomNumber >= MOVE_THRESHOLD) {
      return { ...car, position: car.position + 1 };
    }
    return car;
  });
}
