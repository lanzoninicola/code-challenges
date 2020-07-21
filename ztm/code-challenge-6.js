/**
    Question 1: Clean the room function: given an input of 
    [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function 
    that organizes these into individual array that is ordered. 
    
    For example answer(ArrayFromAbove) should return: 
    [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
    
    Bonus: Make it so it organizes strings differently from number types. 
    i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

let inputArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, "2", "3", 2, 1, 1, 1, 20, 20].sort((a, b) => a - b);

const finalArray = (array) => {
    const newArr = [];

    //container for nuber or string
    const numbers = array.filter(number => typeof (number) === "number");
    const strings = array.filter(number => typeof (number) === "string");

    //apply the function that put all equals values insede a sub-Array
    sortedNumebers = sortArrays(numbers);
    sortedStrings = sortArrays(strings);

    console.log('finalArray - sortedNumebers', sortedNumebers);
    console.log('finalArray - sortedStrings', sortedStrings);

    //merge both the array
    strings.length > 0 ? (newArr.push(sortedNumebers), newArr.push(sortedStrings)) : newArr = sortedNumebers;

    //return the final result
    return newArr;
}

let inputArrayNumbers = [
    7, 1, 1, 1, 1, 2, 2,
    2, 4, 5, 10, 20, 20,
    391, 392, 591
]

const sortArrays = (array) => {
    let miniBasket = [];
    let mainBasket = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            miniBasket.push(array[i]);
        } else if (miniBasket.includes(array[i])) {
            miniBasket.push(array[i]);
            mainBasket.push(miniBasket);
            miniBasket = [];
        } else mainBasket.push(array[i])
    }
    return mainBasket;
}


console.log(sortArrays(inputArrayNumbers))
// sortArrays(inputArrayNumbers)
// console.log(finalArray(inputArray));