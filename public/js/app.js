const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne =  document.querySelector('#m1')
const messageTwo = document.querySelector('#m2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = 'Please be patient :) '

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent=data.forecast
                messageTwo.textContent= data.location
            }
        })
    })
}) 