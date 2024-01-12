import { quickSort } from "./sort.js";
import { generateNumbers } from "./util.js";

const arr = generateNumbers(100, 5000);
// console.log(merge([59,102,289,328,363,396,410,453,122], [462]));
console.log(arr.sort((a, b)=> {return a-b}));

