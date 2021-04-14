const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input',($event) => {

    if ($event.target.value.length <= 12 && $event.target.value.length >= 6)
    {
        submitButton.removeAttribute('disabled');
    }
    else
    {
        submitButton.setAttribute('disabled','true');
    }
});