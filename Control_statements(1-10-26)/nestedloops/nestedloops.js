function showResult(id,msg){
    var e=document.getElementById(id);
    e.innerHTML=msg;
    e.style.display="block";
}
function prime(n){
    if(n<2) return false;
    for(var i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}
function primePairs(){
    var a=Number(document.getElementById("input1Start").value);
    var b=Number(document.getElementById("input1End").value);
    var count=0;
    for(var i=a;i<=b;i++){
        for(var j=i+1;j<=b;j++){
            if(prime(i) && prime(j)) count++;
        }
    }
    showResult("output1","Prime pairs = "+count);
}
function largestDivisorSum(){
    var a=Number(document.getElementById("input2Start").value);
    var b=Number(document.getElementById("input2End").value);
    var best=a;
    var bestSum=0;
    for(var n=a;n<=b;n++){
        var sum=0;
        for(var d=1;d<n;d++){
            if(n%d==0) sum=sum+d;
        }
        if(sum>bestSum){bestSum=sum;best=n;}
    }
    showResult("output2","Number = "+best+"<br>Sum = "+bestSum);
}
function threeDivisors(){
    var a=Number(document.getElementById("input3Start").value);
    var b=Number(document.getElementById("input3End").value);
    var text="";
    for(var n=a;n<=b;n++){
        var count=0;
        for(var d=1;d<=n;d++){
            if(n%d==0) count++;
        }
        if(count==3) text=text+n+" ";
    }
    showResult("output3",text);
}
function commonFactors(){
    var a=Math.abs(Number(document.getElementById("input4Start").value));
    var b=Math.abs(Number(document.getElementById("input4End").value));
    var gcd=1;
    for(var d=1;d<=a;d++){
        if(a%d==0 && b%d==0) gcd=d;
    }
    showResult("output4","GCD = "+gcd);
}
function primeFactors(){
    var n=Number(document.getElementById("input5Start").value);
    var text="";
    for(var d=2;d<=n;d++){
        while(n%d==0){
            text=text+d+" ";
            n=n/d;
        }
    }
    showResult("output5","Prime factors = "+text);
}
