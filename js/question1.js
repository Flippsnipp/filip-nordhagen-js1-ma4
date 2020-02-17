/* 
    JavaScript1 - Module Assignment 4 - Question 1
*/
const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    }   else {
        firstNameError.style.display = "block";
    }
}
function checkInputLength(value) {
    // added a trim to the value so that spaces will not count as a value for the 2 characters
    const trimmedValue = value.trim();

    // if the value's length is greater than 2 return true
    if (trimmedValue.length >= 2) {
        return true;
    } else {
        return false;
    }
}