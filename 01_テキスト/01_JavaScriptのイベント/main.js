// button要素とclickイベント
//const alertMessage = function() {
//  alert("クリックしたね")
//}

//alertMessage() //アラートが表示される

//イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね")
}

//関数を登録
button.onclick = alertMessage

//input要素とinputイベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function(e) {
  console.log(e.key)
}
