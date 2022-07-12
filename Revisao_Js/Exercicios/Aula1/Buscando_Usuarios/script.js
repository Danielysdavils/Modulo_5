// url para requisicao

const randomUserUrl = "https://randomuser.me/api/";

async function gerarUsuario(url){
  const res = await fetch(randomUserUrl)
  const json = await res.json()
  const imgJson = json.results[0].picture.large
  document.getElementById('userPhoto').src = imgJson;
}
gerarUsuario();

document.getElementById("changeUser").addEventListener("click", gerarUsuario);
