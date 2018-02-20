// Randomly generate pirates[]; no index can have itself as a value
// Loop through pirates.
// Keep track of redirected numbers/indices. In an array.
// If current redirected number already visited, then there's a loop.
// Count number of redirections in that loop and return that value.

let  piratesCount = 0;
while (piratesCount < 2 || piratesCount > 5000) {
    piratesCount = prompt("How many pirates are there (2-5000)?");
}
let pirates = [];
let out = "";

// Create random numbers list, the length of the # of pirates.
for (x = 0; x < piratesCount; x++) {
    noSelfRedirect(pirates, piratesCount);
}
out += "<p>" + piratesCount + " pirates passing the buck: " + pirates + "<p>";

let piratesLoop = answer(pirates);
out += "<p>Oh no! Caught in a loop! " + piratesLoop + "<p>";

for (let i = 0; i < piratesLoop.length; i++) {
    console.log(piratesLoop[i]);
    out += "<p>" + piratesLoop[i] + "</p>";
}
out += "<p>Somebody help me!!</p>";

this.document.getElementById("result").innerHTML = out;

function noSelfRedirect(arr, max) {
    let redirected = Math.floor(Math.random() * (max));
    if (redirected != arr.length && redirected != arr.indexOf(redirected)) {
        arr.push(redirected);
    } else {
      noSelfRedirect(arr, max);
    }
}

function answer(numbers) {
    let loop = [];
    let currentRedirect = 0;
    while (loop.indexOf(currentRedirect) == -1) {
        loop.push(currentRedirect);
        currentRedirect = numbers[currentRedirect];
    }
    out += "<p>On the trail... " + loop + "<p>";
    loop = loop.slice(loop.indexOf(currentRedirect));
    return loop;    
}
