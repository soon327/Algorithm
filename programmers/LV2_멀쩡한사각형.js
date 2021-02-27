'use strict';
//Created by 권순기 on 2021/02/27

/* 문제 입출력 예시
가로가 8, 세로가 12인 직사각형을 대각선 방향으로 자르면 총 16개 정사각형을 사용할 수 없게 됩니다. 
원래 직사각형에서는 96개의 정사각형을 만들 수 있었으므로, 96 - 16 = 80 을 반환합니다. */

function solution(w, h) {
  //w>h이면 w/h를 ceil한 만큼 한줄당 못쓰게된다. 그러므로 여기에 h를 곱한다.
  //h<w이면 h/w를 ceil한 만큼 한 column당 못쓰게된다. 그러므로 여기에 w를 곱한다.
  let total = w * h;
  let cantUse = 0;
  if (w >= h) {
    cantUse = Math.ceil(w / h) * h;
  } else {
    cantUse = Math.ceil(h / w) * w;
  }
  let result = total - cantUse;
  return result;
}
