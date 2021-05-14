---
title: Fremont Cheese Sniffers
author: Matthew Stanford
---



Fremont Cheese Sniffers
=======================

<form>
    <label for="username">Username </label> 
    <input type="text" name="username" id="username" required>
</form>

<form>
    <label for="password">Password </label> 
    <input type="password" name="password" id="password" required>
</form>

<button name= "Login Button" id="loginButton">Login</button>

<footer>
© 2021 Fremont Cheese Sniffers
</footer>


<script>
            document.getElementById("loginButton").addEventListener("click", myFunction)
                                                                  
            function myFunction() {
                var para1 = document.createElement("P");
                var para2 = document.createElement("P");
                var usernameInput = document.getElementById("username").value;
                
                para1.innerHTML = "Welcome " + usernameInput;
                document.getElementById("messsage").appendChild(para1);
                
                para2.innerHTML = "This site is under construction";
                document.getElementById("messsage").appendChild(para2);
                
                document.getElementById("messsage").classList.add("loginMessage");
                
                document.getElementById("loginButton").removeEventListener("click", myFunction)
            }
</script>