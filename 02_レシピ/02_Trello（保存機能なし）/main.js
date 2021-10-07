const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

//　追加ボタンを押したら
addButton.onclick = function() {
  //入力欄の値（テキスト）をとりだして、textにいれる
  const text = inputElement.value

  //　cardaを作成
  const card = document.createElement("div")
  card.className = "card"

  //　todoを作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  //todoをcardの中に追加する
  card.append(todo)

  // cardをcontainerの中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

// 削除ボタンを作成
const deleteButton = document.createElement("div")
deleteButton.className = "delete"

//削除ボタンを押したときの処理を登録
deleteButton.onclick = function() {
  //カードを削除する
  card.remove
}

//削除ボタンをcardの中に追加する
card.append(deleteButton)

card.remove()
