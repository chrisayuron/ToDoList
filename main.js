let contador=0
let realizadas=0

document.querySelector('#addBtn').addEventListener('click',e=>{
    e.preventDefault()
    añadirTarea()
})

function añadirTarea(){
    contador++
        let tarea=document.getElementById('tarea').value
//     let tareaContainer=document.createElement('div')
//     tareaContainer.id=contador
//     tareaContainer.className='tarea-container'
//     let tareaText=document.createElement('div')
//     tareaText.className='tarea-text'
//     let inputCheck=document.createElement('input')
//     inputCheck.type='checkbox'
//     inputCheck.className='checkbox'
//     let labels=document.createElement('label')
//     labels.innerText=tarea.value
//     // let i=document.createElement('i')
//     // i.classList.add('bi')
//     // i.classList.add('bi-trash3-fill')
//     // i.classList.add('trash')
//     let eliminar=document.createElement('button')
           
//     eliminar.className='btn'
//     eliminar.className+=' eliminar'
// //    let span= document.createElement('span')
// //    let icon= document.createElement('i')
// //    icon.className='bi bi-trash'
   
   
//     eliminar.textContent='DELETE'

//     tareaText.append(inputCheck)
//     tareaText.append(labels)

//     tareaContainer.appendChild(tareaText)
//     tareaContainer.appendChild(eliminar)
    // tareaContainer.append(i)
    // list.appendChild(tareaContainer)
    let list=document.getElementById('list')
list.innerHTML+=`
   <div class="tarea-container" id=${contador}>
<div class="tarea-text">

<label for="">${tarea}</label>
<i onclick='eliminar(this)'class="bi bi-trash3-fill"></i>
</div>`

document.getElementById('tarea').value=''

    actualizar()
//ESTA PARTE DE CODIGO REQUIERE REVISIÓN


}





function actualizar(){
    pendientes=list.querySelectorAll('.tarea-container')
  
    estadoTarea.innerHTML=`<p>Tareas pendientes ${pendientes.length} Tareas Realizadas ${realizadas}</p>`
}

function eliminar(obj){
obj.parentNode.parentNode.remove(obj.parentNode)
realizadas++
actualizar()
}