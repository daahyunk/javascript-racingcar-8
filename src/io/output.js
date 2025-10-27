import { Console } from '@woowacourse/mission-utils';

export function printRoundResult(cars) {
  cars.forEach(({ name, position }) => {
    const progress = '-'.repeat(position);
    Console.print(`${name} : ${progress}`);
  });
  Console.print('');
}

export function printWinners(winners) {
  const message = `최종 우승자 : ${winners.join(', ')}`;
  Console.print(message);
}
