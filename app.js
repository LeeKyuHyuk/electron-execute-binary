const { remote } = require ('electron');
const path = require ('path');
const { execFile } = require('child_process');

let asarBinary = path.join(remote.app.getAppPath(), "hello.exe");
console.log("'app.asar' Location : " + remote.app.getAppPath())
console.log("'hello.exe' Location : " + asarBinary)

execFile(asarBinary, null, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});