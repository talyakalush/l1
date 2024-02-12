const { readFile } = require("node:fs/promises");

const myReadFile = async () => {
  try {
    let dataFromFile = await readFile("./txt.txt", { encoding: "utf-8" });
    console.log(dataFromFile);
  } catch (err) {
    console.log(err);
  }
};
myReadFile();
