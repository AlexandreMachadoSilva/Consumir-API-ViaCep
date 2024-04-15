function consultaEndereco(){
    let cep = document.querySelector('#cep').value;
    
    if(cep.length !== 8){
        alert('Cep inválido!');
        return;
    }
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
    });
}
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