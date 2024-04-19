const inputButton = document.querySelector('.input-add-task')
inputButton.addEventListener('click', adicionarNovaTarefa)
const inputTask = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
const mylist = []

function adicionarNovaTarefa(){
  if(inputTask.value.length == 0){
    alert('preencha o campo adicionando uma atividade/tarefa')
  } else {
  mylist.push(inputTask.value)
  inputTask.value = ''
  mostrarTarefas ()
  }
}

function mostrarTarefas(){
  novaLi =''
  mylist.forEach((tarefa, index) => {
    novaLi = novaLi +  `
    <li class="task">
      <img src="./img/checked.png" alt="">
      <p>${tarefa}</p>
      <img src="./img/trash.png" alt="" onclick="deletItem(${index})">
    </li>
    `
  })
  listaCompleta.innerHTML = novaLi
}

function deletItem(index){
  mylist.splice(index, 1)
  mostrarTarefas()
}