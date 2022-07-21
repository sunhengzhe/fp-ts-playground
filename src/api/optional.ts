import { flow } from "fp-ts/lib/function";
import * as O from "fp-ts/Option";

interface Foo {
  bar: string;
}

const getBar: (_: Foo) => O.Option<string> = flow(
  O.fromNullable,
  O.map((a) => a.bar)
);

console.log("undefined get bar", getBar(undefined));
console.log("foo get bar", getBar({ bar: "bar" }));
