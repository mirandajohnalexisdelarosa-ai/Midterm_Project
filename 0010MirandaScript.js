let cart = 0;


/* ADD TO CART */

function addToCart(productName) {

    cart++;

    document.getElementById("cartCount").
    textContent = cart;

    alert(productName + " was added to your cart!");

}


/* SHOW ALL PRODUCTS */

function showProducts() {

    alert("HEHE YAN LNG MUNA :P");

}


/* SIGN IN VALIDATION */

function signIn() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let message = document.getElementById("loginMessage");


    if (email == "" || password == "") {

        message.innerHTML = "Please complete all fields.";
        message.style.color = "red";

        return false;
    }


    if (!email.includes("@")) {

        message.innerHTML = "Please enter a valid email.";
        message.style.color = "red";

        return false;
    }


    message.innerHTML = "Sign in successful!";
    message.style.color = "green";

    return false;
}


/* SIGN UP VALIDATION */

function signUp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("signupMessage");


    if (name == "" || email == "" || password == "") {

        message.innerHTML = "Please complete all fields.";
        message.style.color = "red";

        return false;
    }


    if (!email.includes("@")) {

        message.innerHTML = "Please enter a valid email.";
        message.style.color = "red";

        return false;
    }


    if (password.length < 6) {

        message.innerHTML = "Password must be at least 6 characters.";
        message.style.color = "red";

        return false;
    }


    message.innerHTML = "Account created successfully!";
    message.style.color = "green";

    return false;
}


/* INQUIRY VALIDATION */

function sendInquiry() {

    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let messageText = document.getElementById("message").value;

    let result = document.getElementById("inquiryMessage");


    if (name == "" || email == "" || messageText == "") {

        result.innerHTML = "Please complete all fields.";
        result.style.color = "red";

        return false;
    }


    if (!email.includes("@")) {

        result.innerHTML = "Please enter a valid email.";
        result.style.color = "red";

        return false;
    }


    result.innerHTML = "Your inquiry has been sent!";
    result.style.color = "green";

    return false;
}