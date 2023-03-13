function inc() {
    var x=document.getElementById("cont").innerText;
    x++;
    document.getElementById("cont").innerText=x;
}

function dec() {
    var x=document.getElementById("cont").innerHTML;
    if(x!=0)
    {
        x--;
        document.getElementById("cont").innerText=x;
    }
}