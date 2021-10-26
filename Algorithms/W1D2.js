function insertionSort(arr) {
    for (var i=1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            let temp = arr[i];
            for (var j=i; temp < arr[j-1]; j--) {
                arr[j] = arr[j-1];
                }
                arr[j] = temp;
            }
        }
    return arr
}

var arr = [4,12,2,7,1,9,3,-2,5,8]
console.log(insertionSort(arr))