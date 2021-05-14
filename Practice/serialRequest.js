const fetch = require("node-fetch");

let site1 = {
  url: "https://cheese.com/",
  options: {method: "HEAD"}
};

let site2 = {
  url: "https://www.yahoo.com/",
  options: {method: "HEAD"}
};

let site3 = {
  url: "https://www.regjeringen.no/en/id4/",
  options: {method: "HEAD"}
};

let start = new Date();
fetch(site1.url, site1.options)
  .then(res => {
    // console.log(`Grotto status: ${JSON.stringify(res)}`);
    let time = (new Date() - start) / 1000;
    console.log(`cheese.com status: ${res.statusText}, time: ${time}`);
    return fetch(site2.url, site2.options);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Yahoo status: ${res.statusText}, time: ${time}`);
    return fetch(site3.url, site3.options);
  })
  .then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Norway status: ${res.statusText}, time: ${time}`);
  });
console.log("Starting requests:");