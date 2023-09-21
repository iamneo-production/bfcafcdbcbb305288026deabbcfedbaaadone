function validate()
        {
            var uname = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var che = check(password)
            window.alert(uname)
            window.alert(typeof(password))
            if(uname ==" " || password ==" ")
            document.getElementById("ans").innerHTML = "Enter both username and password";
            if(che == "false")
            {
                document.getElementById("ans").innerHTML = "Invalid username or password";    
            }

            else{
                document.getElementById("ans").innerHTML = "Login Successful";
            }
            
        }
function check(password)
    {

        var exp1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
        if(password.match(exp1))
            return "true"                
        else
            return "false";
    }