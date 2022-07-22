/**
 * example from https://rlee.dev/practical-guide-to-fp-ts-part-3
 */
import { flow } from "fp-ts/lib/function";
import * as Password from "./password";
import * as E from "fp-ts/lib/Either";

const pipeline = flow(
  Password.of,
  Password.validate({ minLength: 8, capitalLetterRequired: true }),
  E.map(Password.hash((value) => value.split("").reverse().join("")))
);

console.log("valid password", pipeline("Password123"));

const pipeline2 = flow(
  Password.of,
  Password.validate({ minLength: 8, capitalLetterRequired: true }),
  E.chainW(
    Password.eitherHash((value) => E.right(value.split("").reverse().join("")))
  )
);

console.log("valid password nested", pipeline2("Password123"));
