function calculate () {
    var p1 = document.getElementById("savingAmount").value;
    var p2 = document.getElementById("numberofYears").value;
    var p3 = document.getElementById("interestValue").value;
    document.getElementById("output1").innerHTML = p1;
    document.getElementById("output2").innerHTML = p2;
    document.getElementById("output3").innerHTML = p3;
    if(p1<=0||p2<=0||p3<=0){
        document.getElementById("output").innerHTML = "Enter the values correctly!!";
    } else{
        ret = p1 + p1*p2*(p3/100);
        document.getElementById("output").innerHTML = "Congrats! Your savings would be : " + ret;
    }
    
}

function reset () {
    document.getElementById("savingAmount").value='';
    document.getElementById("numberofYears").value='';
    document.getElementById("interestValue").value='';
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
}

function trig(e) {
    document.getElementById("ranger").innerHTML=e + "%";
}

document.getElementById("interestValue").addEventListener("change", function(){
    document.getElementById("ranger").innerHTML=document.getElementById("interestValue").value + "%";
})