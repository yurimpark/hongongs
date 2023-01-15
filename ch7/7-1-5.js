document.addEventListener("DOMContentLoaded", () => {
  const a = document.querySelector("#a");
  const b = document.querySelector("#b");

  // 입력된 문자열 그대로 삽입
  a.textContent = "<h1>textContent 속성</h1>";

  // 입력된 문자열을 HTML 형식으로 삽입
  b.innerHTML = "<h1>innerHTML 속성</h1>";
});
