document.querySelector('form').addEventListener('submit', function(e) {
    let isValid = true;
    const firstName = document.getElementById('first-name').value.trim();
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const description = document.getElementById('description').value.trim();


    if (firstName === ""){
        alert('First name is required');
        isValid = false;
    }
    if (age === ""){
        alert('Age is required');
        isValid = false;
    }
    if (dob === ""){
        alert('Date of birth is required');
        isValid = false;
    }
    if (email === ""){
        alert('Email is required');
        isValid = false;
    }
    if (password === "" && password.length < 8){
        alert('Password is required & of minimum 8 characters');
        isValid = false;
    }
    if (description === ""){
        alert('Description is required');
        isValid = false;
    }

});