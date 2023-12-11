const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');

signUpButton.addEventListener("click", ( )=>{
    container.classList.add("active");
});
signInButton.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

function storeInputs() {
    // get user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000)); // Expires in 30 days
    var expires = "expires="+ d.toUTCString();

    // store user data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("expires", expires);

    // display successful message
    alert('Account created successfully. You can now log in.');
}

function getStoredInputs() {
    // get user data from local storage
    var storedName = localStorage.getItem("name");
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");
    var storedExpires = localStorage.getItem("expires");

    // check if user data exists in local storage
    if (storedName && storedEmail && storedPassword && storedExpires) {
        var name = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (name === storedEmail && password === storedPassword) {
            // display successful message
            alert('Welcome back, ' + storedName + '!');
            // redirect to index.html page
            window.location.href = "index.html";
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    } else {
        alert('You need to sign up before you can log in.');
    }
}
