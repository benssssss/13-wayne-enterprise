// Regex Pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/

let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker() {
    icon.style.display = "block";
    if (emailId.value.match(mailRegex)) {
        icon.innerHTML = '<i class="fas fa-check-circle"></i';
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #77B6EA';
    }
    else if (emailId.value == "") {
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '';
    }
    else {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.display = 'none';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #E2A0FF';
    }
}