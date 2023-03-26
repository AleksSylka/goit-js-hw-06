const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    console.dir(evt.currentTarget)
    const { email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        window.alert('Натискай на кнопки, не соромся!');
    } else {
        const dataForm = {
            email: email.value,
            password: password.value,
        };
        console.log(dataForm);
        formEl.reset();
    }; 
};