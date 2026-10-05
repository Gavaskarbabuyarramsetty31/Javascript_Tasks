function average(){
    num1=parseInt(document.getElementById("b1n1").value)
    num2=parseInt(document.getElementById("b1n2").value)
    num3=parseInt(document.getElementById("b1n3").value)
    sum=num1+num2+num3
    avg=sum/3
    document.getElementById("res1").textContent="Average = "+avg.toFixed(2)
}
function average2(){
    num1=parseInt(document.getElementById("b2n1").value)
    num2=parseInt(document.getElementById("b2n2").value)
    num3=parseInt(document.getElementById("b2n3").value)
    sum=num1+num2+num3
    avg=sum/3
    document.getElementById("res2").textContent="Average = "+avg.toFixed(2)
}
function box3(){
    n1=parseInt(document.getElementById("b3n1").value)
    sum=n1*(n1+1)/2
    document.getElementById("res3").textContent="Sum = "+sum
}
function box4(){
    let n1=parseInt(document.getElementById("b4n1").value)
    sum=n1*(n1+1)/2
    avg=sum/n1
    document.getElementById("res4").textContent="Average = "+avg.toFixed(2)
}
function box5(){
    let n1=parseInt(document.getElementById("b5n1").value)
    let n2=parseInt(document.getElementById("b5n2").value)
    let profit=n2-n1
    document.getElementById("res5").textContent="Profit Percentage = "+((profit/n1)*100).toFixed(2) +" %"
}
function box6(){
    let n1=parseInt(document.getElementById("b6n1").value)
    let n2=parseInt(document.getElementById("b6n2").value)
    let n3=parseInt(document.getElementById("b6n3").value)
    let si=n1*n2*n3/100
    document.getElementById("res6").textContent="Simple Intrest = "+si.toFixed(2)
}
function box7(){
    let n1=parseInt(document.getElementById("b7n1").value)
    let n2 = parseInt(document.getElementById("b7n2").value)
    let sum=n1+n2
    document.getElementById("res7").textContent="Missing Angle = "+(180-sum)
}
function box8(){
    let n1=parseInt(document.getElementById("b8n1").value)
    let ld=n1%10
    document.getElementById("res8").textContent="Last digit = "+ld
}
function box9(){
    let n1=parseInt(document.getElementById("b9n1").value)
    let n2=parseInt(n1/10)
    document.getElementById("res9").textContent="After  = "+n2
}
function box10(){
    let n1=parseInt(document.getElementById("b10n1").value)
    while (n1>10){
        n1=n1/10
    }
    document.getElementById("res10").textContent="First Digit = "+parseInt(n1)
}
function box11(){
    let n1=parseInt(document.getElementById("b11n1").value)
    while (n1>10){
        n1=n1/10
    }
    document.getElementById("res11").textContent="First Digit = "+parseInt(n1)
}

function box12(){
    let n1=parseInt(document.getElementById("b12n1").value)
    let n2=(n1*9/5)+32
    document.getElementById("res12").textContent="Fahrenheit = "+n2+" F"
}
function box13(){
    let n1=parseInt(document.getElementById("b13n1").value)
    let n2=(n1-32)*5/9
    document.getElementById("res13").textContent="Celsius = "+n2+" c"
}
function box14(){
    let n1=parseInt(document.getElementById("b14n1").value)
    let n2=parseInt(document.getElementById("b14n2").value)
    let n3=parseInt(document.getElementById("b14n3").value)
    let g1=n1*(n2/100)
    let g2=n1*(n3/100)
    document.getElementById("res14").textContent="Gross Salary = "+(n1+g1+g2)
}
function box15(){
    let n1 = parseInt(document.getElementById("b15n1").value);
    let n2 = parseInt(document.getElementById("b15n2").value);
    let temp;
    temp=n1;
    n1=n2;
    n2=temp
    document.getElementById("res15").textContent="n1 = "+n1
    document.getElementById("res15.2").textContent="n2 = "+n2
}
function box16(){
    let n1 = parseInt(document.getElementById("b16n1").value);
    let n2 = parseInt(document.getElementById("b16n2").value);
    n1=n1*n2
    n2=n1/n2
    n1=n1/n2
    document.getElementById("res16").textContent="n1 = "+n1
    document.getElementById("res16.2").textContent="n2 = "+n2
}