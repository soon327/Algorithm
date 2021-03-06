'use strict';
//Created by 권순기 on 2021/02/22

/* 문제 설명
124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

124 나라에는 자연수만 존재합니다.
124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

10진법	124 나라	10진법	124 나라
1	    1	        6	    14
2	    2       	7   	21
3	    4       	8	    22
4	    11      	9	    24
5	    12      	10  	41
자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요. */

/* --- 수도코드 --- */
//11: 42, 11/3 =3과2
//12: 44, 12/3 =4와 0
//13: 111, 13/3 = 4와 1

//1. n%3 나머지가 1이면 1, 2이면 2, 0이면 4을 answer에 더해준다.
//1.1 일의자리로 가야하므로 answer = 1,2,4붙이는 식 + answer;
// list124 = ['4','1','2']
// answer = list124[n%3] + answer;
//2. 나눠서 1.xx이면 1로 되게. 근데 딱떨어져서 2이면 1이되야한다.
// Math.ceil하고  1빼자
//while(n!==0)으로 반복

function solution(n) {
  let answer = '';

  while (n !== 0) {
    let list124 = ['4', '1', '2'];
    answer = list124[n % 3] + answer;
    n = Math.ceil(n / 3) - 1;
  }

  return answer;
}

/* --- 다른사람 풀이 --- */
function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}
