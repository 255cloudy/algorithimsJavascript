export function generateNumbers(number, range) {
  const randomArray = new Array();
  for (let i = 0; i < number; i++) {
    randomArray.push(Math.floor(Math.random() * range));
  }
  return randomArray;
}
// swap two positions
export function swap(array, a, b) {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

export function rShift(array, start, stop) {
  const resArray = array.map((x) => x);
  for (let i = stop; i > start; i--) {
    swap(resArray, i - 1, i);
  }
  return resArray;
}

export function time(name, runnerble) {
  console.time(name);
  runnerble();
  console.timeEnd(name);
}

export function avgSortTime(name, iterations, runnerbles) {
  let numbers = generateNumbers(1000, 5000);
  for (let i = 0; i < runnerbles.length; i++) {
    let sum = 0;
    for (let counter = 0; counter < iterations; counter++) {
      let t1 = performance.now();
      runnerbles[i].runnerble(numbers);
      let t2 = performance.now();
      sum += t2 - t1;
    }
    console.log(`${runnerbles[i].name} runs in a time of ${sum / iterations}`);
  }
}
