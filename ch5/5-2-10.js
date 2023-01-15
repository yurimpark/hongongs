let pi = 3.14;
console.log(`파이 값은 ${pi}입니다.`);

// 블록을 사용한 스코프 생성
{
  let pi = 3.14;
  console.log(`파이 값은 ${pi}입니다.`);
}

console.log(`파이 값은 ${pi}입니다.`);

// 함수 블록을 사용한 스코프 생성
function sample() {
  let pi = 3.141592;
  console.log(`파이 값은 ${pi}입니다.`);
}

// 블록 스코프와 함수 블록 스코프는 서로 다른 블록세 속하므로 변수 이름 충돌이 발생하지 않는다.

sample();
console.log(`파이 값은 ${pi}입니다.`);
