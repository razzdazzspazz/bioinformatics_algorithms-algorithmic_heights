var fofn = [];
for (n = 0; n <=25; n++){
    
    if (n===0||n==1){
        fofn.push(n);
    }
    else{
        a = (fofn[n-1])+(fofn[n-2]);
        fofn.push(a);
    }
}
console.log("The 23rd number in the fibonacci sequence is: " + fofn[23]);
