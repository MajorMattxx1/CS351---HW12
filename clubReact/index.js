// index.js file
import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"
import Menu from "./menu"; 
import Home from "./home";
import Login from "./login";
import Activities from "./activities";
import Membership from "./membership";
import AdminActivity from "./AdminActivity";

/*
let myName = "Matthew Stanford";
let contents = <section>
    <h1>Hello from React</h1>
   <h2>{myName}</h2>
  </section>;
*/

//let contents = <><Menu /> <Membership /></>;

//ReactDOM.render(contents, document.getElementById("root"));


class App extends React.Component 
{
    constructor(props) 
    {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { role: "admin", show: "home", events: events}; 
        
        this.state.events = events;
    }

    menuClick(item)
    {
        if (item == "logout") 
        {
            this.setState({role: "guest", show: "home"});
        } else
        {
            this.setState({show: item});
        }
    }
    addActivity(act)
    {
            this.setState({ events: this.state.events.concat(act) });
    }

    render() 
    {
        let content = <Home />;
        switch (this.state.show) 
        {
            case "home":
                content = <Home />;
                break;
            case "activities":
                content = <Activities events= {this.state.events} />;
                break;
            case "membership":
                content = <Membership />;
                break;
            case "login":
                content = <Login />;
                break;
            case "AdminActivity":
                content = 
                <AdminActivity 
                events={this.state.events} 
                nonclub={this.state.nonclub} 
                addAct={this.addActivity.bind(this)} 
                />; 
                break;
        }
    
        return (
            <>
                <Menu
                    role={this.state.role}
                    click={this.menuClick.bind(this)}
                    showing={this.state.show}
                />
                {content}
            </>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));