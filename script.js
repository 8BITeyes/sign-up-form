const create = document.querySelector('#submitbutton');

create.addEventListener('click', () => {
    let pass = document.querySelector('#pass').value;
    let passConfirm = document.querySelector('#pass2').value;

    if (passConfirm !== pass) {
        alert('Password fields must match.');
    }
});