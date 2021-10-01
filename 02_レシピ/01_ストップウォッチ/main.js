const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  //countを更新
  count += 1
  console.log(count) //確認用
  //countを秒単位にして表示
  display.textContent = count / 100
}

// 実行中のタイマーのid
let id = null //null は値なしを意味する

button.onclick = function() {
  if (id === null) {
    //start
    //10msごとにcountUpを実行するように登録
    id = setInterval(countUp, 10) //setInterval 定期的に処理を行う機能
    button.textContent = "stop"
  } else {
    //stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

//setInterval(関数, 間隔) // 間隔の単位は1000分の1秒（＝ ms ）
