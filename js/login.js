document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    // varify email password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';

    }
    else {
        alert('invalid user');
    }
})