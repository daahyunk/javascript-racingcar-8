import { MissionUtils } from '@woowacourse/mission-utils';

function printRoundResult(cars) {
  cars.forEach(({ name, position }) => {
    const progress = '-'.repeat(position);
    MissionUtils.Console.print(`${name} : ${progress}`);
  });
  MissionUtils.Console.print('');
}

export default printRoundResult;
