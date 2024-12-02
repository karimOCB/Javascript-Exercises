// 1
export const decodedValue = (colorsInput) => {
  const twoDigits =
    colors.indexOf(colorsInput[0]).toString() +
    colors.indexOf(colorsInput[1]).toString();
  return Number(twoDigits);
};

export const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

// 2
export const gigasecond = (givenDate) => {
  const gigasecond = 1000000000;
  const toMilisecond = gigasecond * 1000;
  const newDate = new Date(givenDate.valueOf() + toMilisecond);
  return newDate;
};

// 3
export const toRna = (dnaSequence) => {
  let dnaSequenceArray = dnaSequence.split("");
  let rnaSequence = dnaSequenceArray.map((letter) => {
    if (letter === "G") {
      return "C";
    } else if (letter === "C") {
      return "G";
    } else if (letter === "T") {
      return "A";
    }
    return "U";
  });

  return rnaSequence.join("");
};

// 4

const orbitalPeriodInEarthYears = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export const age = (planet, ageInSeconds) => {
  const planetLowerCase = planet.toLowerCase();
  const toEarthYears = ageInSeconds / (60 * 60 * 24 * 365.25);
  const planetAge = toEarthYears / orbitalPeriodInEarthYears[planet];
  return Math.round(planetAge * 100) / 100;
};


// 5
const alphabetOriginal = [
  ["a", 0], ["b", 0], ["c", 0],  ["d", 0], ["e", 0], ["f", 0],
  ["g", 0], ["h", 0], ["i", 0], ["j", 0], ["k", 0], ["l", 0],
  ["m", 0], ["n", 0], ["o", 0], ["p", 0], ["q", 0], ["r", 0],
  ["s", 0], ["t", 0], ["u", 0], ["v", 0], ["w", 0], ["x", 0],
  ["y", 0],  ["z", 0]
]
export const isPangram = (sentence) => {
  let alphabet = alphabetOriginal.map(([letter, count]) => [letter, count]);
  const sentenceArray = sentence.toLowerCase().split("");
  sentenceArray.forEach((letter) => {
    alphabet.forEach((characterArr) => {
      if (characterArr[0] === letter) { 
        characterArr[1]++;
      } 
    })
  })
  const result = alphabet.every(characterArr => characterArr[1] > 0);  
  return result;
};

// 5 Better approach
export function isPangram(input) {
  return new Set(input.toLowerCase().match(/[a-z]/g)).size === 26;
}

// 6
export class Matrix {
  stringInput;
  constructor(input) {
    this.stringInput = input;
    this.arrayRowMatrix = this.arrayStructure()
  }

  arrayStructure() {
    const lineBreakSeparation = this.stringInput.split("\n");
    const matrixRowArrOfStrings = lineBreakSeparation.map((arr) => arr.split(" "))
    const matrixRowArr = matrixRowArrOfStrings.map(arr => arr.map(elem => parseInt(elem)))
    return matrixRowArr;
  }

  get rows() {
    return this.arrayRowMatrix
  }

  get columns() {
    return this.arrayRowMatrix[0].map((_, colIndex) => this.arrayRowMatrix.map(row => row[colIndex]));
  }
}

// 6 Improved
export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n");
  }

  get rows() {
    return this.matrix.map(row => row.split(" ").map(Number))
  }

  get columns() {
    return this.rows[0].map((_, colIndex) => this.rows.map(row => row[colIndex]));
  }
}
