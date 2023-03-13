function fun() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    //condition for wrong weight input
    if(weight>1000)
    {
        document.getElementById("msg").innerHTML="Please fill weight correctly."
        return;  
    }
    // condition for negative input
    if(age<0 || weight<0 ){
        document.getElementById("msg").innerHTML="Please fill only positive value.";
    }
    // condition for range 5-7
    if(age>=5 && age<=7){
        if(weight>20){
            document.getElementById("msg").innerHTML="OverWeight.";
        }
        else if(weight<15){
            document.getElementById("msg").innerHTML="UnderWeight.";
        }
        else{
            document.getElementById("msg").style.color="green";
            document.getElementById("msg").innerHTML="You are fit.";
        }
    }
      // condition for range 8-10
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
      // condition for range 11-15
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
      // condition for range 16-20
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
        document.getElementById("msg").innerHTML="Incorrect Input!, Please fill Correctlly"
    }
}

