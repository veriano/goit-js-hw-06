const form = document.querySelector('.login-form');
form.setAttribute('autocomplete', 'current-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();


    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    }

    console.log({ email: email.value, password: password.value });
    { email: email.value, password: password.value}.reset();
})