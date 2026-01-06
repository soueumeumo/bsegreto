let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addCarrinho(p){
  carrinho.push(p);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado!");
}

if(document.getElementById("lista")){
  let total = 0;
  carrinho.forEach(p => {
    document.getElementById("lista").innerHTML += `<p>${p.nome} - ${p.preco}</p>`;
    total += parseFloat(p.preco.replace("R$","").replace(".","").replace(",","."));
  });
  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
}
