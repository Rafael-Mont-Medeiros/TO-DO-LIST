
function addTarefa(){
  const tarefa = document.querySelector('.input-task')
  const listaCompleta = document.querySelector('.list-task')
  let myList = []

  myList.push(tarefa.value)
}

function mostraTarefas(){
  let novaLi = ''
  
  myList.forEach(tarefa => {
    novaLi = novaLi + `
    <li class="task">
      <img src="./img/checked.png" alt="">
      <p>${tarefa}</p>
      <img src="./img/trash.png" alt="">
    </li>
    `
    
  });
  listaCompleta.innerHTML = novaLi
}
    