const valorA = document.getElementById('valor-A')
const valorB = document.getElementById('valor-B')
const form = document.getElementById('form-saque');
const btn = document.getElementById('btn-sacar');

function saqueAceito(valorA,valorB) {
if (valorA < valorB) {
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const vValorA = valorA.value;
    const vValorB = valorB.value;
    const sucessMens = (`O saque de: <b>${vValorB}</b> foi aceito pois é maior do que o valor que você retém de: <b>${vValorA}<b/>`)

    console.log(sucessMens)


    formEValido = saqueAceito(vValorB.value)
    if(formEValido) {
        const containerMensSucess = document.querySelector('.success-message');
        containerMensSucess.innerHTML = sucessMens;
        containerMensSucess.style.display = 'block';

        vValorA.value = '';
        vValorB.value = '';
    } else {
        valorA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})

valorB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = saqueAceito(e.target.value);

    if (!formEValido) {
        valorB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else{
        valorB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

