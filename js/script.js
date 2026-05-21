/* Index */
function showMessage() {
    alert("Welcome to My Handicrafts Store!");
}

/* Product */
function buyNow() {
    alert("Thank you, please contact us for more info.");
}

/* Contact */
function validateForm() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let message = document.getElementById("message").value;

    if(name == "" || email == "" || phone == "" || message == "") 
    {

        alert("Please fill in all fields!");

        return false;
    }
    else
    {
    alert("Form submitted successfully!");
    return true;
    }
}