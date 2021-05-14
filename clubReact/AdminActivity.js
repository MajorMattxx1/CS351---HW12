import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"

function ActivityTable(props) {
  let trows = props.events.map(function (e){
    return <tr key={e.name}><td>{e.description}</td><td>{e.name}</td><td>{e.dates}</td></tr>
  });
  return (
    <table className="activityTable">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Date(s)</th>
        </tr>
      </thead>
      <tbody>{trows}</tbody>
    </table>
  );
}

class AdminActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addName: "", addDate: "" };
  }

  nameHandler(event) {
    this.setState({ addName: event.target.value });
  }

  dateHandler(event) {
    this.setState({ addDate: event.target.value });
  }

  addActivity() {
    let act = { name: this.state.addName, dates: this.state.addDate };
    this.props.addActivity(act);
  }

  render() {
    return (
      <main>
        <h1> Activity Management </h1>
        <details>
          <summary> Add Activity </summary>
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
              value={this.state.addDate}
              onChange={this.dateHandler.bind(this)}
            />
            <button onClick={this.addActivity.bind(this)}> Add </button>
          </div>
        </details>
        <h2>Activities</h2>{" "}
        <ActivityTable
          events={this.props.events}
        />
      </main>
    );
  }
}

export default AdminActivity;