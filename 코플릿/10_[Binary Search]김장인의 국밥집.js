'use strict';
//Created by 권순기 on 2021/03/05

/* 문제
장인의 손길로 40년 맛집을 운영하는 김장인의 국밥집은 항상 사람들로 붐빕니다.
이 가게의 특징은 손님이 메뉴를 시킬 수 없고, 김장인이 메뉴판에서 골라서 주는 음식만 먹을 수 있지만 그 맛이 믿을 수 없이 탁월하여 40년을 운영할 수 있었습니다. 근래에 매스컴을 통해 더욱 붐비게 되자, 김장인은 모든 사람이 메뉴를 받는 데 걸리는 시간을 최소로 하여 더 많은 사람들에게 음식을 제공하고 싶은 욕심이 생겼습니다.
가게를 오픈했을 때 음식은 동시에 조리가 되고, 다른 메뉴들보다 조리 시간이 빠른 메뉴가 손님에게 먼저 제공이 되면, 다른 음식들이 조리되는 시간까지 기다리지 않고 바로 해당 메뉴의 다음 음식을 조리합니다.

조건
1. 각 메뉴마다 만드는 시간은 모두 다릅니다.
2. 손님은 정수 n, 음식을 만들어내는 시간이 담긴 배열의 menus가 매개변수로 주어집니다.
3. 손님의 수는 1명 이상 999,999명 이하입니다.
4. 각 음식마다 걸리는 시간은 1분 이상 999,999분 이하입니다.
5. 음식은 1개 이상 9,000개 이하입니다.

손님 한 명에 한 음식만 제공한다고 할 때, 손님 n명이 음식을 전부 받는 데에 걸리는 시간의 최솟값을 return하세요. */

/* 입출력 예시

let n = 10;
let menus = [1, 2, 4, 6];

let output = popularRestaurant(n, menus);
console.log(output); // 6

n = 99;
menus = [20, 3, 9, 55]
console.log(output); // 198 */

// -- 나의 풀이 -- //

//1. 식은 count /1 + count/2 + count/4+ count/6
//    1.1 2.x이면 2로 계산해야하니까 Math.floor()사용
//2. 식의 결과값이 n보다 크거나 같아야한다.

//3.이분탐색으로 count를 찾아라
//    3.1 min = 1
//    3.2 max = menus중 가장 큰값에 n곱한값
//    3.3 mid = Math.floor((min+max)/2);

//4.1. mid를 식에 넣은값이 n보다 작다? mid+1 와 max사이로 검색한다.
//4.2. mid를 식에 넣은값이 n보다크거나 같으면 되는데,,, 그러한 mid중 최소값을 알아야한다.
//4.3 mid를 식에 넣은값이 n보다 크거나같으면 midList에 mid푸쉬하고, min과 mid-1사이를 탐색한다.
//5. midList의 최솟값이 count이다.

function popularRestaurant(n, menus) {
  function findN(number) {
    let sum = 0;
    for (let i = 0; i < menus.length; i++) {
      sum = sum + Math.floor(number / menus[i]);
    }
    return sum;
  }

  let min = 1;
  let max = Math.max(...menus) * n;
  let midList = [];

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (findN(mid) < n) {
      min = mid + 1;
    } else {
      midList.push(mid);
      max = mid - 1;
    }
  }

  let count = midList[midList.length - 1];
  return count;
}
