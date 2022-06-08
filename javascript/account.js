var userData;

window.onload = function(){
    if (sessionStorage.getItem('userData') != null) {
        userData = sessionStorage.getItem('userData');
        userData = JSON.parse(userData);
        var currentWindow = window.location.pathname;
        if (currentWindow == "/account/personal-details") {
            console.log(userData);
            document.getElementById("accountIdText").textContent = "Account ID: " + userData[0]["Value"];
            document.getElementById("inputUsername").value = userData[5]["Value"];
            document.getElementById("inputEmail").value = userData[10]["Value"];
            document.getElementById("inputFirstName").value = userData[7]["Value"];
            document.getElementById("inputLastName").value = userData[9]["Value"];
            document.getElementById("inputDateOfBirth").value = userData[2]["Value"];
        }
    }
    else {
        window.location.replace("http://www.kacpairgames.com");
    }
}
function editUserDetails() {
    
}
function moveToDeleteAccount() {
    window.location.replace("http://www.kacpairgames.com/account/delete-account");
}