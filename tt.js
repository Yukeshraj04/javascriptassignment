function validateForm() {
    let isValid = true;

    
    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('firstNameError');
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        firstNameError.textContent = "Only characters accepted.";
        isValid = false;
    } else {
        firstNameError.textContent = "";
    }

    
    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('lastNameError');
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.textContent = "Only characters accepted.";
        isValid = false;
    } else {
        lastNameError.textContent = "";
    }

    
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneNumberError = document.getElementById('phoneNumberError');
    if (!/^\d{10}$/.test(phoneNumber)) {
        phoneNumberError.textContent = "Invalid phone number.";
        isValid = false;
    } else {
        phoneNumberError.textContent = "";
    }

 
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address.trim() === "") {
        addressError.textContent = "Address cannot be empty.";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    return isValid;
}
