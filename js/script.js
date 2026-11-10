function init(){
//add your javascript between these two lines of code

var entryinput = document.getElementById('entryinput');
var entrybutton = document.getElementById('entrybutton');
var textoutput = document.getElementById('textoutput');

entrybutton.addEventListener('click', function() {
  alert('Luke Almagro:' + entryinput.value);
  textoutput.textContent = entryinput.value;
});
}
window.addEventListener('load', init);