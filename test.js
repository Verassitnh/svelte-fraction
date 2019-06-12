// RETURN THE SUM OF THE SMALLEST TWO NUMBERS IN THE ARRAY

function solution(array) {
    let newArray = [];
    let record = Infinity;
    let secondRecord = Infinity;
    for (let x in array) {
        if (array[x] < 0) return 1;
        else {
            if (array[x] < record) record = array[x];
            else if (array[x] < secondRecord ) secondRecord = array[x];
        }
    }
    
    newArray.push(record);
    newArray.push(secondRecord);
    return newArray[0] + newArray[1];
}

// RETURN THE SMALLEST NUMBER NOT IN THE ARRAY

