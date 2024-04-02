// Q1:

console.log("-----------------Q1-----------------");
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(2, 20, 40));

// Q2:
console.log("-----------------Q2-----------------");
function getWords(sentance, character) {
  const wordList = sentance.split(" ");
  const result = [];
  wordList.forEach((word) => {
    if (word.charAt(0).toLowerCase() === character.toLowerCase()) {
      result.push(word);
    }
  });
  return result;
}

const x = getWords("Hi my name is Henry", "h");

console.log(x);

// Q3:
console.log("-----------------Q3-----------------");
function leanArray(arr, numberOfItem) {
  let result = [];
  if (!!arr.length) {
    if (arr.length > numberOfItem) {
      result = arr.slice(0, arr.length - numberOfItem);
    } else {
      return arr;
    }
  }
  return result;
}
console.log(leanArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 90], 3));
console.log(leanArray([1, 2, 3, 4, 23], 3));
console.log(leanArray([1, 2, 3], 3));

// Q4:
console.log("-----------------Q4-----------------");
function largest(str1, str2) {
  return str1.split(" ").length > str2.split(" ").length ? str1 : str2;
}

console.log(
  largest("This is the larger string in this case", "I am another string")
);

// Q5:
console.log("-----------------Q5-----------------");
function checkPropertyAndModify(obj) {
  const modifyObject = { ...obj };
  if (modifyObject.hasOwnProperty("name")) {
    modifyObject.hasName = true;
  } else {
    modifyObject.hasName = false;
  }
  delete modifyObject.name;
  return modifyObject;
}

console.log(checkPropertyAndModify({ name: "aman" }));

// // Q6:
// console.log("-----------------Q6-----------------");
// function trackClickOnParagraphs() {
//   const para = document.getElementById("para");
//   let clickCount = 0;
//   function changeColor(isMultipleOfThree) {
//     isMultipleOfThree
//       ? (para.style.backgroundColor = "red")
//       : (para.style.backgroundColor = "green");
//   }
//   para.addEventListener("click", function () {
//     clickCount++;
//     if (clickCount % 3 === 0) {
//       changeColor(true);
//     } else {
//       changeColor(false);
//     }
//   });
// }

// trackClickOnParagraphs();

// Q7
console.log("-----------------Q7-----------------");
function printNumbers() {
  for (let i = 10; i <= 60; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Both");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Multiple of 3");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Multiple of 5 ");
    } else {
      console.log(i);
    }
  }
}

printNumbers();

//Q8
console.log("-----------------Q8-----------------");
function returnStringArrayWithoutNumberInTheString(arr) {
  const result = [];
  function containsNumbers(str) {
    return /\d/.test(str);
  }
  if (!!arr.length) {
    console.log(arr);
    arr.forEach((item) => {
      if (!containsNumbers(item)) {
        result.push(item);
      }
    });
  }
  return result;
}

console.log(
  returnStringArrayWithoutNumberInTheString([
    " This",
    "is",
    "a3",
    "samp7e",
    "stri9ng",
    "and",
    "another",
    "string",
  ])
);
