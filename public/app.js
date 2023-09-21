function validate()
        {
            var uname = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var che = check(password)
            if(uname.length ==0)
            {
            document.getElementById("ans").innerHTML = "Please enter both username and password.";
            }
            else if(che == "false")
            {
                document.getElementById("ans").innerHTML = "Invalid username or password.";    
            }
            else{
                document.getElementById("ans").innerHTML = "Login Successful.";
            }
        }
function check(password)
    {

        var exp1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
        if(password.match(exp1))
            return "true"                
        else
            return "false";
    }