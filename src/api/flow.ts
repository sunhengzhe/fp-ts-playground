import { flow, pipe } from "fp-ts/lib/function";
import R from "ramda";

const test1 = flow(R.multiply(2), R.add(10));

console.log("basic demo", test1(4));

const test2 = (n: number) => pipe(n, R.add(5), R.multiply(2));
// 等同于
const test3 = flow(R.add(5), R.multiply(2));

console.log("flow & pipe", test2(9) === test3(9));
