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