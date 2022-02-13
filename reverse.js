const integers = [1,2,3,4,5,6,7,8,9,0]

const reverseInt = (intArray)=>{
    const result = []
    const startIndex = intArray.length - 1
 
    for(let i = startIndex; i >= 0; i--){
        let element = intArray[i]
        result.push(element)
    }
    return result
}


console.log(reverseInt(integers));


