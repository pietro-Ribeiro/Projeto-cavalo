let cliques = 0

function contarCavalo() {
  cliques = cliques + 1
  document.getElementById("contador").textContent = cliques
if (cliques === 10) {
  document.getElementById("mensagem").textContent = "parabens! iniciante"
}
else if (cliques === 30) {
  document.getElementById("mensagem").textContent = "o cavalo ficou feliz"
}
else if (cliques === 50) {
  document.getElementById("mensagem").textContent = "cuidado pra nao quebrar o telefone! kskk"
}
else if (cliques === 100) {
  document.getElementById("mensagem").textContent = "Desiste, vai ter nada quando chegar nos 200"
}
else if (cliques === 115) {
  document.getElementById("mensagem").textContent = "ou vai? sera que é no 300?"
}
else if (cliques === 130) {
  document.getElementById("mensagem").textContent = ""
}
else if (cliques === 200) {
  document.getElementById("contador").style.color = "green"
  document.getElementById("mensagem").textContent = "agora é verde!"
  document.getElementById("mensagem").style.color = "green"
  document.getElementById("cavalu").style.fontSize = "100px"
}
else if (cliques === 300) {
  document.getElementById("mensagem").textContent = "chega! desisto desse emprego."
  document.getElementById("mensagem").style.color = "red"
}
else if (cliques === 450) {
  document.getElementById("mensagem").textContent = "ola! o sistema de falas foi finalizado!!"
  document.getElementById("mensagem").style.color = "black"
  document.getElementById("contador").style.color = "black"
}
}