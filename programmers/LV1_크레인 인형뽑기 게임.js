'use strict';
//Created by 권순기 on 2021/06/29

/*문제링크: https://programmers.co.kr/learn/courses/30/lessons/64061 */

/* 수도코드
  1. move한 곳에 인형이 없는경우 PASS
  2. 인형이 있는경우
  2.1 꺼낸 인형이 basket배열의 마지막요소와 같다면 마지막요소를 pop해주고 count를 2더해준다.
  2.2 다르다면 basket에 push해준다.
  3. return count  
*/

/* 고민했던 점
  반복문을 2번쓰면 코드가 복잡해보여서 getDoll이라는 함수를 따로만들었다.
 */

function solution(board, moves) {
  const getDoll = (board, column) => {
    let doll;
    for (let i = 0; i <= board.length - 1; i++) {
      if (board[i][column - 1] !== 0) {
        doll = board[i][column - 1];
        board[i][column - 1] = 0;
        return doll;
      }
    }
  };

  let basket = [];
  let count = 0;

  for (let i = 0; i <= moves.length - 1; i++) {
    let doll = getDoll(board, moves[i]);
    if (!doll) continue;
    if (basket[basket.length - 1] === doll) {
      basket.pop();
      count += 2;
    } else {
      basket.push(doll);
    }
  }

  return count;
}
