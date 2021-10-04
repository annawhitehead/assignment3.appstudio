
function checkPassword() {
               let password1 = prompt("Please enter your new password")
               let password2 = prompt("Please enter your new password again")
  
            if (password1 != password2) {
                    alert ("The passwords are not the same. ")
         
                }

                else{
                    alert("The passwords are the same. ")
                    }}
checkPassword();
