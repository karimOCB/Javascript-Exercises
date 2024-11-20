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