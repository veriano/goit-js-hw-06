const form = document.querySelector('.login-form');
form.setAttribute('autocomplete', 'current-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

     const {elements: { email, password }} = event.currentTarget;    

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    }

    console.log(event.currentTarget);
    event.currentTarget.reset();
})