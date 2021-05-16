import 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js';

const trigger = document.querySelector('[data-js="email-box-trigger"]')
const emailBox = document.querySelector('[data-js="email-box"]')
const bgTrigger = document.querySelector('[data-js="blur-trigger"]')

const open = ()=>{
    bgTrigger.classList.add('email--backDrop')
    document.querySelector('.email--backDrop').style.backdropFilter = "blur(2px)"
    //backdropFilter fallback
    document.querySelector('.email--backDrop').style.background = "rgba(0,0,0,0.3)"
    emailBox.style.display = "block";
    setTimeout(()=>{
        trigger.innerHTML = `<i class="fas fa-angle-down"></i>`
        emailBox.style.opacity= "1";
    },50)
}
const close = ()=>{
    trigger.innerHTML = `<i class="fas fa-envelope"></i>`
    document.querySelector('.email--backDrop').style.backdropFilter = ""
    //backdropFilter fallback
    document.querySelector('.email--backDrop').style.background = ""
    emailBox.style.opacity = "0";
    setTimeout(()=>{
        bgTrigger.classList.remove('email--backDrop')
        emailBox.style.display = "none";
    },500)
}

export const openEmail = ()=>{
    trigger.addEventListener('click', ()=>{
        emailBox.style.display !== "block"? open() : close()
    })
}
export const sendEmail = document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = e.target
    emailjs.sendForm('Gmail', 'FromPortfolio', form , 'user_TV8FyBqlJdT9MLqlMZjuh')
        .then(result => {
            console.log('SUCCESS!', result.status, result.text)
        }), error => {
            console.log('FAILED...', error)
        }
        form.reset();
})