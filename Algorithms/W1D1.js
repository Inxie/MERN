function bubbleSort(arr) {
    for(var i = 0; i<arr.length; i++){
        for(var j =0; j<arr.length; j++){
            if(arr[j] > arr [j+1]) {
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([7,1,2,5,10,4]));
