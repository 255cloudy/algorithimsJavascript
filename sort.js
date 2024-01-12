import { swap, rShift } from "./util.js";
// insertion sort implementation

export function selectionSort(unsortedArray) {
  // create a copy of the array
  const sortedArray = unsortedArray.map((x) => x);
  for (let i = 0; i < sortedArray.length; i++) {
    for (let z = i + 1; z < sortedArray.length; z++) {
      if (sortedArray[z] < sortedArray[i]) {
        swap(sortedArray, z, i);
      }
    }
  }
  return sortedArray;
}

export function insertionSort(unsortedArray) {
  // create a copy of the array
  let sortedArray = unsortedArray.map((x) => x);
  for (let i = 1; i < sortedArray.length; i++) {
    let val = sortedArray[i];
    let j = i - 1;
    while (j >= 0 && sortedArray[j] > val) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
    sortedArray[j + 1] = val;
  }
  return sortedArray;
}

export function shellSort(unsortedArray) {
  let interval = Math.floor(unsortedArray.length / 2);

  while (interval > 1) {
    for (let index = 0; index < unsortedArray.length; index += interval) {
      let inc = index + interval;
      if (inc <= unsortedArray.length) {
        if (unsortedArray[index] > unsortedArray[inc]) {
          swap(unsortedArray, index, inc);
        }
      }
    }
    interval = Math.floor(interval / 2);
  }
  unsortedArray = insertionSort(unsortedArray);
  return unsortedArray;
}

export function merge(leftArray, rightArray) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftElm = leftArray[leftIndex];
    const rightElm = rightArray[rightIndex];
    if (leftElm < rightElm) {
      output.push(leftElm);
      leftIndex++;
    } else {
      output.push(rightElm);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
}

// this is a recursive function that will recursively divide the array into two
export function mergeSort(unsortedArray) {
  // edge case
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  if (unsortedArray.length <= 20) {
    return insertionSort(unsortedArray);
  }
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

export function mergeSortBottomUp(unsortedArray) {
  for (let i = 1; i < unsortedArray.length; i *= 2) {
    let result = [];
    const multiplier = i * 2;
    for (let z = 0; z < unsortedArray.length; z += multiplier) {
      result.push(
        ...merge(
          unsortedArray.slice(z, z + i),
          unsortedArray.slice(z + i, z + multiplier),
        ),
      );
    }
    unsortedArray = result;
  }
  return unsortedArray;
}

function qSorthelper(leftArray, rightArray) {}

export function quickSort(unsortedArray) {
  if (unsortedArray.length <=1) {
    return unsortedArray;
  }
  if(unsortedArray.length<30){
    return insertionSort(unsortedArray);
  }
  const leftArray = [],
    rightArray = [];
  const last = unsortedArray.length - 1;
  const pivot = unsortedArray[last];
  for (let index = 0; index < last; index++) {
    if (unsortedArray[index] <= pivot) {
      leftArray.push(unsortedArray[index]);
    } else {
      rightArray.push(unsortedArray[index]);
    }
  }
 return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];  
}
export function builtInSort(unsortedArray){
  return unsortedArray.sort((a, b)=>{a-b});
}