const { sep } = require("node:path");

const basename = (path) => {
  let pathArr = path.split(sep);

  return pathArr[pathArr.length - 1];
};
console.log("windows", basename("C:\\Users\\user\\Desktop\\hello.js"));
console.log("Linux/Mac", basename("/users/user/desktop/hello.js"));
