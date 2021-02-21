'use strict';
//Created by 권순기 on 2021/02/20

/* 문제설명
현재폴더의 깊이를 리턴하는 문제.
../ = 부모폴더로 이동
./ = 현재폴더 유지
x/ = 해당 자식폴더로 이동

입출력예시
Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder. */

const minOperations = function (logs) {
  //count를 출력하자
  //../이면 count--
  //./이면 continue
  //이외엔 count++
  let result = logs.reduce((acc, cur) => {
    if (cur === '../') {
      return acc === 0 ? acc : acc - 1;
    } else if (cur === './') {
      return acc;
    } else {
      return acc + 1;
    }
  }, 0);

  return result;
};
