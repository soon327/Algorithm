'use strict';
//Created by 권순기 on 2021/02/21

/* 문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

입출력예시
입력 [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	
출력 5 */

//수도코드
//의상종류에따라 객체에 할당한다.
//{a:3, b:2, c:4}
//하나만입는경우 3+2+4 = 9
//두개 입는경우 3*2 + 3*4 + 2*4 = 6 + 12 + 8 = 26
//3개입는경우 3*2*4 = 24
//총 59
//근데 이렇게하면 의상종류가 수십개면 계산 답도없다.

//0,0,0인 경우만 빼주자
//{a:[0,a1,a2,a3], b:[0,b1,b2], c:[0,c1,c2,c3,c4]}
//a.length * b.length * c.length -1 요렇게하거나
//0안넣고 (a.length+1) * (b.length+1) * (c.length+1) -1
//4*3*5-1=59

//1. 빈객체 obj만든다.
//2. obj[의상종류]가 undefined이면 obj[의상종류] = ['nothing']
//2.1 undefined가 아니면? obj[의상종류].push(의상이름)
function solution(clothes) {
  let answer = 1;

  let obj = {};

  clothes.forEach((item) => {
    if (obj[item[1]] === undefined) {
      obj[item[1]] = ['nothing', item[0]];
    } else {
      obj[item[1]].push(item[0]);
    }
  }); //이렇게 배열로하지말고, count식으로 숫자만넣어도 될듯

  for (let key in obj) {
    answer = answer * obj[key].length;
  }

  answer = answer - 1;

  return answer;
}
