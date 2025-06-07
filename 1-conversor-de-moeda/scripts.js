// Guarda a informação do valor do botão
const button = document.getElementById("button")
// Guarda a informação do select
const select = document.getElementById("currency-select")

// Função que converte os valores
const converte_valores = () => {
    
    // Pega o valor digitado no input
    const input = document.getElementById("input-real").value
    // Pega a localização do texto
    const realText = document.getElementById("real-text")

    const currencyName = document.getElementById("currency-select").value
    // Substitui o texto localizado pelo valor do input
    realText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }
    ).format(input)

    // Localização do valor estrangeiro
    const dolarText = document.getElementById("estrangeiro-text")

    // Converte o valor do input para dólar
    // e substitui o texto localizado pelo valor convertido
    if (currencyName == "US$ Dólar Americano") {
    dolarText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((input / 5));

    } else if (currencyName == "€ Euro") {
        dolarText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((input / 6));   
    } else {
        dolarText.innerHTML = (input / 581323).toFixed(5)
    }
}
// Troca o nome da moeda de acordo com a seleção do usuário
const change_currency = () => {
    const currencyName = document.getElementById("currency-select").value
    const nomeAtual = document.getElementById("nome-atual")
    const currencyImg = document.getElementById("bandeira")

    if (currencyName === "€ Euro") {
        nomeAtual.innerHTML = "Euro"
        currencyImg.src = "../assets/icon-euro.png"   

    } else if (currencyName === "US$ Dólar Americano"){
        nomeAtual.innerHTML = "Dólar Americano"
        currencyImg.src = "../assets/icon-eua.png"  

    } else{
        nomeAtual.innerHTML = "Bitcoin"
        currencyImg.src = "../assets/icon-bitcoin.png"  
    }
converte_valores() // Chama a função para atualizar o valor convertido
}



// Aguarda o clique do botão para chamar a função
button.addEventListener("click", converte_valores)
// Aguarda uma mudança na caixa de seleção para chamar a função
select.addEventListener("change", change_currency)