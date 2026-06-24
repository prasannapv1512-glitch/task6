let username = prompt("Enter your username:");

if (username === "" || username === null) {
    console.warn("Username cannot be empty!");
} else {
    console.log("Login Successful: " + username);
}