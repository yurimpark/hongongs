// 배열을 선언합니다.
let numbers = [273, 52, 103, 32, 57];

// 배열의 모든 값을 제곱합니다.
numbers = numbers.map(function (value, index, array) {
  return value * value;
});

numbers.forEach(console.log);
