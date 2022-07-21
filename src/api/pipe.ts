import { pipe } from "fp-ts/lib/function";

const add = (a: number) => a * 2;
const plus10 = (a: number) => a + 10;

console.log(pipe(4, add, plus10));
