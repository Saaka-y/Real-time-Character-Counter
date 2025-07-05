const text = document.getElementById("text-input");
const counter = document.getElementById("char-count");

// 文字が入力されたら文字数表示を変更するイベント
text.addEventListener("input", countChars);

function countChars () {
  let charCount = 0; //初期値
  const maxLength = 50;

  if(text.value.length >= maxLength) {
    counter.style.color = "red"
    charCount = 50;
    text.value = text.value.substring(0, maxLength);
  } else {
    charCount = text.value.length;
  }

  return counter.innerHTML = 
  `<p id="char-count">Character Count: ${charCount}/50</p>`;

}
