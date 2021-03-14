'use strict';
//Created by 권순기 on 2021/03/14

/* 문제설명
자신이 감옥에 간 사이 연인이었던 줄리아를 앤디에게 빼앗겨 화가 난 조지는 브레드, 맷과 함께 앤디 소유의 카지노 지하에 있는 금고를 털기로 합니다. 온갖 트랩을 뚫고 드디어 금고에 진입한 조지와 일행들. 조지는 이와중에 감옥에서 틈틈이 공부한 알고리즘을 이용해 target 금액을 훔칠 수 있는 방법의 경우의 수를 계산하기 시작합니다.

예를 들어 $50 을 훔칠 때 $10, $20, $50 이 있다면 다음과 같이 4 가지 방법으로 $50을 훔칠 수 있습니다.

$50 한 장을 훔친다
$20 두 장, $10 한 장을 훔친다
$20 한 장, $10 세 장을 훔친다
$10 다섯 장을 훔친다
훔치고 싶은 target 금액과 금고에 있는 돈의 종류 type 을 입력받아, 조지가 target 을 훔칠 수 있는 방법의 수를 리턴하세요. */

/* 
입출력 예시
let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output = ocean(100, [10, 20, 50]);
console.log(output); // 10

let output = ocean(30, [5, 6, 7]);
console.log(output); // 4 */

function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  type.sort((a, b) => a - b);
  //[10,20,50]일때, 50은 10*5 / 10*1+20*2 / 10*3+20*1 / 50*1 총 4가지
  //30을만드는건 10원 3개 10원1개 20원1개
  let list = Array(target + 1).fill(0); // 0~target만큼의 요소를갖는 배열
  list[0] = 1; //동전 자신만 쓰는경우를 0에 할당한다.
  for (let i = 0; i < type.length; i++) {
    for (let j = type[i]; j < target + 1; j++) {
      list[j] = list[j] + list[j - type[i]]; //동전의 배수마다 1을 더한다.
    }
  }

  return list[target];
}
