const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", () => {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (username && email && password) {
        alert("Sign Up successful! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill all fields.");
    }
});