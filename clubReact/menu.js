import React from 'react';

function Menu(props) {
    function isActive(name){
        if(name===props.shown){
            return "active";
        }
        else {
            return "";
        }
    }
    let content = null;
    switch(props.role){
        case "admin":
            content = 
                <ul className= "siteLinks">
                    <li key="home"><a className={isActive("home")} onClick={props.click.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.click.bind(null, "activities")}>Club Activities</a></li>
                    <li key="AdminActivity"><a className={isActive("AdminActivity")} onClick={props.click.bind(null, "AdminActivity")}>Activities Management</a></li>
                    <li>Members</li>
                    <li key="logout"><a onClick={props.click.bind(null, "logout")}>Log Out</a></li>
                </ul>
            break;
        case "user":
            content = 
                <ul className= "siteLinks">
                    <li key="home"><a className={isActive("home")} onClick={props.click.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.click.bind(null, "activities")}>Club Activities</a></li>
                    <li key="logout"><a onClick={props.click.bind(null, "logout")}>Log Out</a></li>
                </ul>
            break;
        default:
            content = 
                <ul className= "siteLinks">
                    <li key="home"><a className={isActive("home")} onClick={props.click.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.click.bind(null, "activities")}>Club Activities</a></li>
                    <li key="login"><a className={isActive("login")} onClick={props.click.bind(null, "login")}>Login</a></li>
                    <li key="membership"><a className={isActive("membership")} onClick={props.click.bind(null, "membership")}>Sign Up</a></li>
                </ul>
    };

    return <nav>{content}</nav>;
}

export default Menu;