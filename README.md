# Homework #12 Solution
Matthew Stanford

NetID: gd9687

## Question 1
### 1a.
Made the App class

### 1b.
```javascript

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
```
![1b](/images/1b.jpg)

## Question 2
### 2a.
* Guest should only see main page, sign up, login, and club activities.
* User should see main page, club activities, and logout.
* Admin should see main, club activities, add activities, and logout.

### 2b.
![2b1](/images/2b1.jpg)
![2b2](/images/2b2.jpg)

## Question 3
### 3a.
Added:
```javascript
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
```

and changed return:
```javascript
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
```

### 3b.
Here's an example of one of the added cases:
```javascript
        case "user":
            content = 
                <ul className= "siteLinks">
                    <li key="home"><a className={isActive("home")} onClick={props.click.bind(null, "home")}>Home</a></li>
                    <li key="activities"><a className={isActive("activities")} onClick={props.click.bind(null, "activities")}>Club Activities</a></li>
                    <li key="logout"><a onClick={props.click.bind(null, "logout")}>Log Out</a></li>
                </ul>
```

## Question 4:
### 4a. & 4b.
![4a&b](/images/4a&b.jpg)

### 4c.
![4c](/images/4c.jpg)

### 4d.
This was given
```javascript
  constructor(props) {
    super(props);
    this.state = { addName: "", addDate: "" };
  }
```

### 4e. 
This was also given
```HTML
          <div className="addActivityGrid">
            <label>Name</label>
            <input
              type="text"
              onChange={this.nameHandler.bind(this)}
              value={this.state.addName}
            />
            <label> Date(s) </label>{" "}
            <input
              type="text"
```

### 4f.
```javascript
  nameHandler(event) {
    this.setState({ addName: event.target.value });
  }

  dateHandler(event) {
    this.setState({ addDate: event.target.value });
  }

  addActivity() {
    // We need to create a new object with new sub-array
    let act = { name: this.state.addName, dates: this.state.addDate };
    this.props.addActivity(act);
  }
```

and in index.js:
```javascript
    addActivity(act){
            this.setState({ events: this.state.events.concat(act) });
        }
```