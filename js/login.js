document.getElementById('btn-submit').addEventListener('click', function(){
    // get the email from the input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // get the password from the input field
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email == 'sakib@gmail.com' && password == '1234'){
        window.location.href = 'bank.html'
    }
    else{
       alert('Not found');
    }
})
    
    