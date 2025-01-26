document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
});

document.getElementById('sizeSlider').addEventListener('input', function() {
    document.getElementById('text').style.fontSize = this.value + 'px';
});

document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;
    
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter and one number.';
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
