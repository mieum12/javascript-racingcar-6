import { ERROR } from "../constants/constants";

// @ts-check
export class InputValidator {
  /**
   *
   * @param {string} input - 사용자 입력 값
   * @throws {Error} - 검증 실패시 에러
   * @description 자동차 이름을 검증하는 함수
   * @returns {void}
   */
  validateCarNamesInput(input) {
    if (input == null || input.includes(" ")) {
      throw new Error(ERROR.BLANK_ERROR);
    }
    if (input.charAt(0) === ",") {
      throw new Error(ERROR.COMMA_START_ERROR);
    }
  }

  /**
   *
   * @param {string} input - 사용자 입력 값
   * @throws {Error} - 검증 실패시 에러
   * @description 레이스 경주 횟수를 검증하는 함수
   * @returns {void}
   */

  validateAttemptCountInput(input) {
    if (isNaN(Number(input))) throw new Error("숫자만 입력 가능합니다");
    if (input.length < 1) throw new Error("시도 횟수는 1 이상으로 입력하세요.");
  }
}
