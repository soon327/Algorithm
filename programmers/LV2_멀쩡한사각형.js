'use strict';
//Created by 권순기 on 2021/02/27

/* 문제 입출력 예시
가로가 8, 세로가 12인 직사각형을 대각선 방향으로 자르면 총 16개 정사각형을 사용할 수 없게 됩니다. 
원래 직사각형에서는 96개의 정사각형을 만들 수 있었으므로, 96 - 16 = 80 을 반환합니다. */

function solution(w, h) {
  let answer = 1;
  let num = 1;

  let min = Math.min(w, h);
  for (let i = min; i > 0; i--) {
    if (w % i === 0 && h % i === 0) {
      num = i;
      break;
    }
  }
  answer = w * h - (w + h - num);
  return answer;
}
