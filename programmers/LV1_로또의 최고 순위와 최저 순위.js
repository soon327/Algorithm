'use strict';
//Created by 권순기 on 2021/06/27

/*문제링크: https://programmers.co.kr/learn/courses/30/lessons/77484 */

/* 수도코드
  1. 0이면  패스
  2. 0이 아닌 값들이 win_nums에 있는지 확인한다.
  2.1 min은 7으로 시작해서 값들이 있을때마다 1씩 빼준다.
  2.2 max는 0으로 시작해서 값들이 없을때마다 1씩 더해준다.
  3. 값이 7이라면 6을 리턴한다.
*/

/* 고민했던 점
  맞춘 갯수로 접근할 지, 애초부터 등수로 접근할 지 고민했다.
  하나도 못맞춘 경우와 하나만 맞춘 경우 모두 6등이기때문에 최소등수(min)을 7로 두고 7인경우 예외처리를 하는 것으로 접근했다.
 */

function solution(lottos, win_nums) {
  let max = 1,
    min = 7;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) continue;
    if (win_nums.indexOf(lottos[i]) === -1) {
      max++;
    } else {
      min--;
    }
  }

  let result = [max === 7 ? 6 : max, min === 7 ? 6 : min];

  return result;
}
