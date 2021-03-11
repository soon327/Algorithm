'use strict';
//Created by 권순기 on 2021/03/011

/* 문제
김코딩은 최근 인쇄할 일이 많이 생겨 창고에서 안 쓰던 프린터를 꺼냈습니다. 이 프린터의 성능을 테스트하여 새로운 프린터를 장만할지 결정하려고 합니다. 김코딩은 프린터의 인쇄 작업 목록의 크기와 최대 용량을 가정하고 각기 다른 용량의 문서를 차례대로 인쇄하여 모든 문서가 인쇄되는데 최소 몇 초가 걸리는지 테스트하기로 했습니다. 프린터 인쇄 작업 목록의 제한사항은 다음과 같습니다.

제한사항

- 인쇄 작업 목록은 칸으로 이루어져 있습니다.
- 각 칸에는 한 개의 문서만 위치할 수 있습니다.
- 문서는 1초에 한 칸만 이동할 수 있습니다.
- 인쇄 작업 목록의 크기는 bufferSize이고 최대 용량 capacities 만큼 문서를 담을 수 있습니다.
 */

/* 입출력 예시
let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8 */

// -- 나의 풀이 -- //

function queuePrinter(bufferSize, capacities, documents) {
  let bin = [documents[0]];
  documents = documents.slice(1);
  let n = 1; // 1초부터 시작하는 대신 bin에 document[0]을 넣어줌

  while (documents.length > 0) {
    // 문서가 없어지기 전까지 반복하겠다
    //제일먼저, 버퍼사이즈보다 크거나같으면, 맨앞의 bin요소를 shift해준다.
    if (bin.length >= bufferSize) {
      bin.shift();
    }

    //capacity를 초기화하고 다시 계산해준다.
    let capacity = 0;
    for (let j = 0; j < bin.length; j++) {
      // bin 합을 구해서 카파시티스보다 작은지 확인
      capacity += bin[j];
    }

    //documents의 0번째요소를 넣어도 capacities를 초과하지않으면 추가해준다.
    if (capacity + documents[0] <= capacities) {
      bin.push(documents[0]); // bin = [7,]
      documents.shift();

      //capacities를 초과하면 0을 넣어준다.
    } else if (capacity + documents[0] > capacities) {
      // 크면 대기
      bin.push(0); // bin = [7,0] 4
    }

    n++;
  }
  //위의 while문에서 n의 의미는 마지막 documents요소를 넣은 순간까지이므로
  //마지막 documents가 작업완료되기까지의 시간은 buffeSize를 더해줘야한다.
  return n + bufferSize;
}
