let favNum = 3;
let baseURL = "http://numbersapi.com"

$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    console.log(data);
});


let favNums = [5, 12, 22, 1];
$.getJSON(`${baseURL}/${favNums}?json`).then(data => {
  console.log(data);
});


Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favNum}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  