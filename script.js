document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('calc-form');
  const nomeInput = document.getElementById('nome');
  const nomeError = document.getElementById('nome-error');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); //impedir submissao natural (atualização da pagina)

    //se nao existir valor dentro do input:
    if (!nomeInput.value) {
      nomeError.style.display = 'block';
      return;
    } else {
      nomeError.style.display = 'none';
    }

    let nome = nomeInput.value;
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const imc = peso / (altura * altura);
    const resultadoElement = document.getElementById('resultado');
    const paragrafos = resultadoElement.querySelectorAll('p');

    let categoria;

    if (imc < 18.5) {
      categoria = 'Abaixo do peso';
      resultadoElement.style.backgroundColor = '#ffff00';
      resultadoElement.style.color = '#333';
    } else if (imc < 25) {
      categoria = 'Peso Normal';
      resultadoElement.style.backgroundColor = '#00ff00';
      resultadoElement.style.color = '#333';
    } else if (imc < 30) {
      categoria = 'Sobrepeso';
      resultadoElement.style.backgroundColor = '#ffa500';
      resultadoElement.style.color = '#333';
    } else {
      categoria = 'Obesidade';
      resultadoElement.style.backgroundColor = '#ff0000';
      resultadoElement.style.color = '#fff';
    }

    resultadoElement.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)}</p>
    <p>Você está na categoria ${categoria} </p>`;

    //atualizar a categoria
    document.getElementById('categoria').value = categoria;

    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ': ' + valor);
    }
  });
});
