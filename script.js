// Declare variables for reset
var modal = document.getElementById("detailModal");
var title = document.getElementById("detail-title");
var content = document.getElementById("detail-content");
var programLink = document.getElementById("view-link");
var span = document.getElementsByClassName("close")[0];

// Open modal and contents are displayed based on what users click
function openModal(detail) {
    if (detail.innerHTML == "Basic Calculator") {
        title.innerHTML = "Basic Calculator";
        programLink.href = "#";
        content.innerHTML = "This program takes two numbers and performs a basic math operation on them.";
        modal.style.display = "block";
    } else if (detail.innerHTML == "Coin Count Game") {
        title.innerHTML = "Coin Count Game";
        programLink.href = "https://github.com/MrT1997/McDaniel-Coint-Counter.git";
        content.innerHTML = "This game has a user determine how many coins it will take to equal one (1) dollar.";
        modal.style.display = "block";
    } else if (detail.innerHTML == "Factorial Calculator") {
        title.innerHTML = "Factorial Calculator";
        programLink.href = "#";
        content.innerHTML = "This program takes a number and calculates the factorial of it.";
        modal.style.display = "block";
    } else if (detail.innerHTML == "Mortgage Calculator") {
        title.innerHTML = "Mortgage Calculator";
        programLink.href = "#";
        content.innerHTML = "This program calculates the price of a mortgage depending on certain inputs (no amortization is applied here).";
        modal.style.display = "block";
    } else if (detail.innerHTML == "Hangman") {
        title.innerHTML = "Hangman";
        programLink.href = "#";
        content.innerHTML = "This game is a simple Hangman game (I have another version written in Python).";
        modal.style.display = "block";
    }
}

// Close modal
function closeModal() {
    title.innerHTML = "";
    content.innerHTML = "";
    modal.style.display = "none";
}

// Close out of window when you click outside of modal box instead of 'x' button
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}