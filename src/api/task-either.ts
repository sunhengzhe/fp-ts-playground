import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";
import axios from "axios";
import * as E from "fp-ts/lib/Either";

(async () => {
  const ok = await pipe(
    TE.tryCatch(
      () => axios.get("https://httpstat.us/200"),
      (reason) => new Error(`${reason}`)
    ),
    TE.map((resp) => resp.data)
  )();

  console.log(ok);
})();
