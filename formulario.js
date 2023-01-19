
let data = [];

document.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nomeImput = document.getElementById("nome").value;
    const enderecoImput = document.getElementById("endereco").value;
    const cidadeImput = document.getElementById("cidade").value;
    const cargoImput = document.querySelector("input[name=cargo]:checked").value;
    const areaImput = document.querySelectorAll("[name=area]:checked");
    const miniCurriculoInput = document.getElementById("curriculo").value;

    let areas = [];
    for (let i = 0; i < areaImput.length; i++) {
        areas.push(areaImput[i].value)
    }
    
    if(areaImput.length === 0){
        alert("Ao menos uma área de interesse deve ser selecionada!");
        return;
    }

    const dadosFormulario = {
        nome: nomeImput,
        endereco: enderecoImput,
        cidade: cidadeImput,
        cargo: cargoImput,
        area: areas,
        curriculo: miniCurriculoInput
    };

    data.push(dadosFormulario);
    console.log(data);
})