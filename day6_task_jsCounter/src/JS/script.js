function inc() {
    var x=document.getElementById("cont").innerText;
    x++;
    if(x>9 && x%10==0)
    {
        alert("You reached "+x);
    }
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