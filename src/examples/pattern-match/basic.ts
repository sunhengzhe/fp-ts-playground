type Nil = {
  readonly _tag: "Nil";
};

type Cons<A> = {
  readonly _tag: "Cons";
  readonly head: A;
  readonly tail: Cons<A> | Nil;
};

type List<A> = Nil | Cons<A>;

const match = <R, A>(onNil: () => R, onCons: (head: A, tail: List<A>) => R) => (
  fa: List<A>
): R => {
  switch (fa._tag) {
    case "Nil":
      return onNil();
    case "Cons":
      return onCons(fa.head, fa.tail);
  }
};

const isEmpty = match(
  () => true,
  () => false
);

const len = match(
  () => 0,
  (_, tail) => 1 + len(tail)
);

const l: List<number> = {
  _tag: "Cons",
  head: 7,
  tail: {
    _tag: "Cons",
    head: 9,
    tail: {
      _tag: "Cons",
      head: 11,
      tail: {
        _tag: "Nil"
      }
    }
  }
};

console.log("length of list", len(l));
