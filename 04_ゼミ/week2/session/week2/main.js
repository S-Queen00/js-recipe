//htmlから要素を取得する
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

//①ボタンを押したらテキスト追加
addButton.onclick = function() {
  const text = memoInput.value //memoInputに入力した値をコンソールに表示させる＝textと定義
  console.log(text) //コンソールに入力した値（text）を表示

  //テキストが下に追加される
  const card = document.createElement("div") //divを作る
  card.className = "card" //追加される値をcardとクラス分け
  card.textContent = text //textの内容をcardのtextContentとして表示する
  //card.textContent = inputElement.value

  //②削除ボタンを作る
  const deleteButton = document.createElement("button") //htmlに削除ボタンを作る
  deleteButton.className = "delete" //削除というクラスできる

  deleteButton.textContent = "削除" //ボタンの中に削除というテキストを表示させる

  //削除ボタンを押したときの処理
  deleteButton.onclick = function() {
    //ボタンをクリックすると
    card.remove() //cardを削除
  }

  //jsからhtmlに表示させる
  memoContainer.append(card) //cardという要素をmemoConainerに追加
  card.append(deleteButton) //deleteボタンをcardの中に追加する

  memoInput.value = "" //入力欄を空にする
}
