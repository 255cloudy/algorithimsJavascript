import { assert } from "chai";
import { generateNumbers, swap, rShift } from "../util.js";

describe("generateNumbers Test", () => {
  const elements = 50;
  const range = 10;
  let numbers = generateNumbers(elements, range);

  it("returns array", () => {
    assert.isArray(numbers);
  });

  it("array of correct length", () => {
    assert.lengthOf(numbers, elements, "correct number of elements");
  });

  it("checks correct range", () => {
    numbers.forEach((element) => {
      assert.isBelow(element, range);
    });
  });
});

describe("swap numbers test", () => {
  const numbers = [10, 100, 1000];
  it("swap test", () => {
    swap(numbers, 0, 1);
    assert.equal(numbers[0], 100);
    assert.equal(numbers[1], 10);
    swap(numbers, 1, 2);
    assert.equal(numbers[1], 1000);
    assert.equal(numbers[2], 10);
  });
});

describe("right shift test", () => {
  const unshiftedArray = ["a", "b", "c", "d", "e"];
  const shiftedArray = ["a", "d", "b", "c", "e"];
  it("rshift test", () => {
    assert.equal(
      JSON.stringify(shiftedArray),
      JSON.stringify(rShift(unshiftedArray, 1, 3)),
    );
  });
});
