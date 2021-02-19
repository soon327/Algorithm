'use strict';

//Created by 권순기 on 2021/02/19
/* 
문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

 */

//내가 푼 방법

/*  1. while문으로 newArr의 길이가 0일때까지 반복한다.
 2 while문안에 for문을 사용해서 progresses값에 sppeds값을 더해준다.
 2.1 newArr[i] = newArr[i] + speeds[i];
 3 for문으로 newArr[i]가 100이상인지 확인한다.
 3.1 newArr[i]와 newArr[i+1]이 모두 100이상이면 count++
 3.2 아니면 break;
 4 count를 ansewr에 push해주고 newArr.slice(count)로 잘라준다. */

function solution(progresses, speeds) {
  var answer = [];
  let newArr = progresses.slice();
  let newSpeeds = speeds.slice();

  while (newArr.length > 0) {
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i] + newSpeeds[i];
    }

    let count = 0;

    //? 3항연산자에서 break;가 안써져서 i = newArr.length로 반복문을 종료시켰다.
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] >= 100 ? (count = count + 1) : (i = newArr.length);
    }

    if (count !== 0) {
      answer.push(count);
      newArr = newArr.slice(count);
      newSpeeds = newSpeeds.slice(count);
    }
  }

  return answer;
}

//다른사람이 푼 방법 해석
function solution(progresses, speeds) {
  let answer = [0];
  //celi을 사용해서 걸리는 시간을 먼저 구해준다. 3.4일이면 4일이된다.
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index])); //[3,1,2,5,3,4,1]
  let maxDay = days[0]; //3

  //i와j를 같이 선언하였다. i는1씩 증가하지만, j는 따로 body에서 변화를 주지 않으면 0으로 고정된다.
  for (let i = 0, j = 0; i < days.length; i++) {
    //걸리는 시간이 maxDay보다 길때까지 answer[0]에 1을 더해준다.
    if (days[i] <= maxDay) {
      answer[j] += 1;
      //걸리는 시간이 더 긴 개발을 만나면, 그 시간을 maxDay에 할당하고, answer[1]에 1을 할당한다. 왜 1이냐면, maxDay에 할당된 answer[i]가 기준이되고 반복문이 answer[i+1]로 넘어가므로 자신의 몫을 줘야하기 때문.
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
