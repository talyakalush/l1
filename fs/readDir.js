const { readdir } = require("node:fs/promises");

const myreaddir = async () => {
  try {
    let dataFromFile = await readdir(".");
    console.log(dataFromFile);
  } catch (err) {
    console.log(err);
  }
};
myreaddir();
