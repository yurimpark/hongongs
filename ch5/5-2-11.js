let pi = 3.14;
console.log(`파이 값은 ${pi}입니다.`);

// 즉시 호출 함수를 사용해 변수 이름 충돌 문제를 해결
(function () {
  let pi = 3.141592;
  console.log(`파이 값은 ${pi}입니다.`);
})();
