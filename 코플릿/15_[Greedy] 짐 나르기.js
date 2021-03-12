'use strict';
//Created by 권순기 on 2021/03/12

/* 문제설명

김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.

예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.

박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.

짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요. */

/* 입출력 예시
let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

let output = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output); // 4 */

// -- 나의 풀이 -- //
function movingStuff(stuff, limit) {
  stuff.sort((a, b) => a - b);

  let count = 0;
  //최대한 큰무게의 짐이랑 같이 넣어야한다.
  for (let i = stuff.length - 1; i >= 0; i--) {
    if (stuff[0] + stuff[i] <= limit) {
      stuff = stuff.slice(1);
      count += 1;
      i = i - 1; //stuff를 한칸 짤라줬으니까 i도 한칸 줄여줘야한다.
    } else {
      count += 1;
    }
  }
  return count;
}
