var macska1 = document.getElementById('macska');
var macska2 = document.getElementById('macska2');
var macska3 = document.getElementById('macska3');
var macska4 = document.getElementById('macska4');
var macska5 = document.getElementById('macska5');
var macska6 = document.getElementById('macska6');
var macska7 = document.getElementById('macska7');
var macska8 = document.getElementById('macska8');

var iksz = document.querySelector('.klassz');
macska1.onclick = function() {
    macska5.style.display = "block";
    macska6.style.display = "none";
    macska7.style.display = "none";
    macska8.style.display = "none";
    iksz.style.display = "block";

}
macska2.onclick = function() {
    macska5.style.display = "none";
    macska6.style.display = "block";
    macska7.style.display = "none";
    macska8.style.display = "none";
    iksz.style.display = "block";

}
macska3.onclick = function() {
    macska5.style.display = "none";
    macska6.style.display = "none";
    macska7.style.display = "block";
    macska8.style.display = "none";
    iksz.style.display = "block";

}
macska4.onclick = function() {
    macska5.style.display = "none";
    macska6.style.display = "none";
    macska7.style.display = "none";
    macska8.style.display = "block";
    iksz.style.display = "block";
}

iksz.onclick = function() {
    macska5.style.display = "none";
    macska6.style.display = "none";
    macska7.style.display = "none";
    macska8.style.display = "none";
    iksz.style.display = "none";

}