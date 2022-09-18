const input = document.getElementById('validation-input');
const inputLength = input.getAttribute('data-length')

input.addEventListener('input', onInput);

function onInput(event) {

    if (input.value.length === Number(inputLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    };
    if (input.value.length === 0) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    };
    if (input.value.length !== Number(inputLength) && input.value.length !== 0) {
        input.classList.add('invalid')
    };
};

