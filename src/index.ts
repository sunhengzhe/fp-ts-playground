import glob from "glob";

glob("./api/*.ts", { cwd: __dirname }, async (e, files) => {
  if (e) {
    console.error("read files failed", e);
    return;
  }

  for (let file of files) {
    console.log(`***** ${file} *****`);
    await import(file);
  }
});
