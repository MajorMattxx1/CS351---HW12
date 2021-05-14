import React from 'react';
import ReactDOM from 'react-dom';
import events from "./eventData.json"

import CheeseSniff from "./images/CheeseSniff.jpg";

let rows = events.map(function(u){
  return <tr  key={u.name}><td>{u.name}</td><td>{u.dates}</td></tr>;
});

let eventTable = <table className="myTable">
  <thead><tr><th>Name</th><th>Date</th></tr></thead>
  <tbody>{rows}</tbody>
</table>;

function Activities() {
    return <main>
            <h1>Fremont Cheese Sniffers</h1>
            <img src={CheeseSniff}  />
            <h2> Club Activities</h2>
            <h3>Types of Cheese to Sniff</h3>
                <ul>
                    <li>&#129472 Cheddar</li>
                    <li>&#129472 Parmesan</li>
                    <li>&#129472 Mozzarella</li>
                </ul>
            <h3> Advanced Cheeses to sniff</h3>
                <ul>
                    <li>&#128556 Blue Cheese</li>
                    <li>&#128556 Goat Cheese</li>
                    <li>&#128556 Bleu Cheese</li>
                </ul>

                <section>{eventTable}</section>         
         
            
        </main>;
}

export default Activities;