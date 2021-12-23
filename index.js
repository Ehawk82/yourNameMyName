// URL
const url = "https://google.com";

// pass url to fetch() method
// attach a then() handler
fetch(url)
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    console.log(html); // We will get our converted HTML plain text
  });