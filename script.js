// ===== 1. 오늘의 한마디 =====
// 문장을 마음대로 추가하거나 바꿔 보세요!
const quotes = [
  "오늘도 한 걸음씩! 💪",
  "실수해도 괜찮아, 그게 배우는 거야 🌱",
  "코딩은 마법이 아니라 연습이야 ✨",
  "작은 시작이 큰 변화를 만든다 🚀",
  "포기하지 않으면 실패한 게 아니야 🔥",
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quote");

quoteBtn.addEventListener("click", function () {
  // 0 ~ (문장 개수-1) 사이의 숫자를 무작위로 뽑기
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});

// ===== 2. 다크 모드 버튼 =====
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // 다크 모드면 해 아이콘, 아니면 달 아이콘
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
