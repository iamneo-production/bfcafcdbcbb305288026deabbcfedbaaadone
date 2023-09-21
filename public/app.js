function validate()
        {
            var uname = document.getElementById("name").value;
            var password = document.getElementById("pwd").value;
            var che = check(password)
            if(uname != "admin" || che =="false")
            {
                document.getElementById("ans").innerHTML = "check id or pwd";
            }
            else{
                document.getElementById("ans").innerHTML = "Login Successful";
            }
            
        }
function check(password)
    {
        var exp1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
        if(password.match(exp1))
            return true                
        else
            return false;           
        }