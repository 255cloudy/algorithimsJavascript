import { avgSortTime } from "./util.js";
import {
  selectionSort,
  insertionSort,
  shellSort,
  mergeSort,
  mergeSortBottomUp,
  quickSort,
  builtInSort
} from "./sort.js";

let iterations = 10000;
avgSortTime("selection sort ", iterations, [
  // { name: "selection sort", runnerble: selectionSort },
  { name: "insertion sort", runnerble: insertionSort },
  { name: "shell sort", runnerble: shellSort },
  { name: "merge sort", runnerble: mergeSort },
  { name: "merge sort bottom up", runnerble: mergeSortBottomUp },
  { name: "quick sort", runnerble: quickSort },
  { name: "built in  sort", runnerble: builtInSort }
]);
