   const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];
// Iterator using the for loop to grab/sequester/fetch/retrieve individual elements in the programmers array:
const forLoopFunction = () => {
  for (let index = 0; index < programmers.length; index++) {
    const element = programmers[index];
    const nameParts = element.split(" ");
    // Print to the screen the first name of each programmer.
    const firstName = nameParts[0];
    console.log(firstName);
    // Print to the screen the last name of each programmer.
    const lastName = nameParts[nameParts.length - 1];
    console.log(lastName);
    // Print to the screen the sum char length of the first name of each programmer.
    const sumCharFirst = firstName.length;
    console.log(sumCharFirst);
    // Print to the screen the sum char length of the last name of each programmer.
    const sumCharLast = lastName.length;
    console.log(sumCharLast);
    // Print to the screen the sum char length of all the programmers.
    const totalAlphaChar = element.replace(" ", "").length;
    console.log("total Alphabetical character", totalAlphaChar);
  }
};
// forLoopFunction();

// Use sort() mutate the programmers array:
// Remember, sort() changes the original array.
const usingSort = () => {
  // Mutate programmers such that it's in alphabetical order of the first name of the programmers, A-Z.
  // console.log(programmers.sort());
  // Mutate programmers such that it's in alphabetical order of the last name of the programmers, A-Z.
  // console.log(
  //   programmers.sort((a, b) => {
  //     const lastNameA = a.split(" ")[a.split(" ").length - 1];
  //     const lastNameB = b.split(" ")[b.split(" ").length - 1];
  //     //ascending
  //     //compare function return 1 if a <b
  //     if (lastNameA > lastNameB) {
  //       return 1;
  //       //compare function return -1 if a >b
  //     } else if (lastNameA < lastNameB) {
  //       return -1;
  //       //compare function return 0 if a ===b
  //     } else if (lastNameA === lastNameB) {
  //       return 0;
  //     }
  //   })
  // );
  // // Mutate programmers such that it's sorted by length of first name characters, shortest to longest.
  // console.log(
  //   programmers.sort((a, b) => {
  //     // const firstNameA = a.split(" ")[0];
  //     // const firstNameB = b.split(" ")[0];
  //     // const firstNameALength = firstNameA.length;
  //     // const firstNameBLength = firstNameB.length;
  //     // if (firstNameALength > firstNameBLength) {
  //     //   return 1;
  //     //   //compare function return -1 if a >b
  //     // } else if (firstNameALength < firstNameBLength) {
  //     //   return -1;
  //     //   //compare function return 0 if a ===b
  //     // } else if (firstNameALength === firstNameBLength) {
  //     //   return 0;
  //     // }
  //     // return firstNameALength - firstNameBLength;
  //     return a.split(" ")[0].length - b.split(" ")[0].length;
  //   })
  // );
  // // Mutate programmers such that it's sorted by length of last name characters, shortest to longest.
  console.log(
    programmers.sort((a, b) => {
      const lastNameA = a.split(" ")[a.split(" ").length - 1];
      const lastNameB = b.split(" ")[b.split(" ").length - 1];
      return lastNameA.length - lastNameB.length;
    })
  );

  // print out character number of lastName
  console.log(
    programmers.map((e) => e.split(" ")[e.split(" ").length - 1].length)
  );
};
// usingSort();

