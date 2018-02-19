// Randomly generate numbers[]; no index can have itself as a value
// Loop through numbers.
// Keep track of redirected numbers/indices. In an array?
// If current redirected number already visited, then there's a loop.
// Count number of redirections in that loop and return that value.

// Create random numbers list, the length of the # of pirates.
let  pirates = 0;
while (pirates < 2 || pirates > 5000) {
    pirates = prompt("How many pirates are there (2-5000)?");
}
let redirect = [];
let loop = [];
let redirected = "";
let out = "";

for (x = 0; x < pirates; x++) {
    noSelfRedirect(redirect, pirates);
}
out += "<p>" + pirates + " pirates passing the buck: " + redirect + "<p>";

let currentRedirect = 0;
while (loop.indexOf(currentRedirect) == -1) {
    loop.push(currentRedirect);
    currentRedirect = redirect[currentRedirect];
}
out += "<p>On the trail... " + loop + "<p>";
out += "<p>Oh no! Caught in the loop! " + loop.slice(loop.indexOf(currentRedirect)) + "<p>";
out += "<p>Somebody help me!!</p>";
this.document.getElementById("result").innerHTML = out;

// for (let i = loop.indexOf(currentRedirect); i < loop.length; i++) {
//     console.log(loop[i]);
// }

function noSelfRedirect(arr, max) {
    redirected = Math.floor(Math.random() * (max));
    if (redirected != arr.length && redirected != arr.indexOf(redirected)) {
        arr.push(redirected);
    } else {
      noSelfRedirect(arr, max);
    }
  
}
