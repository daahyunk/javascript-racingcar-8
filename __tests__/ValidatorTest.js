import { validateCarNames, validateTryCount } from "../src/utils/validator.js";
import { ERROR_MESSAGES } from "../src/constants/messages.js";

describe("자동차 이름 검증 테스트 (validateCarNames)", () => {
  test.each([
    ["pobi,woni,daahyunk", ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH],
    ["pobi,pobi", ERROR_MESSAGES.DUPLICATE_CAR_NAME],
    [",,pobi", ERROR_MESSAGES.EMPTY_CAR_NAME],
  ])("잘못된 입력('%s')이면 에러를 던진다", (input, expectedError) => {
    // Given
    const carNames = input;

    // When & Then
    expect(() => validateCarNames(carNames)).toThrow(expectedError);
  });

  test("정상 입력('pobi,woni,jun')이면 예외를 던지지 않는다", () => {
    // Given
    const input = "pobi,woni,jun";

    // When & Then
    expect(() => validateCarNames(input)).not.toThrow();
  });
});

describe("시도 횟수 검증 테스트 (validateTryCount)", () => {
  test.each([
    ["0", ERROR_MESSAGES.INVALID_TRY_COUNT],
    ["-3", ERROR_MESSAGES.INVALID_TRY_COUNT],
    ["abc", ERROR_MESSAGES.INVALID_TRY_COUNT],
  ])("비정상 입력('%s')이면 에러를 던진다", (input, expectedError) => {
    // Given
    const tryCountInput = input;

    // When & Then
    expect(() => validateTryCount(tryCountInput)).toThrow(expectedError);
  });

  test.each([
    ["1", 1],
    ["5", 5],
  ])("정상 입력('%s')이면 정수 %i를 반환한다", (input, expected) => {
    // Given
    const tryCountInput = input;

    // When
    const result = validateTryCount(tryCountInput);

    // Then
    expect(result).toBe(expected);
  });
});
