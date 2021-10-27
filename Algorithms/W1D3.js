const combineSorted = (arr1, arr2) => {
    var combinedArr = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < arr1.length && rightIndex < arr2.length){
        if(arr1[leftIndex] > arr2[rightIndex]){
            combinedArr.push(arr2[rightIndex]);
            rightIndex++;
        }
        else {
            combinedArr.push(arr1[leftIndex]);
            leftIndex++;
        }
    } 
    return combinedArr.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
}

arr1 = [1, 3, 5, 7, 9];
arr2 = [2, 4, 6, 8, 10];
console.log(combineSorted(arr1,arr2));

const mergeSort = arr1 => {
    var midpoint = Math.floor(arr1.length/2);
    var left = arr1.slice(0,midpoint);
    var right = arr1.slice(midpoint);
    if(arr1.length<=1){
        return arr1;
    }
    return combineSorted(mergeSort(left),mergeSort(right));
}

arr3 = [1, 4, 3, 2, 5, 10, 7, 6, 9];
console.log(mergeSort(arr3));