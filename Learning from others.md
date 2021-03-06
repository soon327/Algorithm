# Learning from others

## 단락평가 (Shortcut Circuit)

> from programmers/위장

특정값이 undefined일 때와 그렇지 않을 때에 다른 가공을 거치고 싶을 때, 단락평가를 사용하면 간편하다.

1. OR 연산자

```js
if (obj[arr[1]] === undefined) {
  obj[arr[1]] = 0;
  obj[arr[1]] = obj[arr[1]] + 1;
} else {
  obj[arr[1]] = obj[arr[1]] + 1;
}
```

위의 코드를 논리연산자 OR을 사용하여 단락평가하면 다음과 같다.

`obj[arr[1]] = (obj[arr[1]] || 0) + 1;`

OR연산자 사용시, <br>
첫 피연산자가 false한 값일 때, 다음 연산자 값을 할당한다.<br>
따라서 undefined일 때, default값을 지정해 줄 때 유용하다.

2. AND 연산자

`input = (input && input + ' ') +newArr[i][j][1];`

반면, AND연산자 사용시, <br>
첫 피연산자가 true한 값일 때, 다음 연산자 값을 할당한다.
<br>
따라서 해당값이 이미 어떠한 값을 갖고 있을 때, 사용하면 유용하다.
<br><br>

---

<br>

## 최대공약수 구하기

> from programmers/멀쩡한사각형

**Greatest Common Divisor(GCD) 구하는 식**

1. 단순 반복문

```js
let gcd = 1;
let min = Math.min(w, h);

for (let i = min; i > 0; i--) {
  if (w % i === 0 && h % i === 0) {
    gcd = i;
    break;
  }
}
```

2. 유클리드 호제법

```js
a와b의 최대공약수 / 최소공배수

//손으로 계산할 때는 제수와 피제수의 값 크기를 비교해서 적절하게 배열해야하지만
//수식이나 코드로 나타낼 때는 신경쓰지 않아도 되는데, a<b일 때 a%b === a이므로 gcd(a,b)는 gcd(b,a)를 호출한다.
//즉 재귀 과정에서 자연스럽게 큰 값이 a로, 작은 값이 b로 들어간다.

//아래의 a,b값을 비교하는 과정은 필요없다.
// let minNum = Math.min(a, b);
// let maxNum = Math.max(a, b);

// 최대공약수
function gcd(a,b)
return (a % b) === 0 ? b : gcd(b, a % b);
}

// 최소공배수
function lcm(a,b){
return a * b / gcd(a,b);
}
```

<br>

---
