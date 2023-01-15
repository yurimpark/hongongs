document.addEventListener("DOMContentLoaded", () => {
  // 요소를 읽어들입니다.
  const headers = document.querySelectorAll("h1");

  // 텍스트와 스타일을 변경합니다.
  headers.forEach((header) => {
    header.textContent = "HEADERS";
    header.style.color = "white";
    header.style.backgroundColor = "black";
    header.style.padding = "10px";
  });
});
