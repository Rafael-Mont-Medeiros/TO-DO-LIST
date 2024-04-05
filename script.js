function add(){
    let atividade = document.querySelector('#atividade').value
    let tarefas = document.querySelector('#listaTarefas')
    if(atividade == 0){
        alert('Adicione alguma atividade no campo')
    }else {
      let paragrafo = document.createElement('p')
      paragrafo.innerText = atividade
      tarefas.appendChild(paragrafo)
    }

}