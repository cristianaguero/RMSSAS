const info = document.getElementById('container-info');
const form = document.getElementById('form');

window.onload = () => {
    form.addEventListener('submit', formValidation);
}

function formValidation(e) {
    e.preventDefault();

    const inputUser = document.getElementById('input-user').value;

    if(inputUser === '') {
        showAlert('What the fuck Morty!? you have to write something!');
        return;
    }
}

function showAlert(message) {

    const alertExist = document.querySelector('.bg-red-100');

    if(!alertExist) {
        const alert = document.createElement('p');
    alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

    alert.innerHTML = `
        <span class='block md:inline'>${message}</span>
    `

    form.appendChild(alert);

    setTimeout( () => {
        alert.remove();
    }, 3000 );
    }

    
}