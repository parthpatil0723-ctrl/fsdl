function validateForm() {
    // Retrieve input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    // Validate Name
    if (name === "") {
        alert("Name must not be empty");
        return false;
    }

    // Validate Email
    if (email === "") {
        alert("Email must not be empty");
        return false;
    }

    // Validate Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Validate Mobile Number
    // Check if mobile is empty first to avoid confusion, though prompt didn't strictly specify precedence for "empty vs invalid" on mobile, just "not numeric OR not 10 digits"
    // isNaN checks if it is Not-a-Number. 
    // mobile.length !== 10 checks strict length.
    if (isNaN(mobile) || mobile.length !== 10) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}
