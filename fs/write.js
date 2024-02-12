const { writeFile } = require("node:fs/promises");

const myWriteFile = async () => {
  try {
    await writeFile("./txt.txt", "my first file");
  } catch (err) {
    console.log(err);
  }
};
myWriteFile();
