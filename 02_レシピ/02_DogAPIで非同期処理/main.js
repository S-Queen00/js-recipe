const imageElement = document.getElementById("dog-image")

fetch("https://dog.ceo/api/breeds/image/random") // まず fetch でデータの取得をしにいき、
  .then((res) => {
    // fetch がおわったら１つめの then の中の関数を実行し、
    return res.json()
  })
  .then((data) => {
    // １つめが終わったら２つめの then の中の関数を実行します。
    imageElement.src = data.message
  })
