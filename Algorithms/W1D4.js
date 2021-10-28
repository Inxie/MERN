var array1 = [4,5,3,6,2,7,8,9,1]

function partition(arr){
    var pivot = 0
    for(var i=1; i<arr.length; i++){
        if(arr[i]<arr[pivot]){
            let temp = arr[i];
            for (var j=i; j!=pivot; j--) {
                arr[j] = arr[j-1];
            }
            arr[j] = temp;
            pivot++;
        }
    }
    return pivot
}