'use strict';
//Created by 권순기 on 2021/06/18

/*문제링크: https://programmers.co.kr/learn/courses/30/lessons/42840 */

/* 수도코드
  1. 수포자들이 찍는 방식은 정해져있다.
  2. 정답의 갯수는 알 수 없다. 
  3. 정답의 반복문을 순회하면서 i % 수포자 패턴갯수 로 정답과 일치할때 카운트해준다.
  4. 카운트를 저장한 배열에서 가장 큰 값을 찾는다.
  5. 가장 큰 값과 일치하는 score를 result에 푸쉬해준다. 
*/

/* 고민했던 점
  수도코드의 4,5번을 어떻게할 지 생각하는 데 시간이 걸렸다.
  결국은 반복문을 각각 돌면서 가장 큰값인 max와, max와 일치하는 값들을 찾았다.
  너무 깔끔하게 한번에 찾으려고 고민했던 것 같다.
 */
function solution(answers) {
  let first = [1, 2, 3, 4, 5]; //5
  let second = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    let target = answers[i];
    if (target === first[i % 5]) score[0]++;
    if (target === second[i % 8]) score[1]++;
    if (target === third[i % 10]) score[2]++;
  }

  let max = 0;
  for (let el of score) {
    if (el > max) max = el;
  }
  let result = [];
  for (let j = 0; j < 3; j++) {
    if (max === score[j]) result.push(j + 1);
  }
  return result;
}
