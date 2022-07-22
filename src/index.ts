import glob from "glob";

glob("./**/*.ts", { cwd: __dirname }, async (e, files) => {
  if (e) {
    console.error("read files failed", e);
    return;
  }

  for (let file of files) {
    console.log(`***** ${file} *****`);
    await import(file);
    console.log("");
  }
});
