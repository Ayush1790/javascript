function inc() {
    let x=document.getElementById("count").innerText;
    x++;
    document.getElementById("count").innerText=x;
}

function dec() {
    let x=document.getElementById("count").innerHTML;
    if(x!=0)
    {
        x--;
        document.getElementById("count").innerText=x;
    }
}