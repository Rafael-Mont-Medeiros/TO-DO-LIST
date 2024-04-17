const inputButton = document.querySelector('.input-add-task')
inputButton.addEventListener('click', adicionarNovaTarefa)
const inputTask = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
const mylist = []

function adicionarNovaTarefa(){
  mylist.push(inputTask.value)
  inputTask.value = ''

  mostrarTarefas ()
}

function mostrarTarefas(){
  novaLi =''
  mylist.forEach(tarefa => {
    novaLi = `
    <li class="task">
      <img src="./img/checked.png" alt="">
      <p>${tarefa}</p>
      <img src="./img/trash.png" alt="">
    </li>
    `
  })
  listaCompleta.innerHTML = novaLi
}