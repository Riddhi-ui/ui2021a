


function add(){
    function add(){
    var inputItem = document.getElementById("item-name").value;
    var inputBox = document.getElementById("box-selection").value;
    alert(inputItem + inputBox);
    document.getElementById(inputBox).innerHTML = inputItem;
    }

function clr(){
    document.getElementById("item-name").innerHTML = " ";
    document.getElementById("box-selection").innerHTML = " ";}
   



function clickonmove(){
var movefrom = document.getElementById('frombox').innerHTML;
var moveto = document.getElementById('tobox').innerHTML;
document.getElementById('frombox').value = moveto;


}

function clickonremove(){
var remove = document.getElementById('removeitem').innerHTML;
var boxselected = document.getElementById('boxnum').value;
var result = numbers(remove + boxselected);
alert(result);


}
function submit(){
var username = document.getElementById('inputuser').value ;
var password = document.getElementById('inputpass').value ;

if(password.indexOf(username) != -1){
    alert('good')
//document.getElementById('listofrules').style.visiblity = "hidden" ;
}
else if(){}



}