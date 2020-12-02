// #1
//   #1 O(1)
//   #2 O(n)

// #2
// O(1)
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// #3
// O(n^a)

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        //n times
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            //a times
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// #4
// O(n)
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// #5
// O(n)

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// #6
// O(n^2)

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}

// #7
// 0(n)
// Compute a fibonacci sequence
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        } else if (i === 2) {
            result.push(1);
        } else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// #8
// O(n - 1)

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        } else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return -1;
}

// #9
// O(1)

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// #10
// O(n)
// If a number is prime or not

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isWhat(7));
