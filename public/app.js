function validate()
        {
            var uname = document.getElementById("name").value;
            var password = document.getElementById("pwd").value;
            var che = check(password)
            window.alert(uname.length)
            window.alert(typeof(password.length))
            if(uname =="" && password =="")
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