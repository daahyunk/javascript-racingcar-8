import { MissionUtils } from "@woowacourse/mission-utils";
import { printRoundResult, printWinners } from "../src/io/output.js";

describe("출력 함수 테스트 (output.js)", () => {
  let printSpy;

  beforeEach(() => {
    printSpy = jest.spyOn(MissionUtils.Console, "print").mockImplementation(() => {});
  });

  afterEach(() => {
    printSpy.mockRestore();
  });

  describe("printRoundResult()", () => {
    test("각 자동차의 이름과 위치가 '-'로 출력된다", () => {
      const cars = [
        { name: "pobi", position: 2 },
        { name: "woni", position: 1 },
      ];

      printRoundResult(cars);

      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : --"));
      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining("woni : -"));
    });
  });

  describe("printWinners()", () => {
    test.each([
      { winners: ["pobi"], expected: "최종 우승자 : pobi" },
      { winners: ["pobi", "woni"], expected: "최종 우승자 : pobi, woni" },
    ])("우승자 %j가 출력된다", ({ winners, expected }) => {
      printWinners(winners);
      expect(printSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
    });
  });
});
