'use strict';
//Created by 권순기 on 2021/02/24

/* 문제 설명
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

제한사항
현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
입출력 예
priorities	        location	         return
[2, 1, 3, 2]	        2	                1
[1, 1, 9, 1, 1, 1]	    0	                5

입출력 예 설명
예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다. */

/* -- 나의 풀이 -- */
function solution(priorities, location) {
  let count = 0;

  while (true) {
    if (Math.max(...priorities) === priorities[0]) {
      priorities.shift();
      count = count + 1;
      location = location - 1;

      if (location === -1) {
        return count;
      }
    } else {
      priorities.push(priorities[0]);
      priorities.shift();

      if (location === 0) {
        location = location + priorities.length - 1;
      } else {
        location = location - 1;
      }
    }
  }
}

/* -- 다른사람의 풀이 해석 -- */

function solution(priorities, location) {
  //location에 해당하는 우선순위값을 찾기위해서 객체로 만들어줬다.
  //요소하나하나를 객체로 만들었기 때문에 list는 객체를 요소로갖는 배열이 된다.
  //location의 우선순위값 객체는 {my: true, val: 우선순위값}으로 들어가게 된다.
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));

  var count = 0;
  while (true) {
    //cur에는 list의 첫번째요소가 들어가고, list는 첫번째 요소가 제거된다.
    //splice는 mutable method임을 기억하자.
    //변수에는 제거한 값이 할당되고, 원본은 제거된 상태로 변하게 된다.
    var cur = list.splice(0, 1)[0];

    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      //가장 커서 count++한 요소의 my값이 true이면, 즉 처음에 매개변수로 입력된 location의 값이면
      //count를 return해서 몇번재로 프린트됐는지 알 수 있다.
      if (cur.my) return count;
    }
  }
}
