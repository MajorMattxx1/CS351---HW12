import React from 'react';
import ReactDOM from 'react-dom';


function Membership() {
    return <main className ="gridy">
            <h1>APPLY NOOOOWWWW</h1>
            <form>
                <label>name </label> 
                <input type="text" name="name" id="name" required="required"></input>
            </form>
            <form>
                <label>email</label> 
                <input type="email" name="email" id="email" required="required"></input>
            </form>
            <form>
                <label>Password </label> 
                <input type="password" name="password" id="password" minLength="6" maxLength="32" required="required"></input>
            </form>
            <label htmlFor="Toughest Cheese">Choose toughest cheese you've sniffed:</label>
            <select name="Toughest Cheese" id="toughestCheese"> Toughest Cheese:
                <option value="American Cheese">American Cheese</option>
                <option value="Gouda">Gouda</option>
                <option value="Goat Cheese">Goat Cheese</option>
                <option value="Blue Cheese">Blue Cheese</option>
            </select>
            
            <button name= "Sign Up Button" id="signupButton">Sign Up</button>  
            
            <section id="ThanksDialog"></section>
        </main>;
}

export default Membership;