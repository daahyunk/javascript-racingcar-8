export const PROMPTS = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
};

export const ERROR_MESSAGES = {
  EMPTY_NAME: '[ERROR] 자동차 이름을 입력해야 합니다.',
  BLANK_NAME: '[ERROR] 자동차 이름은 공백일 수 없습니다.',
  LONG_NAME: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  DUPLICATE_NAME: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  INVALID_TRY_COUNT_EMPTY: '[ERROR] 시도 횟수를 입력해야 합니다.',
  INVALID_TRY_COUNT_NAN: '[ERROR] 시도 횟수는 숫자여야 합니다.',
  INVALID_TRY_COUNT_RANGE: '[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.',
};
