function addition(){
    var n1=parseInt(document.getElementById("firstNumber").value);
    var n2=parseInt(document.getElementById("secondNumber").value);

    var sum=n1+n2
    document.getElementById("result").value=sum;
}

function substractio(){
    var n1=parseInt(document.getElementById("firstNumber").value);
    var n2=parseInt(document.getElementById("secondNumber").value);
    
    var sub=n1-n2
    document.getElementById("result").value=sub;
}
function multiplication(){
    var n1=parseInt(document.getElementById("firstNumber").value);
    var n2=parseInt(document.getElementById("secondNumber").value);
    var product=n1*n2
    document.getElementById("result").value=product;
}
function divison(){
    var n1=parseInt(document.getElementById("firstNumber").value);
    var n2=parseInt(document.getElementById("secondNumber").value);
    var div=n1/n2
    document.getElementById("result").value=div;
}