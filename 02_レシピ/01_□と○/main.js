const figure = document.getElementById("figure")

figure.onclick = function() {
  //figureからroundedクラスを削除する
  figure.classList.toggle("rounded")
}
