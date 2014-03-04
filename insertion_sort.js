function insertionSort(n){
    for (i=0; i<n.length; i++){
        var temp = n[i+1];
        if (n[i] > n[i+1]){
            j = i;
            while ((n[j] > n[j+1])){
                n[j+1] = n[j];
                n[j] = temp;
                j--;
            }
        }
    }
    return n;
}
 
insertionSort([5,3,7,9,1,10,2132,652,1123,1231]);
