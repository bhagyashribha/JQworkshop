$(".error").text("");
$('#first-name-info').removeClass("error");
$('#last-name-info').removeClass("error");
$('#register-email-info').removeClass("error");
$('#contact-no-info').removeClass("error");
$('#register-passwd-info').removeClass("error");
$('#confirm-passwd-info').removeClass("error");

var firstName = $('#first-name').val();
var lastName = $('#last-name').val();
var emailId = $('#register-email-id').val();
var contactNumber = $('#contact-number').val();
var password = $('#register-password').val();
var confirmPassword = $('#confirm-password').val();
var actionString = 'registration';

if (firstName == "") {
    $('#first-name-info').addClass("error");
    $(".error").text("required");
} else if (!pregMatch(firstName)) {
    $('#first-name-info').addClass("error");
    $(".error").text('Alphabets and white space allowed');
} else if (lastName == "") {
    $('#last-name-info').addClass("error");
    $(".error").text("required");

} else if (!pregMatch(lastName)) {
    $('#last-name-info').addClass("error");
    $(".error").text('Alphabets and white space allowed');
} else if (emailId == "") {
    $('#register-email-info').addClass("error");
    $(".error").text("required");
} else if (!validateEmailId(emailId)) {
    $('#register-email-info').addClass("error");
    $(".error").text("Invalid");
} else if (contactNumber == "") {
    $('#contact-no-info').addClass("error");
    $(".error").text("required");
} else if (isNaN(contactNumber) || (contactNumber.indexOf(" ") != -1) || contactNumber.length > 10) {
    $('#contact-no-info').addClass("error");
    $(".error").text("Invalid");
} else if (password == "") {
    $('#register-passwd-info').addClass("error");
    $(".error").text("required");
} else if (confirmPassword == "") {
    $('#confirm-passwd-info').addClass("error");
    $(".error").text("required");
} else if (password != confirmPassword) {
    $('#confirm-passwd-info').addClass("error");
    $(".error").text("Your confirm password does not match.");
}