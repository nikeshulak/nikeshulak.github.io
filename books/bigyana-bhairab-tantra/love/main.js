$(document).ready(function() {

var s = document.getElementById('s');    // your input
var div = document.getElementById('a');  // the div to change
var t = a.textContent || a.innerText;
// var t = div.innerHTML;
s.onkeyup = function() {
   div.innerHTML = this.value
   ? t.replace(new RegExp('('+this.value+')','ig'), '<span class=highlight>$1</span>')
   : t;
};

window.onload = function() {
	// console.log('s', s.value);
   div.innerHTML = s.value
   ? t.replace(new RegExp('('+s.value+')','ig'), '<span class=highlight>$1</span>')
   : t;
};

})

