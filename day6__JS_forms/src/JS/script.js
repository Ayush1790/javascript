function fun() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    if(weight>300)
    {
        document.getElementById("msg").innerHTML="Please fill weight correctly."
        return;  
    }
    if(age<0 || weight<0 ){
        document.getElementById("msg").innerHTML="Please fill only positive value.";
        return;
    }
    if(age>=5 && age<=7){
        if(weight>20){
            document.getElementById("msg").innerHTML="OverWeight.";
        }
        else if(weight<15){
            document.getElementById("msg").innerHTML="UnderWeight.";
        }
        else{
            document.getElementById("msg").innerHTML="You are fit.";
        }
    }
    else if(age>=8 && age<=10){
        if(weight>25){
            document.getElementById("msg").innerHTML="OverWeight.";
        }
        else if(weight<21){
            document.getElementById("msg").innerHTML="UnderWeight.";
        }
        else{
            document.getElementById("msg").innerHTML="You are fit.";
        }
    }
    else if(age>=11 && age<=15){
        if(weight>30){
            document.getElementById("msg").innerHTML="OverWeight.";
        }
        else if(weight<26){
            document.getElementById("msg").innerHTML="UnderWeight.";
        }
        else{
            document.getElementById("msg").innerHTML="You are fit.";
        }
    }
    else if(age>=16 && age<=20){
        if(weight>40){
            document.getElementById("msg").innerHTML="OverWeight.";
        }
        else if(weight<31){
            document.getElementById("msg").innerHTML="UnderWeight.";
        }
        else{
            document.getElementById("msg").innerHTML="You are fit.";
        }
    }
    else if(age>=5 && age<=20){
        document.getElementById("msg").innerHTML="Please enter only year";
    }
    else if(age<5 && age>20){
        document.getElementById("msg").innerHTML="Please Input the age in the range of 5 to 20.";
    }
    else {
        document.getElementById("msg").innerHTML="Please fill only positive value."
    }
}

