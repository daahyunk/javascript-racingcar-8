import { MissionUtils } from '@woowacourse/mission-utils';

export function printRoundResult(cars) {
  cars.forEach(({ name, position }) => {
    const progress = '-'.repeat(position);
    MissionUtils.Console.print(`${name} : ${progress}`);
  });
  MissionUtils.Console.print('');
}

export function printWinners(winners) {
  const message = `최종 우승자 : ${winners.join(', ')}`;
  MissionUtils.Console.print(message);
}
