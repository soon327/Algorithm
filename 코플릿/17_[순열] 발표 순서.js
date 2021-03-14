'use strict';
//Created by 권순기 on 2021/03/14

/* 문제설명
말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.

선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.

김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤, 선생님께서 숫자를 말하면 그 순서에 맞는 경우의 수를 말해야 하고, 발표 순서를 말하면 이 발표순서가 몇번째 경우의 수인지를 대답해야 합니다.

총 학생의 수 N과 선생님이 말하는 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.

모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.
ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] */

/* 입출력 예시
let output = orderOfPresentation(3, 3);
console.log(output); // [2,3,1]

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3 */

function orderOfPresentation(n, k) {
  // TODO: 여기에 코드를 작성합니다.
  //1. 경우의수배열을 만들어서 모든경우의수 배열에 넣어준다.
  //2.1 맨앞 요소를 박고, 나머지는 재귀돌려서 경우의수배열에 넣어준다.
  //2.2 끝까지 다 넣으면 모든경우의수배열에 push한다.
  //2.3 위를 재귀로 반복
  let group = [];
  for (let i = 1; i <= n; i++) {
    group.push(i);
  }

  let listAll = [];
  let list;

  const recur = (arr, list = []) => {
    if (arr.length === 0) {
      listAll.push(list);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let newArr = arr.slice();
        let cur = newArr.splice(i, 1);
        let temp = newArr.slice();
        recur(temp, list.concat(cur));
      }
    }
  };

  recur(group);

  if (typeof k === 'number') {
    return listAll[k];
  } else {
    for (let i = 0; i < listAll.length; i++) {
      if (`${k}` === `${listAll[i]}`) return i;
    }
  }
}
