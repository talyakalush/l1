const fs = require("node:fs/promises");

const myMkDir = async () => {
  try {
    await fs.mkdir("./test/myDir", { recursive: true });
  } catch (err) {
    console.log(err);
  }
};
myMkDir();
