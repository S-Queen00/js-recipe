const person = document.getElementById("person")

//let age = 26
let isWorking = true //仕事をしていて
let isInSpace = false //宇宙にいなくて
//let isBearedShaved = false //ひげをそっていない

// eslint-disable-next-line no-irregular-whitespace
//状態に応じた絵文字を表示する関数　draw

const draw = function() {
  if (isWorking) {
    person.textContent = "△"
  } else {
    person.textContent = "×"
  }

  if (isInSpace) {
    person.textContent += "○○"
  } else {
    person.textContent += "○×"
  }
}
//draw() //Working and Earth

//ワンクリックで仕事を終了すると宇宙にいけるボタンを用意するよ
const quitWorkingButton = document.getElementById("quit-working-buttton")
const lanuchButton = document.getElementById("launch-button")

//退勤ボタン
quitWorkingButton.onclick = function() {
  isWorking = false
  draw()
}

//打ち上げボタン
lanuchButton.onclick = function() {
  isInSpace = true
  draw()
}
