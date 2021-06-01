
function checkFirstName() {
    var firstName = $('#firstName').val();
    var reg = /^[a-zA-Z -.]{2,8}$/

    if(reg.test(firstName)) {
        $('#firstNameError').text(' ');
    } else {
        $('#firstNameError').text('First name should be a-z, A-Z, space, - .');
    }
}
$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName() {
    var lastName = $('#lastName').val();
    var reg = /^[a-zA-Z -.]{2,10}$/

    if(reg.test(lastName)) {
        $('#lastNameError').text(' ');
    } else {
        $('#lastNameError').text('Last name should be a-z, A-Z, space, - .');
    }
}
$('#lastName').keyup(function () {
    checkLastName();
});

function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();
    var reg = /^([a-z A-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

    if(reg.test(emailAddress)) {
        $('#emailAddressError').text('')
    } else {
        $('#emailAddressError').text('Email Address is invalid');
    }
}
$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

function checkPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (reg.test(password)) {
        $('#passwordError').text(' ');
    } else {
        $('#passwordError').text('Invalid Password')
    }
}
$('#password').keyup(function () {
    checkPassword();
});

function checkConfirmPassword() {
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();

    if (confirmPassword == password) {
        $('#confirmPasswordError').text(' ');
    } else {
        $('#confirmPasswordError').text('Password is not matched');
    }
}
$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
})


