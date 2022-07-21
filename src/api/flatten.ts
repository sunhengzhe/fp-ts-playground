import { flow, pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/Option";

interface Foo {
  bar?: {
    buzz: string;
  };
}

const getBuzz: (_: Foo) => O.Option<O.Option<string>> = flow(
  O.fromNullable,
  O.map(({ bar }) =>
    pipe(
      bar,
      O.fromNullable,
      O.map(({ buzz }) => buzz)
    )
  )
);

console.log("getFizz of undefined", getBuzz(undefined));
console.log("getFizz without bar", getBuzz({ bar: undefined }));
console.log("getFizz", getBuzz({ bar: { buzz: "buzz" } }));
