document.addEventListener("DOMContentLoaded", () => {
  const rects = document.querySelectorAll(".rect");

  rects.forEach((rect, index) => {
    const width = (index + 1) * 100;
    const src = `http://placekitten.com/${width}/250`;
    // rect.setAttribute("src", src);

    // 메소드 사용 없이 온점 찍고 속성 읽어들이거나 지정 가능
    rect.src = src;
  });
});
