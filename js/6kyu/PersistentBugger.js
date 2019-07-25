function persistence(num) {
    
    let strArray = num.toString().split('')
    let counter = 1
    let numArray = strArray.map(eaString => parseInt(eaString))
    let arrayProduct = numArray.reduce((acc, curr) => acc * curr)
    console.log(`num modded is: `, num % 10)
    
    if(num < 10 ){
      counter = 0  
      console.log('less than 10')
    } else if(num % 10 == 0){
      counter = 1
    }
    
    while(arrayProduct.toString().split('').length > 1){
      counter++
      let newStrArray = arrayProduct.toString().split('');
      let newNumArray = newStrArray.map(eaString => parseInt(eaString))
      arrayProduct = newNumArray.reduce((acc,curr) => acc * curr)  
    }
  
    return counter
   
  }