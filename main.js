

const container = document.getElementById("inicio");

container.onmousemove = function(e){
    let x = - e.clientX/50, y = -25 - e.clientY/50;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}

// const name = document.querySelector('#name')
// const email = document.querySelector('#email')
// const phone = document.querySelector('#phone')
// const asunto = document.querySelector('#asunto')
// const message = document.querySelector('#message')
// const contactForm = document.querySelector('#contactForm')

// contactForm.addEventListener('submit', e => {
//     e.preventDefault()
//     console.log( name.value )
//     console.log( email.value )
//     console.log( phone.value )
//     console.log( asunto.value )
//     console.log( message.value )
// })