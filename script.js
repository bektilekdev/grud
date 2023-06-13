const ul = document.querySelector('.list')
const btn = document.querySelector('.add')
const input = document.querySelector('.input')
const err = document.querySelector('.err')
const textList =document.querySelector('#test-list')

function addTask (){
    if (input.value.trim() === ''){
        alert(404)
        // err.innerHTML = '404'
        // input.style.border = '3px solid red'
    }else{
        err.innerHTML = ''
        ul.innerHTML += ` <li class="list-group-item w-50 d-flex align-items-center justify-content-between" > 
    <span>
    <input type="checkbox" class="check">${input.value}</span>
    <button class="del-btn btn btn-danger">DELETE</button>
</li>`
        input.value = ''
    }
}



btn.addEventListener('click',(e)=>{
addTask()
})

input.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        addTask()
    }
})


ul.addEventListener('click',(e)=>{
    console.log(e.target)
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains('check')){
        if (e.target.parentNode.classList.contains('line')){
            e.target.parentNode.classList.remove('line')
        }else{
            e.target.parentNode.classList.add('line')
        }
    }
})