const loginButton = document.getElementById("loginButton");
const steveAccommodationURL = "index1.html"; // Replace with the actual filename

loginButton.addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username && password) {
        alert("Login successful! Redirecting to Steve Accommodation Website...");
        window.location.href = steveAccommodationURL; // Redirect to Steve Accommodation Website
    } else {
        alert("Please enter valid login credentials.");
    }
});