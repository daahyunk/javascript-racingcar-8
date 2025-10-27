import { initializeCars, playRound, getWinners } from "../src/core/racingGame.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("RacingGame 로직 테스트", () => {
  describe("initializeCars()", () => {
    test("자동차 이름 배열을 받아 초기 위치 0으로 초기화한다", () => {
      // Given
      const names = ["pobi", "woni"];

      // When
      const cars = initializeCars(names);

      // Then
      expect(cars).toEqual([
        { name: "pobi", position: 0 },
        { name: "woni", position: 0 },
      ]);
    });
  });

  describe("playRound()", () => {
    test("4 이상이면 전진, 3 이하이면 멈춤", () => {
      // Given
      const cars = [
        { name: "pobi", position: 0 },
        { name: "woni", position: 0 },
      ];

      jest.spyOn(MissionUtils.Random, "pickNumberInRange")
        .mockReturnValueOnce(4) 
        .mockReturnValueOnce(3); 

      // When
      const updatedCars = playRound(cars);

      // Then
      expect(updatedCars).toEqual([
        { name: "pobi", position: 1 },
        { name: "woni", position: 0 },
      ]);

      MissionUtils.Random.pickNumberInRange.mockRestore();
    });
  });

  describe("getWinners()", () => {
    test("가장 멀리 간 자동차를 우승자로 반환한다", () => {
      // Given
      const cars = [
        { name: "pobi", position: 2 },
        { name: "woni", position: 5 },
        { name: "jun", position: 5 },
      ];

      // When
      const winners = getWinners(cars);

      // Then
      expect(winners).toEqual(["woni", "jun"]);
    });

    test("모든 자동차가 0칸이면 전체가 공동 우승한다", () => {
      // Given
      const cars = [
        { name: "pobi", position: 0 },
        { name: "woni", position: 0 },
      ];

      // When
      const winners = getWinners(cars);

      // Then
      expect(winners).toEqual(["pobi", "woni"]);
    });
  });
});