// Use filter() to define a new variable betterProgrammers:
// Remember, filter() returns a new array where the callback produced a true value using the element.
const usingFilter = () => {
  // Define a betterProgrammers using programmers whose first name starts with L.
  const betterProgrammersL = programmers.filter((e) => e[0] === "L");
  // console.log(betterProgrammersL);
  // Define a betterProgrammers using programmers whose last name starts with T.
  const betterProgrammersT = programmers.filter((e) => {
    const lastName = e.split(" ")[e.split(" ").length - 1];
    return lastName[0] === "T";
  });
  // console.log(betterProgrammersT);
  // // Define a betterProgrammers using programmers where the first name's length is less than 4 characters.
  const betterProgrammers4FirstLess = programmers.filter(
    (e) => e.split(" ")[0].length < 4
  );
  // console.log(betterProgrammers4FirstLess);
  // // Define a betterProgrammers using programmers where the first name's length is greater than 4 characters.
  // const betterProgrammers4FirstMore = programmers.filter(
  //   (e) => e.split(" ")[0].length > 4
  // );
  // console.log(betterProgrammers4FirstMore);
  // // Define a betterProgrammers using programmers where the sum of the length of their name's characters is greater than 8.
  // const betterProgrammers8FullMore = programmers.filter(
  //   (e) => e.replace(" ", "").length > 8
  // );
  // console.log(betterProgrammers8FullMore);
  // // Define a betterProgrammers using programmers where the sum of the length of their name's characters is less than 8.
  // const betterProgrammers8FullLess = programmers.filter(
  //   (e) => e.replace(" ", "").length < 8
  // );
  // console.log(betterProgrammers8FullLess);
  // // Define a betterProgrammers using programmers where the last name begins with the letter K and ends with the letter n.
  const betterProgrammersKn = programmers.filter((e) => {
    const lastName = e.split(" ")[e.split(" ").length - 1];
    const firstChar = lastName[0];
    const lastChar = lastName[lastName.length - 1];

    if (firstChar === "K" && lastChar === "n") {
      return true;
    } else {
      return false;
    }

    // return lastName[0] === "K" && lastName[lastName.length - 1] === "n";
  });
  // console.log(betterProgrammersKn);
  // // Define a betterProgrammers using programmers whose first name is exactly 3 characters long.

  // const betterProgrammersExactFirst = programmers.filter(
  //   (e) => e.split(" ")[0].length === 3
  // );
  // console.log(betterProgrammersExactFirst);
  // // Define a betterProgrammers using programmers whose first name starts with ‘A'.
  const betterProgrammersWithA = programmers.filter((e) => e.startsWith("A")); //true ,false);
  console.log(betterProgrammersWithA);
  // // Define a betterProgrammers using programmers whose first & last name start with the same character, for example, Abhinav Asthana.
  const betterProgrammersSameInnitials = programmers.filter((e) => {
    const firstName = e.split(" ")[0];
    const lastName = e.split(" ")[e.split(" ").length - 1];
    return firstName[0] === lastName[0];
  });
  console.log(betterProgrammersSameInnitials);
};
// usingFilter();

// Use map() to define a new variable betterProgrammers:

// Remember, map() returns a new array where the elements are the return values of the callback passed to map.

// const betterProgrammers = [
//   { fullName: 'Dennis Ritchie' }, { fullName: 'Brian Kernighan' }, ...
// ]

// Define a array of objects with a property fullName.

let myArr = programmers.map((element) => {
  return { fullName: element };
});

// Define a array of objects with a property abbreviation.

let withAbv = myArr.map((el) => {
  const arrNameParts = el.fullName.split(" ");
  const abv = arrNameParts.reduce(
    (final, oneNamePart) => final + oneNamePart[0],
    ""
  );
  // let abv = "";
  // for (let i = 0; i < arrNameParts.length; i++) {
  //   abv += arrNameParts[i][0];
  // }
  return { ...el, abv };
});
// console.log(withAbv);
// Define a betterProgrammers array of objects with a property codeName which is their name's scrambled. For example, 'Loi Tran' => 'ioL narT', 'Elon Musk' => 'nolE ksuM'
const withScramble = programmers.map((el) => {
  //identify parts of name
  //turn full name string in to namePartArray
  const nameParts = el.split(" ");
  let scramble = "";
  for (let index = 0; index < nameParts.length; index++) {
    const element = nameParts[index];
    //for each part, turn string to array
    const elementArray = element.split("");
    //for each part, reverse the array element
    const elementArrayReverse = elementArray.reverse();
    //for each part, turn array back to string
    const scrambledPart = elementArrayReverse.join("");
    //turn namePartArray back to fullNameString
    scramble += scrambledPart + " ";
  }

  return { scramble: scramble.trim() };
});
// console.log(withScramble);

const withReduce = () => {
  withAbv = withAbv.map((e) => {
    const scrambled = e.fullName
      .split(" ") // turn full name string in to namePartArray
      .reduce((scrambleString, namePart) => {
        return scrambleString + " " + namePart.split("").reverse().join("");
      }, "");

    return { ...e, scrambled: scrambled.trim() };
  });
  console.log(withAbv);

  // Define a betterProgrammers array of objects with a property birthDate, which returns a date which places the programmer to be between 18-150 years old.
};
// withReduce();

// Use reduce() to define a new variable stew:

// Reduce the programmers to stew which is a string of all first names combined. ("Dennis, Brian, Ken, ...")

const stringFirstName = programmers.reduce((total, el) => {
  return total + el.split(" ")[0];
}, "");
console.log(stringFirstName);
// Reduce the programmers to stew which is a number, the sum of all first names characters length.
const sumFirstCharLength = programmers.reduce((total, el) => {
  return total + el.split(" ")[0].length;
}, 0);
console.log(sumFirstCharLength);
// Reduce the programmers to stew which is a number, the sum of all full names characters length.
const sumFullLength = programmers.reduce((total, el) => {
  return total + el.replace(" ", "").length;
}, 0);
console.log(sumFullLength);
// Reduce the programmers to stew which is a number, the sum of all first names characters length where the first name starts with L.
const sumFirstCharLengthCond = programmers.reduce((total, el) => {
  if (el[0] === "L") {
    console.log(el.split(" ")[0]);
    return total + el.split(" ")[0].length;
  } else {
    return total;
  }
}, 0);
