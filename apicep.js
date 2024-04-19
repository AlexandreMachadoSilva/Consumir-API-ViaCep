//Criando a função para consumir a API ViaCEP
function consultaEndereco(){
    let cep = document.querySelector('#cep').value; //declarar variável para receber o cep digitado no campo da pagina

    // condição para conferir se foram digitados apenas 8 digitos do CEP
    if(cep.length !== 8){
        alert('Cep inválido!');
        return;
    }
    // declara a variavel que recebe a API
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    //Consumindo a API
    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
    });
}
//função para exibir o resultado JSON na página
function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado');
        if(dados.erro){
            resultado.innerHTML = "Endereço não localizado ou CEP inválido!"
        }else{
            resultado.innerHTML = `
                <p><label>Endereço: </label>${dados.logradouro}</p>
                <p><label>Complemento: </label>${dados.complemento}</p>
                <p><label>Bairro: </label>${dados.bairro}</p>
                <p><label>Cidade: </label>${dados.localidade}</p>
                <p><label>Estado: </label>${dados.uf}</p>
            `
        }
}
