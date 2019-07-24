function sumStrings(a,b) {
    let arrA = a.split("");
    let arrB = b.split("");
    while (arrA[0] === '0') {
      arrA.shift()
    }
    while (arrB[0] === '0') {
      arrB.shift()
    }
    let shortest = arrA
    let longest = arrB
    let result = []
    if (shortest.length > longest.length) {
        shortest = arrB
        longest = arrA
    }
    let counter = 1
    let firstNum = 0;
    shortest.reverse().map(number => {
        number = parseInt(number)
        let addTo = parseInt(longest[longest.length-counter])
        let sum = number + addTo
        if (sum < 10) {
            longest[longest.length-counter] = sum
            counter +=1    
        } else {

          longest[longest.length-counter] = (sum - 10)

            if (longest[longest.length-counter-1] !== 9) {
              longest[longest.length-counter-1] = parseInt(longest[longest.length-counter-1])
              longest[longest.length-counter-1] += 1
              counter += 1
            } else {
            for (i=longest.length-counter-2; i>=0; i--) {
                if (longest[i] === 9) {
                }
            }
            } //else
    firstNum = sum
    }//else
    })

    let stringNum = longest.toString().replace(/,/g, "")
    
    if (firstNum > 10 && longest.length == shortest.length){
        return "1".concat("", stringNum)
    }
    return stringNum
    }