import { assert } from "chai";
import {
  selectionSort,
  insertionSort,
  shellSort,
  merge,
  mergeSort,
  mergeSortBottomUp,
  quickSort,
  builtInSort
} from "../sort.js";

describe("Sorting algorithim tests", () => {
  let unsorted = [100, 15, 2, 99, 45];
  let sorted = [2, 15, 45, 99, 100];
  it("selection Sort test", () => {
    assert.equal(
      JSON.stringify(sorted),
      JSON.stringify(selectionSort(unsorted)),
    );
  });
  it("insertion Sort test", () => {
    assert.equal(
      JSON.stringify(sorted),
      JSON.stringify(insertionSort(unsorted)),
    );
  });
  it("shell sort test", () => {
    assert.equal(JSON.stringify(sorted), JSON.stringify(shellSort(unsorted)));
  });
  it("merge test", () => {
    const left = [1, 10, 15, 20];
    const right = [6, 13, 25];
    const result = [1, 6, 10, 13, 15, 20, 25];

    assert.equal(JSON.stringify(result), JSON.stringify(merge(left, right)));
  });
  it("merge sort test", () => {
    assert.equal(JSON.stringify(sorted), JSON.stringify(mergeSort(unsorted)));
  });
  it("merge sort bottom up test", () => {
    assert.equal(
      JSON.stringify(sorted),
      JSON.stringify(mergeSortBottomUp(unsorted)),
    );
  });
  it("quick sort test", () => {
    assert.equal(JSON.stringify(sorted), JSON.stringify(quickSort(unsorted)));
  });
  it("built in  sort test", () => {
    assert.equal(JSON.stringify(sorted), JSON.stringify(builtInSort(unsorted)));
  });
});
