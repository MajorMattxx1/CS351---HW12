---
title: Fremont Cheese Sniffers
author: Matthew Stanford
---



APPLY NOOOOWWWW
===============

<form>
<label>name </label> 
<input type="text" name="name" id="name" required="required">
</form>

<form>
<label>email</label> 
<input type="email" name="email" id="email" required="required">
</form>

<form>
<label>Password </label> 
<input type="password" name="Password" id="password" minlength="6" maxlength="32" required="required">
</form>
            
<label for="Toughest Cheese">Choose toughest cheese you've sniffed:</label>
<select name="Toughest Cheese" id="toughestCheese"> Toughest Cheese:
    <option value="American Cheese">American Cheese</option>
    <option value="Gouda">Gouda</option>
    <option value="Goat Cheese">Goat Cheese</option>
    <option value="Blue Cheese">Blue Cheese</option>
</select>

<button name= "Sign Up Button" id="signupButton">Sign Up</button>

<section id="ThanksDialog"></section>



<script>
            document.getElementById("signupButton").addEventListener("click", myFunction)
            var btn = document.createElement("BUTTON");
            function myFunction() {
            var para1 = document.createElement("P");
            var para2 = document.createElement("P");
            var nameInput = document.getElementById("name").value;
            var emailInput = document.getElementById("email").value;
            var toughestCheeseInput = document.getElementById("toughestCheese").value;
            para1.innerHTML = "Sign up complete" ;
            document.getElementById("ThanksDialog").appendChild(para1);
            para2.innerHTML = "Name: " + nameInput + ", email: " + emailInput + ", level: " + toughestCheeseInput +".";
            document.getElementById("ThanksDialog").appendChild(para2);
btn.innerHTML = "Close";
document.getElementById("ThanksDialog").appendChild(btn);
btn.addEventListener("click", show);
            document.getElementById("ThanksDialog").classList.add("show");
            document.getElementById("signupButton").removeEventListener("click", myFunction)
            }
        function show(){
            document.getElementById("ThanksDialog").classList.remove("show");
                document.getElementById("ThanksDialog").innerHTML = '';
            document.getElementById("ThanksDialog").classList.add("thanksDialog");
            btn.removeEventListener("click", show);
                document.getElementById("signupButton").addEventListener("click", myFunction)
            }
</script>