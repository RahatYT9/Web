function redirectToDownload() {
    const password = document.getElementById("password").value;
    const correctPassword = "66";

    if (password === correctPassword) {
        window.location.href = "download.html";
    } else {
        alert("Incorrect password! Please try again.");
    }
}
