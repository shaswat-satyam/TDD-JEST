describe("Capitalize()", () => {
  it("capitalize exists", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("capitalize word to Word", () => {
    expect(capitalize("word")).toBe("Word");
  });
  it("capitalize doesn't affects already capitalized words", () => {
    expect(capitalize("Word")).toBe("Word");
  });
});
describe("reverseString()", () => {
  it("ReverseString exists", () => {
    expect(reverseString("")).toBe("");
  });
  it("reverseString reverse word to drow", () => {
    expect(reverseString("word")).toBe("drow");
  });
  it("reverseString reverse cringe to egnirc", () => {
    expect(reverseString("cringe")).toBe("egnirc");
  });
});

describe("Caluculator()", () => {
  it("Add 2 number", () => {
    expect(calculator("add", 1, 2)).toBe(3);
  });
  it("Subtract 2 from 2", () => {
    expect(calculator("sub", 2, 2)).toBe(0);
  });
  it("Subtract 2 from 5", () => {
    expect(calculator("sub", 5, 2)).toBe(3);
  });
  it("divide 4 by 2", () => {
    expect(calculator("div", 4, 2)).toBe(2);
  });
  it("multiply 4 by 4", () => {
    expect(calculator("mul", 4, 4)).toBe(16);
  });
  it("divide 4 by 0", () => {
    expect(calculator("div", 4, 0)).toBe("Infinity");
  });
});

describe("ceaserCipher", () => {
  it("Shift a to b", () => {
    expect(ceaserCipher("a", 1)).toBe("b");
  });
  it("shift abc to bce", () => {
    expect(ceaserCipher("abc", 1)).toBe("bcd");
  });
});

describe("analyzeArray", () => {
  it("analyze Works", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});

function calculator(operation, first, second) {
  switch (operation) {
    case "add":
      return first + second;
    case "sub":
      return first - second;
    case "mul":
      return first * second;
    default:
      if (second == 0) return "Infinity";
      return first / second;
  }
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function reverseString(string) {
  result = "";
  for (let i = 0; i < string.length; i++) {
    result = result.concat(string[string.length - i - 1]);
  }
  return result;
}

function isLowerCase(character) {
  return 97 <= character.charCodeAt() && character.charCodeAt() <= 122;
}

function isUpperCase(character) {
  return 65 <= character.charCodeAt() && character.charCodeAt() <= 90;
}

function ceaserCipher(string, shift) {
  result = "";
  for (let i = 0; i < string.length; i++) {
    let character;
    if (isLowerCase(string[i])) {
      character = ((string[i].charCodeAt() - 97 + shift) % 26) + 97;
    } else if (isUpperCase(string[i])) {
      character = ((string[i].charCodeAt() - 65 + shift) % 26) + 65;
    } else {
      character = String.charCodeAt(String[i]);
    }
    result += String.fromCharCode(character);
  }
  return result;
}

function analyzeArray(array) {
  let sum = 0;
  let min = 99999;
  let max = -99999;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
    sum += array[i];
  }
  return {
    average: sum / array.length,
    min: min,
    max: max,
    length: array.length,
  };
}
