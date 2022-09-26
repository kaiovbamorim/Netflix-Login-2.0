let input = document.querySelectorAll('.email-password');
let label = document.querySelectorAll('.label-email-senha');

const handleFocus = ({ target }) => {
    const label = target.previousElementSibling;
    label.classList.add('label-transition');

    target.style.backgroundColor = '#454545';
}

const handleFocusOut = ({ target }) => {

    if (target.value == '') {
        const label = target.previousElementSibling;
        label.classList.remove('label-transition')
    }
    if(BtnPassword.focus == true){
    input[1].type = 'password'
    }
    target.style.backgroundColor = '#272626';
}

input.forEach((input) => input.addEventListener('focus', handleFocus));
input.forEach((input) => input.addEventListener('focusout', handleFocusOut));


let count = 1
document.querySelector('#radio1').checked = true;

setInterval(function () {
    nextImage();
}, 4500);

let div_img = document.querySelectorAll('.slide-img')

function nextImage() {
    count++;
    if (count > div_img.length) {
        count = 1;
    }

    document.querySelector('#radio' + count).checked = true;
}

const btnMobile = document.querySelector('.mobile-menu');

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');

})

const BtnPassword = document.querySelector('.visibilitySvg');

BtnPassword.addEventListener('click', () => {
    if (input[1].type == 'password') {
        input[1].type = 'text';
        BtnPassword.src = './assets/visibility_off.svg'

    } else {
        input[1].type = 'password'
        BtnPassword.src = './assets/visibility.svg'
        
    }
})