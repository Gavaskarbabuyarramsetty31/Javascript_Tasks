function out(id,msg){
    var e=document.getElementById(id);
    e.innerHTML=msg;
    e.style.display="block";
}
function countOddDigits(){
    var n=Math.abs(parseInt(document.getElementById("num1").value));
    var c=0;
    while(n>0){
        var d=n%10;
        if(d%2!=0) c++;
        n=parseInt(n/10);
    }
    out("result1","Odd digits = "+c);
}
function productToN(){
    var n=parseInt(document.getElementById("num2").value);
    var p=1;
    for(var i=1;i<=n;i++) p=p*i;
    out("result2","Product = "+p);
}
function reverseNumber(){
    var n=Math.abs(parseInt(document.getElementById("num3").value));
    var r=0;
    while(n>0){
        var d=n%10;
        r=r*10+d;
        n=parseInt(n/10);
    }
    out("result3","Reverse = "+r);
}
function evenDigitSum(){
    var n=Math.abs(parseInt(document.getElementById("num4").value));
    var sum=0;
    while(n>0){
        var d=n%10;
        if(d%2==0) sum=sum+d;
        n=parseInt(n/10);
    }
    out("result4","Sum = "+sum);
}
function tableOf(){
    var n=Number(document.getElementById("num5").value);
    var text="";
    for(var i=1;i<=10;i++) text=text+n+" x "+i+" = "+(n*i)+"<br>";
    out("result5",text);
}
function primeCheck(n){
    if(n<2) return false;
    for(var i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}
function countPrimes(){
    var a=parseInt(document.getElementById("start6").value);
    var b=parseInt(document.getElementById("end6").value);
    var count=0;
    for(var n=a;n<=b;n++){
        if(primeCheck(n)) count++;
    }
    out("result6","Prime count = "+count);
}
function armstrong(){
    var original=parseInt(document.getElementById("num7").value);
    var n=original;
    var sum=0;
    var digits=String(original).length;
    while(n>0){
        var d=n%10;
        sum=sum+Math.pow(d,digits);
        n=parseInt(n/10);
    }
    if(sum==original) out("result7",original+" is an Armstrong number.");
    else out("result7",original+" is not an Armstrong number.");
}
function fibonacci(){
    var limit=parseInt(document.getElementById("num8").value);
    var a=0;
    var b=1;
    var text="";
    while(a<=limit){
        text=text+a+" ";
        var next=a+b;
        a=b;
        b=next;
    }
    out("result8",text);
}
