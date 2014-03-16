// binary search

searchArray = [1, 2, 2, 2, 2, 5, 6, 7, 8, 9, 9, 9, 15, 15, 15, 30, 40, 50, 60];
keys = [2, 9, 15, 50];

var halflength = Math.floor((searchArray.length/2));
console.log(halflength);
console.log(searchArray[halflength]);
answer = [];
finalanswer = [];
for (i = 0; i < keys.length; i++){
    
    if (keys[i] < searchArray[halflength]){
        for (j = 0; j < halflength; j++){
        if (keys[i] == searchArray[j]){
            answer.push(j+1);
        }}
    if (keys[i] > searchArray[halflength]){
        for (j = halflength; j < searchArray.length; j++)
        {if (keys[i] == searchArray[j]){
            answer.push(j+1);
        }}
    }
    if (keys[i] == searchArray[halflength]){
        for (j = halflength; j < searchArray.length; j++)
       { if (keys[i] == searchArray[j]){
            answer.push(j+1);
        }}
    }
    }
    finalanswer.push(answer);
}

console.log(answer);
