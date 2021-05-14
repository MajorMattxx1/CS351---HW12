---
title: Fremont Cheese Sniffers
author: Matthew Stanford
---



Fremont Cheese Sniffers
=======================

![CheeseSniff](images/CheeseSniff.jpg)

Club Activities
---------------

### Types of Cheese to Sniff

-   🧀 Cheddar
-   🧀 Parmesan
-   🧀 Mozzarella

### Advanced Cheeses to sniff

-   😬 Blue Cheese
-   😬 Goat Cheese
-   😬 Bleu Cheese

<table>
        <tr>
            <th>Name</th>
            <th>Date</th>
        </tr>
        <tbody id="tableau"></tbody>         
</table>
            
<script>
    let tbody = document.getElementById("tableau"); 
    events.forEach(function(event) { 
        let tr = document.createElement("tr"); 
        let content = `<td>${event.name}</td><td>${event.dates}</td>`; // You can do this! 
            tr.innerHTML = content; tbody.appendChild(tr); 
        })            
</script>
