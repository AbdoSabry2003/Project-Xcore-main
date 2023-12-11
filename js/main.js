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

    //   js code to save user data in cookies
    function storeInputs() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var isSeller = document.getElementById('termCon').checked;

        if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

        var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000)); // Expires in 30 days
        var expires = "expires="+ d.toUTCString();

        document.cookie = "name=" + name + ";" + expires + ";path=/";
        document.cookie = "email=" + email + ";" + expires + ";path=/";
        document.cookie = "password=" + password + ";" + expires + ";path=/";
        document.cookie = "isSeller=" + isSeller + ";" + expires + ";path=/";
    }