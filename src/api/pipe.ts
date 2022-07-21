import { pipe } from "fp-ts/lib/function";
import R from "ramda";

// A -> (A->B) -> (B->C) -> C
const p = pipe(2, R.multiply(2), R.add(10));

console.log("pipe", p);
