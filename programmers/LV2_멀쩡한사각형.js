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

//다른사람의 풀이
/* 1. 사각형의 w와 h가 서로소인 경우 잘린 정사각형의 갯수 = w + h - 1 */
/* 2. 사각형에서 서로소 관계의 사각형의 갯수 = 최대공약수 */
/* 3. 잘린 정사각형의 개수는 g * ((w` / g) + (h`/g) - 1) = w`+ h` - g */
/* *서로소 : 두 수 사이의 관계가 1 이외에 공약수가 없는 수 */
function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  return w * h - (w + h - gcd(w, h));
}

//다른사람풀이 2
//기울기를 사용한 풀이
function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}
