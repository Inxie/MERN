//This was a coding challenge that a TC graduate received from Wayfair; she was told not to use recursion to solve it which makes it considerably more tricky.


//Given a multidimensional array of words (there can be any number of inner arrays and the arrays can be of any length)

words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"]
];

function combinations(words){
    var array = []
    var i = 0
    var j = 0
    var k = 0
    while(true){
        array.push(words[0][i]+words[1][j]+words[2][k])
        if (i<words[0].length-1){
            i++
        }
        if (j<words[1].length-1){
            j++
        }
        if (k<words[2].length-1){
            k++
        }
        if (i=words.length){
            return array
        }
    }
}

console.log(combinations(words))

// for (i = 0; i < words.length; i++){
//     array.push(words[i])
//     for (j = 0; j< words.length-1; j++){
//         array.push(words[j])
//         for (k = 0; k< words.length-1; k++){
//             array.push(words[k])
//         }
//     }

// function combinations(array, i=0 , results = [], current=[]){
//     if (i === array.length) results.push(current)
//     else array[i].
// }



//return an array of all combinations of the words combined

// combinations = [
//     "quick brown fox",
//     "quick brown dog",
//     "quick red fox",
//     "quick red dog",
//     "quick grey fox",
//     "quick grey dog",
//     "lazy brown fox",
//     "lazy brown dog",
//     "lazy red fox",
//     "lazy red dog",
//     "lazy grey fox",
//     "lazy grey dog"
// ];




//This can be solved either recursively or iteratively.