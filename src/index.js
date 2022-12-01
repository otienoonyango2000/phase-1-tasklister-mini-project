document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTaskListerLite(e.target.new_task_description.value)
    form.reset
  })
})

function buildTaskListerLite(createtask) {
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = createtask
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
  
  

}

function handleDelete(e) {
  e.target.parentNode.remove()
}














