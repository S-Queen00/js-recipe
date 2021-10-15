//配列 []の中に入れたものを並べられる
//const aisatsu = ["おはよう", "こんにちは", "こんばんは"]
//console.log(aisatsu)

//.push=[]で配列を追加できる
//aisatsu.push = ["おやすみ"]
//console.log(aisatsu)

const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
let memos = ["おはよう", "こんにちは", "こんばんは"]

//console.dir(memoinput);

addButton.onclick = function() {
  const text = memoInput.value
  const card = document.createElement("div")
  card.textContent = text
  memoContainer.append(card)

  memos.push(memoInput.value)

  updateMemoContainer()
}

const updateMemoContainer = function() {
  memoContainer.innerHTML = ""
}

for (let i = 0; i < memos.length; i++) {
  const text = memos[i]
  const div = document.createElement("div")
  div.textContent = text
  memoContainer.append(div)
}
