const encode = (str) => {
    var newStr = ""
    for (let i=0;i<str.length;i++) { //walker
        var num = 0
        for (let j=0;j<str.length;j++) { //runner
            if (str[i]==str[j]) {
                num++
            }
        }
        if (!newStr.includes(str[i])) {
            newStr+=str[i] + num
        } console.log(newStr)
    }
    return newStr
}

var str = "aaabbbbccdddddeee" //a3b4c2d5e3
console.log(encode(str))