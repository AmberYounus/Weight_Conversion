document.getElementById('output').style.visibility = 'hidden'
document.getElementById('gsInput').addEventListener("input" , function  (e) {
document.getElementById("output").style.visibility = 'visible';
let gs = e.target.value;
document.getElementById("kgOutput").innerHTML =(gs/1000).toFixed(2) //kg
document.getElementById("lbsOutput").innerHTML =(gs*0.0022046).toFixed(2) //pounds
document.getElementById("ozOutput").innerHTML =(gs*0.035274).toFixed(2) //ounces
document.getElementById("stonesOutput").innerHTML =(gs*0.00015747).toFixed(2) //stones
})