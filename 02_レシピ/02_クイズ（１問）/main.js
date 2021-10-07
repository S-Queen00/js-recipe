const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choive-3")
const feedback = document.getElementById("feedback")

const choose = function(choiceString) {
  if (choiceString === "ゴリアテ") {
    feedback.textContent =
      "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
  } else if (choiceString === "ゼニガメ") {
    feedback.textContent =
      "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
  } else if (choiceString === "ガニメデ") {
    feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
  }
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
